// next
import Head from 'next/head';
// sections
import Logout from '../../sections/auth/Logout';

// ----------------------------------------------------------------------

export default function LoginUnprotectedPage() {
  return (
    <>
      <Head>
        <title> Logout | Designwithsatya</title>
      </Head>

      <Logout />
    </>
  );
}
