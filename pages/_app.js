import React from 'react'
import Modal from 'react-modal';
import Menu from '../src/components/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    Modal.setAppElement('#root');
  }, [])
  return (
    <Menu>
      <main className="lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
        <Component {...pageProps} />
      </main>
    </Menu>
  )
}

export default MyApp
