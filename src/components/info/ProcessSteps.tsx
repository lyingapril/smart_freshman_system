interface ProcessStep {
  id: number;
  title: string;
  description: string;
  materials: string[]; // 所需材料
  location: string; // 办理地点
  note?: string; // 注意事项
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">报到流程</h2>
      
      <div className="relative">
        {/* 连接线 */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
        
        {steps.map((step, index) => (
          <div key={step.id} className="relative pl-10 pb-6 last:pb-0">
            {/* 步骤图标 */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {index + 1}
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{step.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-2">
                <div>
                  <p className="text-gray-500">办理地点：</p>
                  <p>{step.location}</p>
                </div>
              </div>
              
              <div className="mb-2">
                <p className="text-gray-500 text-sm">所需材料：</p>
                <ul className="list-disc list-inside text-sm ml-2">
                  {step.materials.map((material, i) => (
                    <li key={i}>{material}</li>
                  ))}
                </ul>
              </div>
              
              {step.note && (
                <p className="bg-yellow-50 p-2 rounded text-xs text-yellow-700">
                  ⚠️ 注意：{step.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}