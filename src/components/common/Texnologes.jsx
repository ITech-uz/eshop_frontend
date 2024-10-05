
import Samsung from '../../assets/images/Samsung.svg';
import Huwai from '../../assets/images/Huwai.svg';
import Xiaomi from '../../assets/images/Xiaomi.svg'
import Iphone from '../../assets/images/iphone.svg';
import Noutbook from '../../assets/images/Noutbook.svg';
import Server from '../../assets/images/Kamputer.svg'
import Monobloc from '../../assets/images/Momoblock.svg'
import Monitor from '../../assets/images/Monitor.svg'
import Chexol from '../../assets/images/Chexol.svg'
import Energy from '../../assets/images/Energy.svg'
import NoutbookBag from '../../assets/images/NoutbookBag.svg'
import Watch from '../../assets/images/Watch2.svg'
const Texnologes = () => {
  return (
    <div className={'bg-[#EFEFEF] w-[100%]'}>

      <div className={'max-w-[1300px] mx-auto grid grid-cols-3 py-10 gap-4'}>

        <section className={'grid grid-cols-2 bg-white gap-5 justify-between rounded-xl p-2'}>
          <div className={'w-[90%]'}>
            <h1 className={'text-[25px] font-bold'}>Telefonlar</h1>
          </div>
          <div>
            <p className={'text-[20px] text-blue-500 underline text-end'}>Hammasi</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Samsung} alt=""/>
            <p className="title">Samsung</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Huwai} alt=""/>
            <p className="title">Huawei</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Xiaomi} alt=""/>
            <p className="title">Xiaomi</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Iphone} alt=""/>
            <p className="title">Iphone</p>
          </div>
        </section>
        <section className={'grid grid-cols-2 bg-white gap-5 justify-between rounded-xl p-2'}>
          <div className={'w-[90%]'}>
            <h1 className={'text-[25px] font-bold'}>Kompyuterlar</h1>
          </div>
          <div>
            <p className={'text-[20px] text-blue-500 text-end underline'}>Hammasi</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Noutbook} alt=""/>
            <p className="title">Noutbook</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Server} alt=""/>
            <p className="title">Komputer</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Monobloc} alt=""/>
            <p className="title">Monoblock</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Monitor} alt=""/>
            <p className="title">Monitorlar</p>
          </div>
        </section>
        <section className={'grid grid-cols-2 bg-white gap-5 justify-between rounded-xl p-2'}>
          <div className={'w-[90%]'}>
            <h1 className={'text-[25px] font-bold'}>Aksessuarlar</h1>
          </div>
          <div>
            <p className={'text-[20px] text-end text-blue-500 underline'}>Hammasi</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Chexol} alt=""/>
            <p className="title">Chexol</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Energy} alt=""/>
            <p className="title">Zaryadlovchi</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={NoutbookBag} alt=""/>
            <p className="title">Noutbook sumkasi</p>
          </div>
          <div className={'flex flex-col items-center gap-4 border-2 p-2 rounded-lg border-gray-300'}>
            <img src={Watch} alt=""/>
            <p className="title">Watch</p>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Texnologes;