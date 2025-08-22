import React from 'react';
import './globals.css'
import type { Metadata } from 'next';

// 全局metadata配置​
export const metadata: Metadata = {
  title: {
    default: 'XX大学智慧迎新系统', // 默认标题​
    template: '%s | 智慧迎新系统' // 子页面标题模板，%s会被替换为子页面title​
  },
  description: 'XX大学2025级新生报到信息查询系统',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}