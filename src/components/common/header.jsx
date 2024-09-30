import System from '../../assets/logos/system.svg';
import Like from '../../assets/logos/like.svg';
import Basket from '../../assets/logos/basket.svg';
import SiteLogo from "@/components/common/SiteLogo.jsx";
import {Button} from "@/components/ui/button.jsx";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-2 backdrop-blur-[32px]">
      <div className="flex rounded-2xl justify-center items-center gap-4">
        <SiteLogo/>
        <select id="language-select"
                className="outline-none focus:outline-none bg-transparent flex-col text-[#323232] text-[15px] font-semibold">
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
        <div className='w-[662px] h-[46px] flex items-center bg-[#D9D9D9] gap-5 p-2 shadow-lg rounded-2xl'>
          <label htmlFor="search-input" className="sr-only"></label>
          <input id="search-input"
                 type="text"
                 className='w-[650px] h-[34px] outline-none p-2 text-black border-none rounded-2xl'
                 placeholder='Noutbooklar, telefonlar, barchasini qidiring'
          />
        </div>
        <div className="justify-start items-start inline-flex p-3 gap-3">
          <img
            src={System}
            alt="System Icon"
            className="bg-white backdrop-blur-[32px] cursor-pointer"
          />
          <img
            src={Like}
            alt="like icon"
            className="bg-white backdrop-blur-[32px] cursor-pointer"
          />
          <img
            src={Basket}
            alt="basket icon"
            className="bg-white backdrop-blur-[32px] cursor-pointer"
          />
        </div>


        <Button
          className="rounded-lg justify-center items-center gap-2 inline-flex">Kirish</Button>
      </div>

    </header>
  )
}

export default Header;






