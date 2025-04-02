import { MyContext } from "./MyContext";
import { useContext } from "react";
function BuyWindow({currentStock}) {
    const {cancelWindow,hoverFun}=useContext(MyContext)
    return (  
        <div className="absolute bottom-40 left-200 border-2 w-80 p-5 bg-slate-200 rounded-xl border-fuchsia-500">
        <div className="text-sm my-5 border-2 rounded-full bg-transparent border-indigo-400">
            {currentStock!=null&&currentStock.name}
        </div>
            <label htmlFor="qty" className="text-lg font-light text-green-700 mx-4 "> Qty:</label>
            <input name="qty" type="number" defaultValue={1} className="border-2 rounded-full inline-block ps-2 w-30 my-4"></input>
            <br></br>
            <label htmlFor="price" className="text-lg font-light text-green-700 mx-4">price:</label>
            <input name="price" type="number" defaultValue={currentStock.price} className="border-2 rounded-full inline-block ps-2 w-30 my-4"></input>
            <button className="block border-2 bg-indigo-500 mx-auto my-4 w-20 rounded-full border-fuchsia-500 hover:scale-105"  onClick={()=>{cancelWindow()}}>Buy</button>
           <button className="block border-2 bg-rose-400 mx-auto w-20 rounded-full border-fuchsia-500 hover:scale-105" onClick={()=>{cancelWindow()}} >cancel</button>
        </div> 
    );
}

export default BuyWindow;