import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import Global from './styles/global';
import Layout from './components/Layout';

const App = () => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Global />
        <Layout>
          <div className="text-center flex h-screen justify-center items-center">
            <h1 className="text-5xl">Welcome!</h1>
          </div>
        </Layout>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default hot(App);
