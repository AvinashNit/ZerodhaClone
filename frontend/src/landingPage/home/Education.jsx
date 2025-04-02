function Education() {
    return (  
       <section className="mt-10 pt-10">
        <div className="flex justify-center gap-6">
            <div className="basis-1/3">
                <img src="./media/images/education.svg">
                </img>
            </div>
            <div className="basis-1/3 pt-6 ">
                <h1 className="text-3xl font-semibold mb-4 font-sans">Free and Open market education</h1>
                <p className="font-serif mb-4">
                Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </p>
                <a href="#" className="block mb-5 text-blue-600">Varisty</a>
                <p className="font-serif mb-4">
                TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
                <a href="#" className="text-blue-700">Trading Q&A</a>
            </div>
        </div>
       </section>
    );
}

export default Education;
