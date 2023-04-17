import React from 'react'
import {GrClose} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/actions/card'


const Card = () => {

  const dispatch = useDispatch()
  const info = ""

  const {cardItems} = useSelector(state => state.card);
  console.log("cardItems", cardItems)

  const deleteCard = (id) => {
    dispatch(removeCart(id))
  }

  return (
    <div className='w-1/3 h-full border-2 rounded-lg fixed top-0 right-0 z-50 bg-white p-3'>
        <div className='flex items-center h-20 justify-between'>
          <h1 className='text-2xl underline'>SEPETİM</h1>
          <GrClose onClick={() => dispatch({type: "DRAWER", payload: false})} size={25} className='cursor-pointer' />
        </div>

        {cardItems.length === 0 ? (
          <div className='text-gray-500'>Sepetinizde ürün bulunmamaktadır.</div>
        ) : 
        
          cardItems?.map((card,i) => (
            <div key={i} className='h-28 flex items-center justify-between space-x-2 border-b py-5 mt-4'>
            <img className='h-24 w-24 border rounded-lg' src={card?.image} alt="" />
            <div className='w-44'>
              <div className='font-bold text-xs'>{(card?.title).substring(0,50)} ({card.qty})</div>
              <div className='opacity-70 text-xs'>{(card?.description).substring(0,50)}...</div>
            </div>
            <div className='font-bold text-sm'>{(card?.price)} TL</div>
            <div onClick={() => deleteCard(card.id)} className='bg-red-500 w-18 text-center p-2 rounded-full cursor-pointer'><GrClose/></div>
            </div>
          ))
        }
       

    </div>
  )
}

export default Card