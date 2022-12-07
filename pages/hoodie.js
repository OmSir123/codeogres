import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Tsirt = () => {
  const [DTA, setDTA] = useState([]);
  useEffect(async () => {
    let data = await fetch("http://localhost:3000/api/item?q=hoodie");
    let parsedData = await data.json();
    setDTA(parsedData);
  }, []);
  console.log(DTA);

  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto '>
          <div className='flex flex-wrap -m-4'>
            {DTA.map((datas,index) => {
              return (
                <div key={index}  className='lg:w-1/4 md:w-1/2 p-4 w-full text-center '>
                  <a className='block relative   rounded overflow-hidden'>
                    <Link href={`/product/hoodie/${datas.id}`}>
                      <img
                        alt='ecommerce'
                        className='h-56 mx-auto cursor-pointer '
                        src={datas.image}
                      />
                    </Link>
                  </a>
                  <div className='mt-4'>
                    <h3 className='text-gray-500 text-base tracking-widest  title-font mb-1'>
                      {datas.title}
                    </h3>
                    <h2 className='text-gray-900 title-font text-lg font-medium'>
                      {datas.name}
                    </h2>
                    <p className='mt-1 text-lg'>रु{datas.price}</p>
                    <button className='flex mx-auto mt-2  text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none active:bg-indigo-700 hover:bg-indigo-600 rounded text-lg'>
                      <FaShoppingCart className='mx-1' />
                      <p className='text-sm'>Add To Cart</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tsirt;
