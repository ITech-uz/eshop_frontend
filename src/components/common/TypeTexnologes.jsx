import { useEffect, useState } from 'react';

const TypeTexnologes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6f78cf289d2961c0.mokky.dev/XavoMuzlatgich');
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }
        setData(data);
      } catch (error) {
        console.error('Error fetching:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 justify-between max-w-[1300px] mx-auto">
      {data.map((item, i) => (
        <div key={i} className="flex flex-col  gap-4 items-center border-2 p-2 rounded-lg border-gray-300 w-[420px] h-[497px]">
          <h2 className="text-xl font-bold item-start">{item.title}</h2>
          <img className="w-[300px]" src={item.img} alt="" />
          <div className="flex justify-between items-center">
            <p className="text-blue-500 underline">Hammasi</p>
            <p>ta mahsulot</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypeTexnologes;
