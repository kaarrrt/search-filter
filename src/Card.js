import React from 'react'
import bed from './images/bed.png'
import bath from './images/bath.png'
import like from './images/like.png'
import './Card.css'
const Card = (props) => {
  return (
    <div className='lg:w-[20%] card bg-[#FEFEFE] shadow-md xl:w-[60%] mb-24 transition ease 
    hover:-translate-y-[0.1rem] hover:shadow-lg '>
        <img src={props.card.pic} alt="" className='w-[100%] '/>
        <img src={like} alt=""  className='lg:ml-[85%] xl:ml-[90%] mt-2' />
        <div className='font-bold pl-4 pb-2 text-xl'>${props.card.price}/ 
        <span className='text-black/[30%]'>month</span></div>
        <div className='lg:text-xl font-bold xl:text-2xl pl-4 pb-2'>{props.card.title}</div>
        <div className='font-semibold text-black/[46%] text-md pl-4 pb-4'>{props.card.address}</div>
        <hr />
        <div className='lg:block p-4 justify-around'>
            <div className='lg:pb-4 xl:pb-4 flex'>
                <img src={bed} alt="" />
                <span className='pl-2 font-semibold'>{props.card.bed} Bedroom</span>
                </div>
            <div className='lg:ml-[1%] xl:ml-0 flex'>
                <img src={bath} alt="" className=''/>
                <span className='font-bold ml-2'>{props.card.bath} Bathroom</span></div>
        </div>
        
    </div>
  )
}

export default Card