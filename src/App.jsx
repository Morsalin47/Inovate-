import Banner from "./components/Banner/Banner"
import Features from "./components/Features/Features"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Platform from "./components/Platform/Platform"
import Integrate from "./components/Integrate/Integrate"
import Service from "./components/Service/Service"
import Customer from "./components/Customer/Customer"
import Pricing from "./components/Pricing/Pricing"
function App() {


  return (
    <>
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <Platform />
      <Features />
      <Integrate />
      <Service />
      <Customer />
      <Pricing />
    </>



  )
}

export default App