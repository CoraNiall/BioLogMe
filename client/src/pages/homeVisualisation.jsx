import React from 'react';
import HeaderNav from '../components/headerNav';

export default function HomeVisualisation({ loggedInUser }) {
  const { userName, userId } = loggedInUser;
  return (
    <>
      <HeaderNav />
      <h1>Welcome to BioLog Me, {userName}</h1>
      <h2>This is the Home page</h2>
      <h3>This is where you will eventually see your data visualisations</h3>
    </>
  );
}
