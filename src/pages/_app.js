import '@/styles/globals.css'
import { AppProvider } from "../context/AppContext";
import Layout1 from '@/components/layout/layout1';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => {
    return <Layout1>{page}</Layout1>
  })
  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  )
}
