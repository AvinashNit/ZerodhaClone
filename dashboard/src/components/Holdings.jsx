import { holdings } from "../data/data";
function Holdings() {
    const data=holdings;
    const list=data.map((item)=>{
        return <tr style={{margin:"8px", textAlign:"center",padding:"5px",border:"2px solid gray", height:"40px"}}>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.avg}</td>
            <td>{item.price}</td>
            <td>{item.net}</td>
            <td>{item.day}</td>
        </tr>
    })
    return ( 
       <div>
        <table style={{border:"2px solid gray ", borderCollapse:"collapse", width:"100%", alignContent:"center"}}>
            <tr style={{margin:"8px", textAlign:"center",padding:"5px", border:"2px solid gray",height:"40px"}}>
                <th>Stock</th>
                <th>Qty</th>
                <th>avg.</th>
                <th>Price</th>
                <th>Net</th>
                <th>Day</th>
            </tr>
        {
            list
        }
        </table>
       </div>
     );
}

export default Holdings;