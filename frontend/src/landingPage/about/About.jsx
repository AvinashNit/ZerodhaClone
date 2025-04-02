function About() {
    return(
        <section className="text-center ">
            <section className="border-b-2 border-gray-200 pb-40 pt-10">
                <div className="mt-20">
                     <h1 className="text-3xl">We pioneered the discount broking model in India.
                     <br></br>
                     Now, we are breaking ground with our technology.</h1>
                </div>
            </section>
            <section className="flex justify-center gap-8 mt-20 ">
                <div className="basis-2/5">
                <p className="p-4">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                <p className="p-4">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p className="p-4">Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="basis-2/5">
                    <p className="p-4">
                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p className="p-4">Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p className="p-4">And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                    </p>
                </div>
            </section>
            <section className="text-center flex justify-center mt-50">
                <div>
                    <img src="/media/images/self.jpg" className="w-70 rounded-full h-70 inline-block">
                    </img> 
                    <p className="inline-block ms-50">The clone is made by this man <br></br> an aspiring tech enthusiast</p>
                </div>
            </section>
        </section>
    )
}

export default About;