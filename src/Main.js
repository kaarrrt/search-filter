import React,{useState} from 'react'
import './Main.css'
import search from './images/search.png'
import vt from './images/vt.png'
import right from './images/right.png'
import CardImages from './CardImages'
import Card from './Card'
const Main = () => {
  const [loc,newLoc]=useState('ny');
  const [price,newPrice]=useState('md');
  const [type,newType]=useState('houses');
  const [month,newMonth]=useState('oct');
  const [cards,updateCards]=useState(CardImages)
  const onEventChange=(e)=>{
    //eslint-disable-next-line 
    const newcards=CardImages.filter((card)=>{
        if(card.state===loc && card.range===price && card.type===type && card.month===month){
          
          return (card)
          
        }
      })
    updateCards(newcards);
  }
  
  return (
    <>
    <div className='main pb-20'>
        <div className='ml-24 font-semibold text-2xl'>Search properties to rent</div>
        <div className='font-semibold text-black/[27%]  bg-[#EBEAEA] w-52 
        rounded-md px-4 py-2 ml-[77%] mt-[-2.5%]'>Search
        <div><img src={search} alt="" className='h-6 ml-36 mt-[-14%] opacity-0.05'  /></div></div>
        <div className='bg-[#F3F3F3] mt-12 w-[80%] relative left-24 rounded-md flex justify-around'>
            <div>
            <div className='pt-4 pl-[14%] font-medium text-lg text-black/[57%]'>Location</div>
            <div className='pb-4 text-lg font-bold'>
              <select name="States" id="" className='rounded-md ml-[-5%] bg-[#]' onChange={(e)=>{newLoc(e.target.value)}}>
                <option value="ny">New York,USA</option>
                <option value="hou">Houston,USA</option>
              </select>
            </div>
            <img src={vt} alt="" className='absolute left-[25%] top-[20%]'/>
            </div>
            <div>
            <div className='pt-4 pl-[50%] font-medium text-lg text-black/[57%]'>Month</div>
            <div className='pb-4 text-lg font-bold'>
              <select name="Month" id="" className='rounded-md ml-[25%] bg-[#]' onChange={(e)=>{newMonth(e.target.value)}}>
                <option value="oct">October</option>
                <option value="nov">November</option>
              </select>
            </div>
            <img src={vt} alt="" className='absolute left-[55%] top-[20%]'/>
            </div>
            <div>
            <div className='pt-4 pl-[60%] font-medium text-lg text-black/[57%]'>Price</div>
            <div className='pb-4 text-lg font-bold'>
              <select name="Prices" id="" className='rounded-md ml-[30%] bg-[#]' onChange={(e)=>{newPrice(e.target.value)}}>
                <option value="md">$1500-$2500</option>
                <option value="lux">$2500-$4000</option>
              </select>
            </div>
            <img src={vt} alt="" className='absolute left-[80%] top-[20%]'/>
            </div>  
            <div>
            <div className='pt-4 pl-[44%] font-medium text-lg text-black/[57%]'>Type</div>
            <div className='pb-4 text-lg font-bold'>
              <select name="Types" id="" className='rounded-md ml-[15%] bg-[#]' onChange={(e)=>{newType(e.target.value)}}>
                <option value="houses">Houses</option>
                <option value="apartments">Apartments</option>
              </select>
                       </div>
            </div>
        
        </div>
        <img src={right} alt="" className='ml-[88%] mt-[-4%] cursor-pointer translate-x-0 
        hover:translate-x-0.5 hover:transition ease' onClick={(e)=>onEventChange(e)}/>
    </div>
    <div className='cards ml-32'>
        {
        cards.map((slide,index)=>(
        <Card card={slide} key={index}/>
    ))}
    {cards===[]?<div className='text-black'>Sorry nothing found!!</div>:
    <div className='text-black hidden'>Sorry nothing found!!</div>}
    </div>
    
    </>
  )
}

export default Main