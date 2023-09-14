import { FiFilePlus } from "react-icons/fi";

type InvoiceUpdateProps = {
    onViewClick?: () => void;
};

const InvoiceUpdate = ({ onViewClick }: InvoiceUpdateProps) => {
  return (
    <div className="flex items-center justify-between pt-5">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded bg-green-200">
          <FiFilePlus size={24} color="#2DD4BF" />
        </div>
        <p className="text-gray-600 text-sm font-medium pl-3">
          Invoice generated
        </p>
      </div>
      <a href="javascript:void(0)" onClick={onViewClick}>
        <p className="text-sm font-medium cursor-pointer text-indigo-500">
          View
        </p>
      </a>
    </div>
  );
};

export default InvoiceUpdate;
