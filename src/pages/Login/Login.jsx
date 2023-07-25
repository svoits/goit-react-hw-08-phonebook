import { LoginForm } from 'components/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
