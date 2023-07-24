import OrderUpdate from "./OrderUpdate";
import MessageUpdate from "./MessageUpdate";
import InvoiceUpdate from "./InvoiceUpdate";

export default function DashboardUpdates() {
  return (
    <div className="flex items-center justify-center py-15 pl-5">
      <div className="w-[370px] rounded-md shadow-lg py-[27px] px-5 bg-white">
        <h1 className="pb-5 text-gray-800 font-bold text-lg">Recent Updates</h1>
        <OrderUpdate orderNumber="IDO-214-152" amount="145" />
        <MessageUpdate sender="Kelly190" />
        <OrderUpdate orderNumber="IDO-325-664" amount="205" />
        <InvoiceUpdate onViewClick={() => console.log("View clicked")} />
        <OrderUpdate orderNumber="IDO-325-664" amount="205" />
      </div>
    </div>
  );
}
