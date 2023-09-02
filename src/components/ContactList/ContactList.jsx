import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button, NoContacts } from './ContactList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [contactToDeleteId, setContactToDeleteId] = useState(null);

  if (!visibleContacts?.length && !error & !isLoading) {
    return <NoContacts>No contacts added yet.</NoContacts>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <List>
      {visibleContacts.map(({ _id, name, number }, idx) => (
        <ListItem key={_id}>
          <div>{idx + 1}.</div>
          {name}: {number}
          <Button
            onClick={() => {
              setContactToDeleteId(_id);
              dispatch(deleteContact(_id)).then(() => {
                setContactToDeleteId(null);
              });
            }}
            disabled={isLoading && contactToDeleteId === _id}
          >
            {contactToDeleteId === _id && <Loader />}
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
