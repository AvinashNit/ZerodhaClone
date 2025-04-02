import { Link } from "react-router-dom";

function Navbar() {
    return ( 
      <div className="flex justify-center gap-4  py-5 border-b-1 border-b-gray-300 pb-9 ">
          <div className="basis-1/3">
           <Link to={'/'}>
              <img src="./media/images/logo.svg" alt="logo"  className="max-w-3/9 align-middle pt-1"/>
              </Link>
          </div>
          <div className="basis-1/3">
            <ul className="flex justify-end gap-4 list-none text-sm text-center">
              <li>
                <Link to='/signup' className=" hover:text-base hover:text-blue-500">SignUp</Link>
              </li>
              <li>
                <Link to='/about' className=" hover:text-blue-500 hover:text-base">About</Link>
              </li>
              <li>
                <Link to='/products' className="hover:text-blue-500 hover:text-base">Products</Link>
              </li>
              <li>
                <Link to='/pricing' className="hover:text-blue-500 hover:text-base">Pricing</Link>
              </li>
              <li>
                <Link to='/support' className="hover:text-blue-500 hover:text-base">Support</Link>
              </li>
              <li>
                <a href='http://localhost:5173' className="hover:text-blue-500 hover:text-base">
                  <img src="/media/images/kite-logo.svg" className="w-10  h-7" alt="kite"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
     );
}

export default Navbar;