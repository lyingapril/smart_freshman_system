interface StudentInfo {
  name: string;
  studentId: string;
  major: string;
  className: string;
  counselor: {
    name: string;
    phone: string;
  };
}

export default function StudentCard({ info }: { info: StudentInfo }) {
  return (
    <div className="border p-4 rounded-lg mb-6">
      <h2 className="text-lg font-semibold mb-3">个人信息</h2>
      <div className="grid grid-cols-2 gap-2">
        <p>姓名：{info.name}</p>
        <p>学号：{info.studentId}</p>
        <p>专业：{info.major}</p>
        <p>班级：{info.className}</p>
        <p colSpan={2}>辅导员：{info.counselor.name}</p>
        <p colSpan={2}>辅导员电话：{info.counselor.phone}</p>
      </div>
    </div>
  );
}