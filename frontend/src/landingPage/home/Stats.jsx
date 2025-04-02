function Stats() {
    return ( 
        <section>
            <div className="flex justify-center gap-7 mb-10">
                <div className="text-center basis-1/3">
                    <h1 className="text-4xl font-sans font-semibold">
                    Unbeatable pricing
                    </h1>
                    <p className="mt-5 text-serif">
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                      
                </div>
                <div className="text-center basis-1/3 flex gap-6 justify-center">
                    <div className="text-amber-200 text-7xl">₹0
                    <p className="text-sm">free account opening</p>
                    </div>
                     <div className="text-amber-200 text-7xl">
                        ₹0<p className="text-sm">free equity delievery and direct mutual funds</p>
                     </div> 
                     <div className="text-amber-200 text-7xl">₹0
                        <p className="text-sm">Intraday and F&O</p>
                     </div> 
                </div>
            </div>
        </section>
    )
}

export default Stats;