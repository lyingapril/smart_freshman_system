'use client';
import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useRouter } from 'next/navigation';
import { verifyLogin } from '@/app/lib/api';
import Alert from '@/components/ui/Alert';
export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (studentId: string, idCardLast6: string) => {
    try {
      const data = await verifyLogin(studentId, idCardLast6);
      if (data.success) {
        // 存储登录状态（简化为localStorage）
        localStorage.setItem('studentId', studentId);
        router.push('/dashboard');
      } else {
        setError('学号或身份证后6位错误');
      }
    } catch (err) {
      setError('登录失败，请重试');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">新生报到系统</h1>
      {error && <Alert type="error" message={error} />}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}