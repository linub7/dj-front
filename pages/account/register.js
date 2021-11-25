import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { useContext, useEffect, useState } from 'react';
import styles from '@/styles/AuthForm.module.css';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';

const RegisterPage = () => {
  const { register, error } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => error && toast.error(error));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    register({ username, email, password });
  };

  return (
    <Layout title="User Registration">
      <div className={styles.auth}>
        <h1>
          <FaUser />
          Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your username"
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Rewrite your password"
            />
          </div>
          <input type="submit" value="Register" className="btn" />
        </form>
        <div>
          <p>
            Already have an account? &nbsp;
            <Link href="/account/login">
              <a>Login</a>
            </Link>{' '}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
