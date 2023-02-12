import CartDrop from "./CartDrop";
import { FiArchive, FiHeart, FiHome, FiMenu } from "react-icons/fi";

function Header() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">E-commerce</div>
          <CartDrop />
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>hi lorena</li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        Content
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <div className="flex w-full">
            <FiHome size={20}/>
            Home
            </div>
          </li>
          <li>
            <div className="flex w-full">
            <FiMenu size={20}/>
            Categories
            </div>
          </li>
          <li>
            <div className="flex w-full">
            <FiHeart size={20}/>
            Favorites
            </div>
          </li>
          <li>
            <div className="flex w-full">
              <FiArchive />
              My orders
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
