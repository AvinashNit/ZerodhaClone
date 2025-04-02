function Funds() {
    return (  
        <div>
            <div className="flex flex-row-reverse">
                <button className="border-2 w-30 rounded-full bg-indigo-600 text-white h-10 border-fuchsia-500 mx-4" >Withdraw</button>   
                <button className="border-2 w-30 rounded-full bg-indigo-600 text-white h-10 border-fuchsia-500 mx-4" >Add</button>
            </div>
            <div className="flex ">
            <FundComp item={"equity"}></FundComp>
            <FundComp item={"commodity"}></FundComp>
            </div>
        </div>
    );
}

export default Funds;

const FundComp=({item})=>{
    return<>
        <div className="flex ">
        
            <table className="p-4 border-2 border-collapse">
                <tr className="py-8 my-8">
                    <td>available margin</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>used margin</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>available cash</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>opening balance</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>payin</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>payout</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>span</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>Delivery margin</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>Exposure</td>
                    <td>0.00</td>
                </tr>
                <tr>
                    <td>options premium</td>
                    <td>0.00</td>
                </tr>
            </table>
        </div>
    </>
}