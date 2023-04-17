import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import {BsLightbulb, BsBasketFill, BsFillMoonFill} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/search';


const Navbar = () => {

    const [color,setColor] = useState(false)
    const dispatch = useDispatch()
    const {cardItems} = useSelector(state => state.card);
    const [search, setSearch] = useState('')

    //light-dark options
    useEffect(() => {
        const root = document.getElementById('root');
        if(color) {
            root.style.backgroundColor = "black"
            root.style.color = "white"
        }
        else {
            root.style.backgroundColor = "white"
            root.style.color = "black"
        }
    },[color])

    const searchPost = (e) => {
        if(e.key === 'Enter') {
            dispatch(searchAction(search))
        }
    }

  return (
    <div className='flex items-center justify-between px-3 h-28'>
        <div onClick={() => window.location='/'} className='text-2xl font-bold tracking-wider cursor-pointer'>LOGO</div>
        <div className='flex items-center space-x-4'> 
            <input onKeyPress={searchPost} onChange={e => setSearch(e.target.value)} value={search} className='border p-3 outline-none rounded-lg' type="text" placeholder='search' />
            <div onClick={() => setColor(!color)}>
                {
                    color ? <BsFillMoonFill size={25} className='cursor-pointer'/> : <BsLightbulb size={25} className='cursor-pointer'/>
                }
            </div>
            <div onClick={()=>dispatch({type: "DRAWER", payload: true})} className="relative">
                <BsBasketFill size={25} className='cursor-pointer' />
                <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>{cardItems.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar