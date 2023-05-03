import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Head() {
  return (
    <HelmetProvider>
        <Helmet>
            <title>Kasa</title>
            <script src="https://kit.fontawesome.com/9716f2641e.js" crossorigin="anonymous"></script>
        </Helmet>
    </HelmetProvider>
  );
}

export default Head;
