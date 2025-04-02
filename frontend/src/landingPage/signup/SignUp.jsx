function SignUp() {
    return ( 
       <div>
        <section>
            <div className="text-center py-7">
                <h1 className="text-4xl font-stretch-extra-expanded py-6">
                Open a free demat and trading account online
                </h1>
                <p className="text-lg">
                Start investing brokerage free and join a community of 1.5+ crore investors and traders
                </p>
            </div>
        </section>
        <section className="text-center">
            <div className="flex justify-center mt-9">
                <div className="basis-1/3">
                    <SingleOptin name="Stocks" src="" content="Invest in all exchange-listed securities"></SingleOptin>
                </div>
                <div className="basis-1/3">
                    <SingleOptin name="Mutual Funds" src="" content="Invest in commission-free direct mutual funds"></SingleOptin>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="basis-1/3">
                    <SingleOptin name="IPO" src="" content="Apply to the latest IPOs instantly via UPI"></SingleOptin>
                </div>
                <div className="basis-1/3">
                    <SingleOptin name="Features & Options" src="" content="Hedge and mitigate market risk through simplified F&O trading"></SingleOptin>
                </div>
            </div>
                <button className="inline-block bg-blue-500 border-1 h-12 w-70 text-white rounded-lg mt-8 lg:hidden ">Explore Investments</button>
        </section>
        <section className="text-center mt-20">
            <h1 className="text-3xl">Steps to Open a Demat Account</h1>
            <div className="flex justify-center g-10">
                <div className="">
                    <img src="#"></img>
                </div>
                <div>
                    <ol>
                        <li>
                            Enter the requested details 
                        </li>
                        <li>
                            complete esing and verification
                        </li>
                    </ol>
                </div>

            </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
       </div>
     );
}

export default SignUp;

function SingleOptin({name,src,content}){
    return(
        <div className="text-center  p-4 m-8">
        <h1 className="font-medium">{name}</h1>
        <div className="flex gap-0">
            <div className="basis-1/3">
                <img src={`/media/images/${src}`} className=""></img>
            </div>
            <div className="basis-2/3">
                <p>
                        {content}
                </p>
            </div>
            </div>
        </div>
    )
}