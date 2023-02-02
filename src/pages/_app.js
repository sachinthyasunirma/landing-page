import { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap');
  })
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
