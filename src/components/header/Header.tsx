import CartDrop from "./CartDrop";
import { FiArchive, FiHeart, FiHome, FiMenu } from "react-icons/fi";
import SearchInput from "./SearchInput";
function Header() {
  const categories = [
    "All",
    "Gadgets",
    "Clothes",
    "Shoes",
    "Accessories",
    "Home",
    "Beauty",
    "Toys",
    "Books",
    "Sports",
    "Electronics",
    "Automotive",
    "Grocery",
    "Health",
    "Baby",
    "Pet",
    "Luggage",
    "Jewelry",
  ];
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
          <div className="hidden lg:block mr-[25%]">
            <SearchInput categories={categories} />
          </div>
          <CartDrop />
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <div className="flex flex-col w-full rounded-full">
                  <FiArchive size={17} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}

        <div className="lg:hidden bg-base-300 pb-3">
          <SearchInput categories={categories} />
          <div className="w-screen overflow-auto scrollbar-none cursor-pointer">
            <div className="flex gap-2 pt-4">
              {categories.map((category) => (
                <div
                  key={category}
                  className="text-blue bg-base-100 w-max p-2 rounded-lg"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <div className="flex w-full">
              <FiHome size={20} />
              Home
            </div>
          </li>
          <li>
            <div className="flex w-full">
              <FiMenu size={20} />
              Categories
            </div>
          </li>
          <li>
            <div className="flex w-full">
              <FiHeart size={20} />
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
