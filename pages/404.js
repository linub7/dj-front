import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Layout title="Page not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
