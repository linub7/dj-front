import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2021</p>
      {router.pathname !== '/about' ? (
        <p>
          <Link href="/about">
            <a>About this project</a>
          </Link>
        </p>
      ) : (
        ''
      )}
    </footer>
  );
};

export default Footer;
