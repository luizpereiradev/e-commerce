import { useState } from "react";
import {
  FiBarChart,
  FiBox,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiCommand,
  FiHome,
  FiInbox,
  FiPackage,
  FiShoppingBag,
  FiShoppingCart,
  FiTag,
  FiTrendingUp,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

interface SidebarItem {
  icon: JSX.Element;
  href: string;
  describe: string;
  subitems: {
    label: string;
    icon: JSX.Element; 
  }[];
}
const sidebarItems: SidebarItem[] = [
  {
    icon: <FiHome className="w-5 h-5" />,
    href: "#",
    describe: "Dashboard",
    subitems: [],
  },
  {
    icon: <FiShoppingBag className="w-5 h-5" />,
    href: "#",
    describe: "Products",
    subitems: [
      { label: "All Products", icon: <FiShoppingBag size={18} /> },
      { label: "Add New Product", icon: <FiPackage size={18} /> },
      { label: "Categories", icon: <FiCommand size={18} /> },
      { label: "Tags", icon: <FiTag /> },
    ],
  },
  {
    icon: <FiBarChart className="w-5 h-5" />,
    href: "#",
    describe: "Analytics",
    subitems: [
      { label: "Sales Analytics", icon: <FiTrendingUp size={18} /> },
      { label: "Customer Analytics", icon: <FiUsers size={18} /> },
      { label: "Product Analytics", icon: <FiShoppingCart size={18} /> },
    ],
  },
  {
    icon: <FiUser className="w-5 h-5" />,
    href: "#",
    describe: "Customers",
    subitems: [
      { label: "All Customers", icon: <FiUsers size={18} /> },
      { label: "Add New Customer", icon: <FiUserPlus size={18} /> },
      { label: "Groups", icon: <FiUsers size={18} /> },
    ],
  },
  {
    icon: <FiInbox className="w-5 h-5" />,
    href: "#",
    describe: "Orders",
    subitems: [
      { label: "All Orders", icon: <FiShoppingCart size={18} /> },
      { label: "Pending Orders", icon: <FiClock size={18} /> },
      { label: "Completed Orders", icon: <FiCheckCircle size={18} /> },
    ],
  },
  {
    icon: <FiPackage className="w-5 h-5" />,
    href: "#",
    describe: "Inventory",
    subitems: [
      { label: "Stock Items", icon: <FiBox size={18} /> },
      { label: "Warehouses", icon: <FiHome size={18} /> },
    ],
  },
];

function Sidebar() {
  const [showSubitems, setShowSubitems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleToggleSubitems = (index: number) => {
    setShowSubitems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex flex-col bg-white items-center w-60 pb-4 border-r border-gray-300 px-2 pt-1">
      <a className="flex items-center justify-center mt-3" href="#">
        <FiCommand className="w-6 h-6" />
        <span className="ml-2 font-bold">E-commerce</span>
      </a>
      <div className="w-full mt-4 bg-gray-300"></div>
      {sidebarItems.map((item, index) => (
        <div key={index}>
          <a
            href={item.href}
            className="flex items-center px-5 flex-shrink-0 w-60 h-10 mt-4 hover:bg-gray-300"
            onClick={() => handleToggleSubitems(index)}
          >
            {item.subitems.length > 0 ? (
              <FiChevronDown className="w-4 h-4" />
            ) : (
              item.icon
            )}
            <span className="ml-3 font-semibold">{item.describe}</span>
          </a>
          {showSubitems[index] && (
            <div className="ml-6">
              {item.subitems.map((subitem, subIndex) => (
                <a
                  key={subIndex}
                  href="#"
                  className="flex p-2 w-11/12 rounded-md text-sm text-gray-700 hover:bg-gray-200"
                >
                  {subitem.icon}
                  <span className="ml-4 font-semibold">{subitem.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
