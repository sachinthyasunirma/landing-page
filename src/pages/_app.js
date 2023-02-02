import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
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
