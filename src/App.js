import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import SaleImage from "./components/SaleImage"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import PopularPage from "./components/PopularPage"
import Footer from "./components/Footer"


function App(){
  return(
    <>
    <Navbar></Navbar>
    <Categories></Categories>
    <SaleImage></SaleImage>
    <Recommended></Recommended>
    <Topics></Topics>
    <PopularPage></PopularPage>
    <Footer></Footer>

    </>

  )
}
export default App