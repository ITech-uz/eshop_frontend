import TexnoBozor from '../../assets/logos/TexnoBozor2.svg'
import Facebook from '../../assets/logos/facebook.svg'
import Instagram from '../../assets/logos/instagram.svg'
import Telegram from '../../assets/logos/telegram.svg'
const Footer = () => {
    return (
      <div className={'bg-[#303030] p-5'}>
        <div className={'max-w-[1300px] mx-auto'}>
          <div className={'flex justify-between '}>
            <div className={'flex flex-col gap-[30px] items-start justify-between'}>
              <img className={'w-[200px]'} src={TexnoBozor} alt=""/>
              <div className={'flex gap-3'}>
                <img src={Facebook} alt=""/>
                <img src={Instagram} alt=""/>
                <img src={Telegram} alt=""/>
              </div>
            </div>
            <div>
              <b className={'text-white text-[20px]'}>Kompaniya</b>
              <p className={'text-[#CCCCCD]'}>Biz haqimizda</p>
              <p className={'text-[#CCCCCD]'}>Bog‘lanish</p>
              <p className={'text-[#CCCCCD]'}>Yordam</p>
            </div>

            <div>
              <b className={'text-white text-[20px]'}>Ma’lumot</b>
              <p className={'text-[#CCCCCD]'}>Yetkazib berish</p>
              <p className={'text-[#CCCCCD]'}>Vakansiya</p>
              <p className={'text-[#CCCCCD]'}>Shaxsiy kabinet</p>
              <p className={'text-[#CCCCCD]'}>Ommaviy oferta</p>
              <p className={'text-[#CCCCCD]'}>Muddatli to‘lov qoidalari</p>
            </div>

            <div>
              <b className={'text-white text-[20px]'}>Haridorga yordam</b>
              <p className={'text-[#CCCCCD]'}>Muddatli to‘lovga sotib olish</p>
              <p className={'text-[#CCCCCD]'}>Mahsulotni qaytarish</p>
              <p className={'text-[#CCCCCD]'}>Mahsulotlar uchun kafolat</p>
              <p className={'text-[#CCCCCD]'}>Ko‘p so‘raladigan savollar</p>
            </div>
          </div>
          <div className={'mt-[60px] flex justify-between items-end'}>
            <div>
              <h2 className={'text-white text-[20px]'}>Qo‘ng‘iroq qiling</h2>
              <p className={'text-[#CCCCCD] text-[18px]'}>+998 (95) 606-90-09</p>
              <div className={' flex gap-6 mt-2'}>
                <button className={' bg-white py-2 px-6 rounded-xl text-[20px]'}>+998   Telefon raqam</button>
                <button className={' bg-[#1B99E0] rounded-xl py-2 px-[20px] text-[20px] text-white'}>Menga qo‘ng‘iroq qiling</button>
              </div>
            </div>
            <p className={'text-[#CCCCCD] text-[19px] w-[500px]'}>© texnobozor.uz. Barcha huquqlardan himoyalangan. Tovarlarni yetkazib berish barcha viloyatlarda amal qiladi.</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;