type DashboardTileProps = {
  icon: React.ReactNode;
  value: string;
  title: string;
  trend: string;
};

const DashboardTile = ({ icon, value, title, trend }: DashboardTileProps) => {
  // vermelho se for negativo, verde se for positivo
  const trendColor = trend.startsWith("+") ? "#6EE7B7" : "#FCA5A5";
  return (
    <div className="flex items-center p-4 bg-white rounded">
      <div
        style={{
          background: trendColor,
        }}
        className="flex flex-shrink-0 items-center justify-center  h-16 w-16 rounded"
      >
        {icon}
      </div>
      <div className="flex-grow flex flex-col ml-4">
        <span className="text-xl font-bold">{value}</span>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{title}</span>
          <span
            style={{
              color: trendColor,
            }}
            className="text-sm font-semibold ml-2"
          >
            {trend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardTile;
