import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ( isHome = false ) => {
    const router = useRouter();
    const activeTab = router?.query?.slug;

    return (
        <header className="header">
            <div className="container">
          <Link className="navbar-brand" href="/">
            {/* {isHome ? (
              <>
                <img className="d-md-inline-block" src="image/logo-dark.svg" alt="Logo" />
                <img className="d-none" src="image/logo-dark.svg" alt="Logo" />
              </>
            ) : ( */}
              <img className="d-inline-block " src="image/logo-white.png" alt="Logo" />
            {/* )} */}
          </Link>
          </div>
        </header>
    );
};


export default Header;
