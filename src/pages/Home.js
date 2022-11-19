import { Image } from '@chakra-ui/react';

import image from '../images/book-g8daf5d1f8_640.png';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        PhoneBook welcome page
        <Image src={image} alt="img" objectFit="cover" padding="8px" />
      </h1>
    </div>
  );
}
