import { watchlist } from "../data/data";
import { useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HoverElement from "./HoverElement";
import { MyContext } from './MyContext';
import BuyWindow from "./BuyWindow";
import SellWindow from "./SellWindow";

function LeftSection() {
    
    return ( 
        <ul className="text-center text-lg w-full">
            {watchlist.map((item,index)=>{
                return <ItemList item={item} index={index}></ItemList>
            })}
        </ul>
     )
}

export default LeftSection;

const ItemList=({item,index})=>{
    const [showWindow,setShowWindow]=useState(null)
    const [currentStock,setCurrentStock]=useState(null)
    function setStock(stock){
        setCurrentStock(stock)
    }
    function showWindowfun(wind){
        setShowWindow(wind)
    }
    function cancelWindow()
    {
        setShowWindow(null)
    }

    const [hover,setHover]=useState(false)
    function hoverFun(){
        setHover(false)
    }
    return(
        <MyContext.Provider value={{showWindowfun,cancelWindow,setStock,hoverFun}}>
        <li key={index} className={ `${item.isDown?"text-red-500":"text-green-500"} p-2 border-b-1 w-full text-sm font-light`}onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <div className="flex justify-between">
                <div >{
                    item.name
                }</div>
                <div className="basis-6/10">
                <div>{
                hover?(<HoverElement item={item}></HoverElement>):(
                <span className="flex justify-center gap-4">
                    <span className="basis-1/4">{item.price}</span>
                    <span className="basis-1/4">{item.percent}</span>
                    <span className="basis-1/4">{
                        item.isDown?<KeyboardArrowDownIcon></KeyboardArrowDownIcon>:<KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                    }</span>
                </span>
                )
                }
                </div>
                </div>
                
            </div>
        </li>
        {   showWindow=="buy"&&<BuyWindow currentStock={currentStock} ></BuyWindow>}
        {
            showWindow=="sell"&&<SellWindow currentStock={currentStock}></SellWindow>
        }
        </MyContext.Provider>
    )
}
