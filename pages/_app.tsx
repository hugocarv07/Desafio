import '../styles/globals.css'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'

export default function App({ Component, pageProps }) {
  return (

    <>
      <div className='navbar2'>
        <Navbar />
      </div>
    
      <Component {...pageProps} />

      <div className='footer2'>
        <Footer />
      </div>
    </>
  )


}
