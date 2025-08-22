'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Alert from '@/components/ui/Alert';

export default function HelpCenterPage() {
  // 常见问题数据
  const faqCategories = [
    {
      id: 'login',
      title: '登录相关问题',
      questions: [
        {
          q: '登录时提示“学号或身份证后6位错误”怎么办？',
          a: '请检查学号是否为录取通知书上的10-12位数字（不含字母），身份证后6位需与身份证原件最后6位一致（含X需大写）。若确认输入正确仍无法登录，请联系迎新办公室：010-12345678。'
        },
        {
          q: '忘记登录密码或首次登录需要修改密码吗？',
          a: '系统初始登录无需密码，使用“学号+身份证后6位”即可登录。首次登录后无需强制修改密码，若担心账号安全，可在登录后联系辅导员协助设置密码。'
        },
        {
          q: '可以用手机登录系统吗？',
          a: '可以。系统支持手机浏览器访问（推荐Chrome、微信浏览器），打开学校官网点击“智慧迎新系统”即可进入，操作流程与电脑端一致。'
        }
      ]
    },
    {
      id: 'info',
      title: '信息查询问题',
      questions: [
        {
          q: '查询到的班级或辅导员信息与实际不符怎么办？',
          a: '系统信息每24小时同步一次，若刚完成分班调整，可能存在延迟。请24小时后再次查询，仍有问题可联系所在院系教学办公室核实。'
        },
        {
          q: '为什么看不到宿舍信息？',
          a: '宿舍分配信息一般在报到前3天开放查询，请耐心等待。若已到报到时间仍未显示，可能是分配尚未完成，可现场报到时咨询院系老师。'
        },
        {
          q: '接站信息显示不全或有误怎么办？',
          a: '接站信息由学校保卫处统一发布，若发现错误可拨打接站联系人电话确认（信息页已展示），或直接联系迎新办公室更新。'
        }
      ]
    },
    {
      id: 'process',
      title: '报到流程问题',
      questions: [
        {
          q: '报到流程中的“材料准备”可以提前打印吗？',
          a: '可以。系统支持长按流程页面截图保存，或通过电脑端登录后打印报到流程清单。建议提前准备好录取通知书、身份证原件及复印件、档案等材料。'
        },
        {
          q: '错过了建议报到时段还能报到吗？',
          a: '可以。建议报到时段仅为错峰指引，只要在规定的报到日期内（如9月1-2日8:00-18:00）均可正常报到，超时未报到需提前联系辅导员说明情况。'
        },
        {
          q: '不乘坐学校接站车辆如何到校？',
          a: '系统“报到信息”中已展示校区详细地址，可通过地图软件搜索“XX大学XX校区”规划路线。自驾车可从学校东门进入，现场有志愿者引导停车。'
        }
      ]
    }
  ];

  // 展开/折叠状态管理
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (categoryId: string) => {
    setExpanded(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 页头 */}
      <header className="bg-white border-b p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png" // 学校LOGO，放在public目录下
              alt="学校LOGO"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold">XX大学智慧迎新系统</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/" className="text-sm hover:underline">首页</Link>
            <Link href="/login" className="text-sm hover:underline">进入系统</Link>
          </nav>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="flex-1 max-w-4xl mx-auto p-4 sm:p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">帮助中心</h1>
          <p className="text-gray-600">以下是新生常见问题解答，若未找到您需要的信息，请联系我们</p>
        </div>

        {/* 紧急提示 */}
        <Alert type="info" message="报到高峰期咨询量较大，建议优先查看以下解答，节省您的时间" className="mb-6" />

        {/* 常见问题列表 */}
        <div className="space-y-6">
          {faqCategories.map(category => (
            <div key={category.id} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left font-medium"
                onClick={() => toggleExpand(category.id)}
              >
                <span>{category.title}</span>
                <span>{expanded[category.id] ? '−' : '+'}</span>
              </button>
              
              {expanded[category.id] && (
                <div className="p-4 border-t">
                  <ul className="space-y-4">
                    {category.questions.map((item, index) => (
                      <li key={index} className="pb-4 border-b last:border-0">
                        <h3 className="font-medium mb-2">{item.q}</h3>
                        <p className="text-gray-600">{item.a}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 联系支持 */}
        <div className="mt-10 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">仍有疑问？联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">在线咨询</h3>
              <p className="text-gray-600 mb-3">工作时间：每日8:00-20:00</p>
              <Link 
                href="mailto:welcome@example.edu.cn" 
                className="text-blue-600 hover:underline"
              >
                发送邮件：welcome@example.edu.cn
              </Link>
            </div>
            <div>
              <h3 className="font-medium mb-2">电话咨询</h3>
              <p className="text-gray-600 mb-1">迎新办公室：010-12345678</p>
              <p className="text-gray-600">技术支持：010-12345679（仅处理系统故障）</p>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 border-t p-4 text-center text-sm text-gray-500 mt-10">
        <p>© 2025 XX大学 学生工作处 版权所有</p>
      </footer>
    </div>
  );
}