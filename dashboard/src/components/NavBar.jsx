import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar({logout}) {

        const [selectedTab,setSelectedTab]=useState("dashboard");
        const handleClick=(nameofTab)=>{
            setSelectedTab(nameofTab)
        }    
    return ( 
        <div className='my-5 pb-3 border-b-2 border-b-gray-300'>
        <div className='flex gap-4'>
           <div className='flex justify-center  basis-1/4 '>
           <ul className='flex justify-center gap-18 basis-1/4'>
                <li>
                    <Link to="/home/nifty" onClick={()=>handleClick("nifty")} className={selectedTab=="nifty"?"active":""}>Nifty</Link>
                </li>
                <li>
                    <Link to="/home/sensex" onClick={()=>handleClick("sensex")} className={selectedTab=="sensex"?"active":""}>Sensex</Link>
                </li>
            </ul>
           </div>
           <div className='basis-2/4' >
           <ul className='flex gap-4 justify-center '>
                <li className='me-40'>
                    <Link to="/home" onClick={()=>handleClick("home")} className={selectedTab=="home"?"active":""}>
                        <img src='/images/download.png' className='w-10 h-8'></img>
                    </Link>
                </li>
                <li>
                    <Link to="/home/dashboard"onClick={()=>handleClick("dashboard")} className={selectedTab=="dashboard"?"active":""}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/home/holdings" onClick={()=>handleClick("holdings")} className={selectedTab=="holdings"?"active":""}>Holdings</Link>
                </li>
                <li>
                    <Link to="/home/positions" onClick={()=>handleClick("positions")} className={selectedTab=="positions"?"active":""}>Positions</Link>
                </li>
                <li>
                    <Link to="/home/orders" onClick={()=>handleClick("orders")} className={selectedTab=="orders"?"active":""}>Orders</Link>
                </li>
                <li>
                    <Link to="/home/funds" onClick={()=>handleClick("funds")} className={selectedTab=="funds"?"active":""}>Funds</Link>
                </li>
                <li>
                    <Link to="/home/bids" onClick={()=>handleClick("bids")} className={selectedTab=="bids"?"active":""}>Bids</Link>
                </li>
            </ul>
           </div>
           <div className='basis-1/4'>
           <ul className="flex gap-4 justify-center">
                <li>
                    <Link to="/cart" onClick={()=>handleClick("cart")} className={selectedTab=="cart"?"active":""}>
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    </Link>
                </li>
                <li>
                    <Link to="/notifications" onClick={()=>handleClick("notifications")} className={selectedTab=="notifications"&&"active"}>
                        <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                    </Link>
                </li>
                <li>
                   <button onClick={logout} >
                        <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                    </button>
                </li>
            </ul>
           </div>
        </div>
        </div>
    );
}

export default NavBar;