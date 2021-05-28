import Globals from '../styles/globals'
import Header from '../components/Header'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globals />
      <div className="wrapper">
        <header /> 
          <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
