import React from 'react'
import Modal from 'react-modal';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Menu from '../src/components/Menu'
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    Modal.setAppElement('#root');
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Menu>
        <main className="lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
          <Component {...pageProps} />
        </main>
      </Menu>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
