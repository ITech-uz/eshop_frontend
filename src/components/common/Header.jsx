import Image from '../../assets/logos/Texnobozor.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Search from '../../assets/logos/search.svg';
import System from '../../assets/logos/system.svg';
import Like from '../../assets/logos/Like.svg'
import Basket from '../../assets/logos/Basket.svg'
import User from "../../assets/logos/User.svg";
import Down from '../../assets/logos/Down.svg';
const Header = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-4 flex justify-between items-center gap-3'>
      <img src={Image} className='w-[128px] h-[26px]' alt="Texnobozor Logo"/>
      <label htmlFor="language-select" className="sr-only">Select Language</label>
      <select id="language-select" className='text-[25px] mr-3'>
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
      </select>

      <div className='flex items-center bg-[#D9D9D9] gap-5 p-2 shadow-lg rounded-2xl'>
        <Accordion type="single" collapsible className="w-[300px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Barcha qategoriyalar</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <label htmlFor="search-input" className="sr-only">Search</label>
        <input
          id="search-input"
          type="text"
          className='w-[500px] outline-none p-2 text-black border-none rounded-2xl'
          placeholder='Noutbooklar, telefonlar, barchasini qidiring'
        />
        <img src={Search} alt="Search Icon"/>
      </div>

      <div className={'flex gap-3'}>
        <img src={System} alt="System Icon"/>
        <p className={'text-xl'}>Solishtirish</p>
        <img src={Like} alt=""/>
        <img src={Basket} alt=""/>
        <div className={'flex gap-2 ml-2 items-center'}>
          <img src={User} alt=""/>
          <p className={'text-xl'}>Farrux</p>
          <img src={Down} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Header;
