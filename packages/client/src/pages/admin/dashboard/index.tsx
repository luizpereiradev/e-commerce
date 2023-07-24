import { FiBell, FiShoppingCart, FiUsers } from "react-icons/fi";
import DashboardTile from "../../../components/dashboard/DashboardTile";
import Sidebar from "../../../components/sidebar/Sidebar";
import DashboardUpdates from "../../../components/dashboard/updates/DashboardUpdates";

function Dashboard() {
  return (
    <>
      <div className="flex w-screen h-screen text-gray-700">
        <Sidebar />
        <div className="flex flex-col items-center flex-grow pt-10 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <DashboardTile
              icon={<FiUsers className="w-5 h-5" />}
              value="1,200"
              title="Customers last 30 days"
              trend="- 5%"
            />
            <DashboardTile
              icon={<FiShoppingCart className="w-5 h-5" />}
              value="200"
              title="Sales last 30 days"
              trend="+ 10%"
            />
            <DashboardTile
              icon={<FiBell className="w-5 h-5" />}
              value="$ 5,000"
              title="Revenue last 30 days"
              trend="+ 20%"
            />
          </div>
          <div className="flex w-full">
            <DashboardUpdates />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
