import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productActionDetail } from '../redux/actions/products';
import {CgMathPlus, CgMathMinus} from 'react-icons/cg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productsCard } from '../redux/actions/card';

function Details() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.product);
  const [count,setCount] = useState(0)

  const decrement = () => {
    if(count>0) {
      setCount(count-1);
    }

  }
  const increment = (stock) => {
    if(count<stock) {
      setCount(count+1);
    }else {
      const msg = `Bu ürün için sadece ${stock} adet mevcuttur.`
      toast.error(msg)
    }
  }

  useEffect(() => {
    dispatch(productActionDetail(id))
  },[dispatch])

  const addCard = () => {
    dispatch(productsCard(id,count))
    dispatch({type: 'DRAWER', payload: true})
  }



  return (
    <div className='bg-white rounded-lg border-2 w-full flex items-center justify-center space-x-5 p-3'>
       <ToastContainer />
      <img className='w-1/3' src={product?.image} alt="" />
      <div className='w-2/3 space-y-3'>
          <div className='font-bold text-2xl'>{product?.title}</div>
          <div className='opacity-70'>{product?.description}</div>
          <div className='opacity-70'><span className='font-bold'>Category:</span> {product?.category}</div>
          <div className='opacity-70'><span className='font-bold'>Rate:</span> {product?.rating?.rate} - Stock: {product?.rating?.count}</div>
          <div className='text-2xl'><span className='font-bold'>Price:</span> {product?.price} TL</div>

          <div className='flex space-x-4 items-center'>
            <CgMathMinus onClick={decrement} className='cursor-pointer border border-indigo-600 rounded-full p-1' size={30}/>
            <span className='text-3xl'>{count}</span>
            <CgMathPlus onClick={() => increment(product?.rating?.count)} className='cursor-pointer border border-indigo-600 rounded-full p-1 inc' size={30}/>
          </div>
          
          <button onClick={addCard} className='bg-indigo-600 w-1/3 rounded-lg p-2 text-white hover:bg-black hover:bg-indigo-500'>Sepete Ekle</button>
      </div>
    </div>
  )
}

export default Details