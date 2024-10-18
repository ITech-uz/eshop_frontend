import React from 'react';
import Banner from "@/components/common/Banner.jsx";
import Texnologes from "@/components/common/Texnologes.jsx";
import TypeTexnologes from "@/components/common/TypeTexnologes.jsx";
import ChooseComputer from "@/components/common/ChooseComputer.jsx";
import SeenProduct from "@/components/common/SeenProduct.jsx";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Texnologes/>
      <TypeTexnologes/>
      <ChooseComputer/>
      <SeenProduct/>
    </div>
  );
};

export default Home;