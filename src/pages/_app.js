import '@typefaces-pack/typeface-inter';
import 'fontsource-metropolis';
import './../../public/static/scss/theme.scss';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; // You can also use 'localStorage' if you prefer

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = Cookies.get('isLoggedIn');

    // Redirect to /login if not logged in and current path is /
    if (!isLoggedIn && router.pathname === '/') {
      router.push('/login');
    }
  }, [router]);

  // Handle the redirection to /login after successful login
  useEffect(() => {
    // Check if the user is being redirected to login
    if (router.pathname === '/login') {
      const handleLogin = async () => {
        // Simulate login process and set login state
        // After successful login, set cookie
        Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
        router.push('/'); // Redirect to home after login
      };

      handleLogin();
    }
  }, [router]);

  return <Component {...pageProps} />;
};

export default App;
