import Globals from '../styles/globals'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globals />
      <div className="wrapper">
        <header /> 
        {/* Substituir o header pelo componente do menu */}
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
