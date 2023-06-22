import Logout from '../../sections/auth/Logout';
import HeadTitle from '../../components/HeadTitle';

// ----------------------------------------------------------------------

export default function LoginUnprotectedPage() {
  return (
    <>
      <HeadTitle title="Logout" />

      <Logout />
    </>
  );
}
