import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

// 首页单独设置title​
export const metadata: Metadata = {
  title: '首页', // 最终显示为"首页 | 智慧迎新系统"（继承根布局的template）​
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <header className="bg-white border-b p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png" // 学校LOGO，放在public目录下
              alt="学校LOGO"
              width={40}
              height={40}
              priority
            />
            <h1 className="text-xl font-bold">XX大学智慧迎新系统</h1>
          </div>
          <nav>
            <Link href="/help" className="text-sm text-blue-600 hover:underline">
              帮助中心
            </Link>
          </nav>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6">欢迎2025级新同学</h2>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <p className="text-lg mb-4">
              登录系统即可查询您的报到信息、班级分配、辅导员联系方式等重要内容
            </p>
            <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>查询分班情况及辅导员信息</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>了解报到时间、地点及流程</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>获取接站安排及校区指引</span>
              </li>
            </ul>
            
            {/* 登录按钮 - 跳转到登录页 */}
            <Link href="/login">
              <Button className="text-base px-8 py-3">
                进入迎新系统
              </Button>
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2">如有疑问，请联系迎新办公室：</p>
            <p>电话：010-12345678 | 邮箱：welcome@example.edu.cn</p>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 border-t p-4 text-center text-sm text-gray-500">
        <p>© 2025 XX大学 学生工作处 版权所有</p>
      </footer>
    </div>
  );
}