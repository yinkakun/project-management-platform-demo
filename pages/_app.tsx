import 'styles/globals.css';
import 'styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Layout } from '@/components/layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;
