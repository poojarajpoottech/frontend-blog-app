import Register from '../../sections/auth/Register';
import HeadTitle from '../../components/HeadTitle';

// ----------------------------------------------------------------------

export default function RegisterUnprotectedPage() {
  return (
    <>
      <HeadTitle title="Register Unprotected" />
      <Register />
    </>
  );
}
