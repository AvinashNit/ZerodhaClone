function Dashboard() {
    return (  
        <>
       <div className="flex justify-center gap-20">
        <div>
            <DashComp item={"equity"}></DashComp>
        </div>
        <div>
            <DashComp item={"commodity"}></DashComp>
        </div>
       </div>
       </>
    );
}

export default Dashboard;

const DashComp=({item})=>{
    return<>
        <div className="text-lg p-5 text-fuchsia-300">
        <p>{item}</p>
            <p>0</p>
            <p>margin available</p>
        </div> 
        <div className="text-lg p-5 ">
            <p className="my-2">margin used :<span>0</span></p>
            <p className="my-2">opening balance: <span>0</span></p>
            <p className="my-2">
                <a>view statement</a>
            </p>
        </div>
    </>
}