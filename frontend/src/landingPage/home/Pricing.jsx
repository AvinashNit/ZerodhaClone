function Pricing() {
    return ( 
        <div className="container ps-5 pe-5 my-5">
            <div className="row">
                <div className="col me-5">
                    <h1 className="fs-3">Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="#" className="text-decoration-none fs-6">See pricing
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="col ms-5">
                    <div className="row">
                        <div className="col ">
                        <insert className="fs-1">
                        <i className="fa fa-inr" aria-hidden="true"></i>0
                          </insert>
                            <p>
                                free account
                                <br/>
                                    openning
                            </p>
                        </div>
                        <div className="col ">
                        <insert className="fs-1">
                        <i className="fa fa-inr" aria-hidden="true"></i>0
                          </insert>
                            <p>
                                free equity delivery
                                <br/>
                                    and direct mutual funds
                            </p>
                        </div>
                        <div className="col ">
                        <insert className="fs-1">
                        <i className="fa fa-inr" aria-hidden="true"></i>20
                          </insert>
                                <p>
                                Intraday and
                                <br/>
                                    F&O
                                </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;