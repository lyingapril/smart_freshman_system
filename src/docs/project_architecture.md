# 项目结构
├── app/                  # Next.js 13+ App Router核心目录
│   ├── login/            # 登录页面路由
│   │   └── page.tsx      # 登录表单页面
│   ├── dashboard/        # 信息查询主页路由
│   │   └── page.tsx      # 核心信息展示页面
│   ├── layout.tsx        # 全局布局（导航、页脚）
│   └── page.tsx          # 系统首页（引导至登录）
├── components/           # 通用组件
│   ├── auth/             # 认证相关组件
│   │   └── LoginForm.tsx # 登录表单组件
│   ├── info/             # 信息展示组件
│   │   ├── StudentCard.tsx  # 个人信息卡片
│   │   ├── ReportInfo.tsx   # 报到信息组件
│   │   └── ProcessSteps.tsx # 报到流程组件
│   └── ui/               # 基础UI组件
│       ├── Button.tsx    # 简化按钮组件
│       └── Alert.tsx     # 提示框组件
├── lib/                  # 工具函数与数据处理
│   ├── api.ts            # 后端接口调用函数
│   └── auth.ts           # 登录状态管理
├── public/               # 静态资源
│   └── logo.png          # 学校LOGO