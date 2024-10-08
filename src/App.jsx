import './App.css'
import Header from "./component/Header"
import Nav from './component/Nav'
import Main from './component/Main'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
