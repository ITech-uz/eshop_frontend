import System from '../../assets/logos/system.svg';
import Like from '../../assets/logos/like.svg';
import Basket from '../../assets/logos/basket.svg';
import SiteLogo from "@/components/common/SiteLogo.jsx";
import {Button} from "@/components/ui/button.jsx";
import Category from "@/components/common/category.jsx";

const category = [
  {
    id: 1,
    title: "Kompyuter",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 2,
    title: "Maishiy texnikalar",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 3,
    title: "Aksessuarlar",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 4,
    title: "Akustika",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 5,
    title: "Iphone",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 6,
    title: "Samsung",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 7,
    title: "Xiaomi",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 8,
    title: "Huawei",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 9,
    title: "Lenovo",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 10,
    title: "IPad",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
  {
    id: 11,
    title: "Galaxy Tab",
    sub_category: [
      {
        title: 'Link 1',
        href: "link1"
      },
      {
        title: 'Link 2',
        href: "link1"
      },
      {
        title: 'Link 3',
        href: "link1"
      }
    ],
  },
]

const Header = () => {
  return (
    <header className="w-full bg-white py-2">
      <div className={"container"}>
        <div className="flex rounded-2xl items-center justify-between gap-4">
          <div className={"flex gap-2 items-center"}>
            <SiteLogo/>
            <select id="language-select"
                    className="outline-none focus:outline-none bg-transparent flex-col text-[#323232] text-[15px] font-semibold">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </div>
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
      </div>
      <div className={"py-2 bg-black/80 w-full"}>
        <div className={"container"}>
          <div className="w-full flex items-center gap-3">
            {
              category.map(item => (
                <Category category={item} key={item.id}/>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;