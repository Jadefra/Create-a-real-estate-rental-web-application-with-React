import React, { useState, useEffect } from 'react';

import loading from '../../assets/images/loading.gif';

import AllErrors from '../../components/AllErrors/AllErrors';

import './LoadingScreen.scss';

function LoadingScreen() {
  const [error, setError] = useState(false);

  useEffect(() => {
    // A timeout to display the error
    const waitError = setTimeout(() => {
      setError(true);
    }, 5000);

    return () => {
      clearTimeout(waitError);
    };
  }, []);

  if (error) {
    return <AllErrors subtitle="Oops, une erreur est survenue lors du chargement" />;
  }

  return (
    <div className="loading">
      <img src={loading} alt="Loading" />
    </div>
  );
}

export default LoadingScreen;

