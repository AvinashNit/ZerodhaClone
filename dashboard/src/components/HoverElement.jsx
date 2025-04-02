import Tooltip from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useContext } from 'react';
import { MyContext } from './MyContext';
function HoverElement({item}) {
    const btnstyle="border-2 border-gray-200 p-1 rounded-sm w-8 m-1 h-8"
    const {showWindowfun,setStock}=useContext(MyContext)
    return (  
        <span className='flex justify-around text-xs font-bold'>
            <Tooltip title="Buy(B)">
                <button className={btnstyle} onClick={()=>{showWindowfun("buy");setStock(item)}}>Buy</button>
            </Tooltip>
            <Tooltip title="Sell(S)">
                <button className={btnstyle} onClick={()=>{showWindowfun("sell");setStock(item)}}>Sell</button>
            </Tooltip>
            <Tooltip title="Chart">
                <button className={btnstyle}>
                    <BarChartIcon></BarChartIcon>
                </button>
            </Tooltip>
            <Tooltip title="more" >
                <button className={btnstyle}>
                    <MoreHorizIcon></MoreHorizIcon>
                </button>
            </Tooltip>
        </span>
    );
}

export default HoverElement;