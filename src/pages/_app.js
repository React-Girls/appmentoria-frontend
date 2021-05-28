import Globals from '../styles/globals'
import Header from '../components/Header'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globals />
      <div className='wrapper'>        
          <Header />
          <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
