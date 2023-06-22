import Login from '../../sections/auth/Login';
import HeadTitle from '../../components/HeadTitle';

// ----------------------------------------------------------------------

export default function LoginUnprotectedPage() {
  return (
    <>
      <HeadTitle title="Login Unprotected" />
      <Login />
    </>
  );
}
