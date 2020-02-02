import React from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyles from './styles/global';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <GlobalStyles />
      <div className="text-center flex h-screen justify-center items-center">
        <h1 className="text-5xl">Welcome!</h1>
      </div>
    </Layout>
  );
};

export default hot(App);
