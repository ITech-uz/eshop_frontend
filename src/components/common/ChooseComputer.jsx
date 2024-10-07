import React, { useState } from 'react';
import Laptop from '../../assets/images/Laptop.svg'
import Laptopp from '../../assets/images/laptop2.svg'
const ChooseComputer = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
  };

  return (
    <div className={'bg-[#EFEFEF] w-[100%]'}>
      <div className={'max-w-[1300px] mx-auto'}>
        <h1 className={'text-[25px] font-bold'}>Kompyuter tanlash</h1>
        <div className={'grid grid-cols-2 gap-4'}>
          <section
            className={`bg-white p-4 rounded-lg shadow-md ${activeSection === 0 ? 'bg-blue-500' : ''}`}
            onClick={() => handleSectionClick(0)}
          >
            <div className={'flex justify-between'}>
              <p
                className={`text-[20px] font-bold ${activeSection === 0 ? 'text-white' : ''}`}
                onClick={() => handleSectionClick(0)}
              >
                Pulingiz miqdorini kiritgan holda tanlash
              </p>
              <button
                className={`bg-${
                  activeSection === 0 ? 'white' : 'blue-500'
                } text-[18px] p-2 rounded-lg ${
                  activeSection === 0 ? 'text-[#1B99E0]' : 'text-white'
                }`}
                onClick={() => handleSectionClick(0)}
              >
                Foydalanib ko‘rish
              </button>
            </div>
            <img className={'mt-3'} src={Laptop} alt="" />
          </section>
          <section
            className={`bg-white p-4 rounded-lg shadow-md ${activeSection === 1 ? 'bg-blue-500' : ''}`}
            onClick={() => handleSectionClick(1)}
          >
            <div className={'flex justify-between'}>
              <p
                className={`text-[20px] font-bold ${activeSection === 1 ? 'text-white' : ''}`}
                onClick={() => handleSectionClick(1)}
              >
                Pulingiz miqdorini kiritgan holda tanlash
              </p>
              <button
                className={`bg-${
                  activeSection === 1 ? 'white' : 'blue-500'
                } text-[18px] p-2 rounded-lg ${
                  activeSection === 1 ? 'text-[#1B99E0]' : 'text-white'
                }`}
                onClick={() => handleSectionClick(1)}
              >
                Foydalanib ko‘rish
              </button>
            </div>
            <img className={'mt-3'} src={Laptopp} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChooseComputer;
