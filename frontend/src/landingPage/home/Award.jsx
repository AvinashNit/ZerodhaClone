function Award() {
    return (
       <section>
        <div className="flex flex-row-reverse justify-center gap-9 mt-30 text-center">
            <div className="basis-1/3">
                <img src="./media/images/ecosystem.png"></img>
                <div className="flex justify-center gap-10 mt-5 text-blue-800">
                    <a href="#" target="_blank">Explore our Products</a>
                    <a href="#" target="_blank">Try our Kite</a>
                </div>
            </div>
            <div className="basis-1/3 text-center">
                <h1 className="text-3xl font-serif">Trust with confidence</h1>
                <div className="mt-5">
                    <h1 className="text-2xl font-serif">
                    Customer-first always
                    </h1>
                    <p className="mt-2">
                    That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                </div>
                <div className="mt-5">
                    <h1 className="text-2xl font-serif">
                    No spam or gimmicks
                    </h1>
                    <p className="mt-2">
                    No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>
                </div>
                <div className="mt-5">
                    <h1 className="text-2xl font-serif">
                    The Zerodha universe
                    </h1>
                    <p className="mt-2">
                    Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                </div>
                <div className="mt-5">
                    <h1 className="text-2xl font-serif">
                    Do better with money
                    </h1>
                    <p className="mt-2">
                    With initiatives like <a href="#" className="text-blue-700" target="_blank">Nudge</a> and <a href="#" className="text-blue-700">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money. 
                    </p>
                </div>
            </div>
        </div>
        <div className="text-center">
            <img src="./media/images/pressLogos.png" className=" inline-block my-20"></img>
        </div>
       </section>
          );
}

export default Award;