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
      <main className="container px-4 py-6 mx-auto lg:px-6 lg:py-12">
        <Component {...pageProps} />
      </main>
    </Menu>
  )
}

export default MyApp
