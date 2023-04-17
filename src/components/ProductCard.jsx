import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-indigo-600 w-1/4 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2 bg-white p-3'>
        <img onClick={() => window.location = `detail/${prd.id}`} className='h-32 object-cover cursor-pointer' src={prd?.image} alt="" />
        <div className='font-bold h-16 text-center mt-2'>{(prd?.title).substring(0,35)}</div>
        <div className='text-center opacity-70 text-sm mt-2'>{(prd?.description).substring(0,45)} ...</div>
        <div className='font-bold text-lg'>{prd?.price} TL</div>
        <button className='bg-indigo-600 w-full rounded-lg p-2 text-white hover:bg-black'>Sepete Ekle</button>
    </div> 
  )
}

export default ProductCard