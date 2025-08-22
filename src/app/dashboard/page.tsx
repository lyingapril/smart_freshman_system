'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StudentCard from '@/components/info/StudentCard';
import ReportInfo from '@/components/info/ReportInfo';
import ProcessSteps from '@/components/info/ProcessSteps';
import { getStudentInfo } from '@/app/lib/api';
import Alert from '@/components/ui/Alert';
export default function DashboardPage() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 检查登录状态
    const studentId = localStorage.getItem('studentId');
    if (!studentId) {
      router.push('/login');
      return;
    }

    // 获取学生信息
    const fetchData = async () => {
      try {
        const data = await getStudentInfo(studentId);
        setStudentInfo(data);
      } catch (err) {
        console.error('获取信息失败', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) return <div className="p-4">加载中...</div>;
  if (!studentInfo) return <Alert message="未找到您的信息" />;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">新生报到信息</h1>
      <StudentCard info={studentInfo} />
      <ReportInfo 
        campus={studentInfo.campus} 
        reportTime={studentInfo.reportTime}
        pickupInfo={studentInfo.pickupInfo}
      />
      <ProcessSteps steps={studentInfo.processSteps} />
    </div>
  );
}