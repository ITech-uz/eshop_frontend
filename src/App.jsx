
import Header from "@/components/common/Header.jsx";
import Footer from "@/components/common/Footer.jsx";
import Navbar from "@/components/common/Navbar.jsx";
import Home from "@/pages/Home.jsx";
import ChooseComputer from "@/components/common/ChooseComputer.jsx";


function App() {
  return (
    <>
      <div className={'bg-[#EFEFEF]'}>
        <Header/>
        <Navbar/>
        <Home/>
        <ChooseComputer/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
