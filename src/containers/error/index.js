import EmptyLayout from 'components/Layout/emptyLayout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <EmptyLayout logoTheme="dark">
      <Head>
        <title>404 Error</title>
      </Head>
      <section className="section crafting-banner-section error-page-section">
        <img className="d-none d-md-block image-left"></img>
        <img className="d-none d-md-block image-right"></img>
        <div className="crafting-content text-center">
          <h1 className="text-center mb-0 text-black">404</h1>
          <h5 className="text-center mb-2 mb-md-3">Oops! Page Not Found</h5>
          <p className="mb-1">We're sorry, but the page you were looking for doesn't exist.</p>
          <p>You can always find insightful stories on our</p>
          <Link href="/" className="btn btn-dark">
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </EmptyLayout>
  );
};

export default ErrorPage;
