import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { useContext, useEffect, useState } from 'react';
import styles from '@/styles/AuthForm.module.css';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';

const LoginPage = () => {
  const { login, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => error && toast.error(error));

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title="User Login">
      <div className={styles.auth}>
        <h1>
          <FaUser />
          LOG IN
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
        <div>
          <p>
            Don{"'"}t have an account?! &nbsp;
            <Link href="/account/register">
              <a>Register</a>
            </Link>{' '}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
