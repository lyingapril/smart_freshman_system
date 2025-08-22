interface ReportInfoProps {
  campus: {
    name: string;
    address: string;
    note?: string; // 校区特殊说明
  };
  reportTime: {
    start: string;
    end: string;
    suggestion?: string; // 建议报到时段
  };
  pickupInfo: {
    stations: Array<{
      name: string; // 接站地点（如"火车北站"）
      time: string; // 接站时间
      contact: string; // 接站联系人
    }>;
    vehicleInfo: string; // 接站车辆标识
  };
}

export default function ReportInfo({ campus, reportTime, pickupInfo }: ReportInfoProps) {
  return (
    <div className="border p-4 rounded-lg mb-6">
      <h2 className="text-lg font-semibold mb-3">报到基本信息</h2>
      
      <div className="mb-4">
        <h3 className="font-medium text-base mb-2">就读校区</h3>
        <p className="mb-1"><span className="text-gray-500">校区名称：</span>{campus.name}</p>
        <p className="mb-1"><span className="text-gray-500">校区地址：</span>{campus.address}</p>
        {campus.note && (
          <p className="text-blue-600 text-sm"><i>备注：{campus.note}</i></p>
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-base mb-2">报到时间</h3>
        <p className="mb-1">
          <span className="text-gray-500">报到时段：</span>
          {reportTime.start} 至 {reportTime.end}
        </p>
        {reportTime.suggestion && (
          <p className="bg-blue-50 p-2 rounded text-sm">
            <i>建议报到时段：{reportTime.suggestion}（错峰报到，减少排队）</i>
          </p>
        )}
      </div>

      <div>
        <h3 className="font-medium text-base mb-2">接站安排</h3>
        <p className="mb-2"><span className="text-gray-500">接站车辆：</span>{pickupInfo.vehicleInfo}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {pickupInfo.stations.map((station, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded">
              <p className="font-medium">{station.name}</p>
              <p className="text-sm"><span className="text-gray-500">接站时间：</span>{station.time}</p>
              <p className="text-sm"><span className="text-gray-500">联系人：</span>{station.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}