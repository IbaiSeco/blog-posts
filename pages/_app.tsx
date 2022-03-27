// Importing global stylesheets
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClientProvider, QueryClient } from 'react-query'

import type { AppProps } from 'next/app'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
