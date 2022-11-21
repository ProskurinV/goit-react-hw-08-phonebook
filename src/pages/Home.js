import { Image } from '@chakra-ui/react';

import image from '../images/book-g8daf5d1f8_640.png';
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'center',
    marginBottom: '8px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PhoneBook</h1>
      <Image src={image} alt="img" objectFit="cover" width="500px" />
    </div>
  );
}
