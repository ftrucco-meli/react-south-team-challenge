import React from 'react';
import './style.css';
import ContactCard from './components/ContactCard';
import Head from 'react-declarative-head';
import getUsers from './services/users';

export default function App() {
  const [state, setState] = React.useState([
    {
      firstName: 'Franco',
      lastName: 'Trucco',
      email: 'franco.trucco1@gmail.com',
      phoneNumber: '+54 9 3492 638897',
      location: {
        city: 'Rafaela',
        state: 'Santa Fe',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
    },
  ]);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {state.map((users) => (
        <ContactCard {...users} />
      ))}
    </div>
  );
}
