import React from 'react';

import Layout from '../components/Layout';
import { login, logout } from '../funtions';
import { useUser } from '../hooks/useUser';

const IndexPage = () => {
  const { user, mutate: userMutate, loading, loggedOut } = useUser();

  console.log(`===loading: ${loading}`);
  console.log(`===loggedOut: ${loggedOut}`);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js</h1>
      {user ? (
        <button
          onClick={async () => {
            await logout();
            await userMutate(null); // after logging in, we revalidate the SWR
          }}>
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            await login();
            await userMutate(); // after logging in, we revalidate the SWR
          }}>
          Login To Continue
        </button>
      )}
    </Layout>
  );
};

export default IndexPage;
