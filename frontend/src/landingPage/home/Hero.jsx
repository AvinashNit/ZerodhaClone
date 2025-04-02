function Hero() {
    return ( 
       <section>
       <div className="text-center flex justify-center mt-20">
        <img src="./media/images/homeHero.png" className="w-2/3 h-full"></img>
       </div>
       <div className="text-center">
         <h1 className="text-4xl font-bold mt-10 mb-5">
                Invest in Everything
         </h1>
         <p className="text-xl">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 w-min-1/5 px-auto">
        SignUp for Free
       </button>
       </div>
       </section>
     );
}

export default Hero;