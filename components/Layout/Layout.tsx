import Header from '../Header'
import Footer from '../Footer'

function Layout({ children }: { children : React.ReactNode }){

    return (
      <>
        <Header/>
            <div className="page-container">
              { children }
            </div>
        <Footer/>
      </>
    )
}


export default Layout
