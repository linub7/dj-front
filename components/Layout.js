import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Showcase from './Showcase';
import { useRouter } from 'next/router';

const Layout = ({ children, title, keywords, description }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'DJ EVENTS | Find The Hottest Parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
};

export default Layout;
