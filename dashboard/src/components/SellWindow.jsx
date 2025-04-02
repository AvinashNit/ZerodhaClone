import { useContext } from "react";
import { MyContext } from "./MyContext";
function SellWindow({currentStock}) {
    
    const {cancelWindow}=useContext(MyContext)
    return (  
        <div className=" absolute bottom-10 p-10 left-200 border-2 w-100 rounded-2xl bg-indigo-300">
        <div className="border-2 rounded-full my-4 text-white font-light">
            {currentStock!=null&&currentStock.name}
        </div>
            <label htmlFor="qty" className="text-lg font-light me-3">qty:</label>
            <input name="qty" type="number" defaultValue={1} max={5} className="inline-block my-4 border-2 rounded-full w-20 ps-2"></input>
            <br></br>
            <label htmlFor="price" className="text-lg font-light me-3">price:</label>
            <input className="border-2 rounded-full w-30 me-5 my-4 ps-2" name="price" type="number" defaultValue={currentStock.price} ></input>
            <button className="block border-2 border-fuchsia-500 bg-slate-600 my-4 text-white w-20 mx-auto rounded-full font-bold hover:scale-105" onClick={()=>{cancelWindow()}}>sell</button>
           <button className="block border-2 border-fuchsia-500 bg-rose-400 text-white w-20 mx-auto rounded-full font-bold hover:scale-105" onClick={()=>{cancelWindow()}} >cancel</button>
        </div> 
    );
    
}

export default SellWindow;