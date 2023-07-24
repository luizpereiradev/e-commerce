import OrderUpdate from "./OrderUpdate";
import MessageUpdate from "./MessageUpdate";
import InvoiceUpdate from "./InvoiceUpdate";

export default function DashboardUpdates() {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded-md shadow-lg p-5 bg-white">
          <h1 className="pt-2 pb-7 text-gray-800 font-bold text-lg">
            Recent Updates
          </h1>
          <OrderUpdate orderNumber="IDO-214-152" amount="$145" />
          <MessageUpdate sender="Kelly190" />
          <OrderUpdate orderNumber="IDO-325-664" amount="205" />
          <InvoiceUpdate onViewClick={() => console.log("View clicked")} />
        </div>
      </div>
    </>
  );
}