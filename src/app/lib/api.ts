/**
 * 基础API配置
 * 开发阶段使用Mock数据，上线后替换为真实接口地址
 */
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const MOCK_MODE = process.env.NEXT_PUBLIC_MOCK_MODE === 'true' || true; // 默认启用Mock

/**
 * 模拟数据生成工具
 * 用于开发阶段测试，无需后端接口即可运行
 */
const mockData = {
  // 模拟学生信息数据
  students: {
    '2025000001': {
      name: '张三',
      studentId: '2025000001',
      major: '计算机科学与技术',
      className: '计科2401班',
      counselor: {
        name: '李老师',
        phone: '13800138001'
      },
      campus: {
        name: '主校区',
        address: '北京市海淀区XX路100号',
        note: '所有新生先到主校区报到'
      },
      reportTime: {
        start: '2025-09-01 08:00',
        end: '2025-09-02 18:00',
        suggestion: '9月1日上午（人较少）'
      },
      pickupInfo: {
        vehicleInfo: '白色大巴车，车身有"XX大学迎新"标识',
        stations: [
          {
            name: '火车北站',
            time: '06:00-22:00',
            contact: '王老师 13900139001'
          },
          {
            name: '汽车东站',
            time: '08:00-20:00',
            contact: '张老师 13700137001'
          }
        ]
      },
      processSteps: [
        {
          id: 1,
          title: '身份核验',
          description: '核对录取信息，领取报到单',
          materials: ['录取通知书原件', '身份证原件及复印件'],
          location: '主教学楼一层大厅',
          note: '请提前准备好材料，排队时间约10分钟'
        },
        {
          id: 2,
          title: '宿舍办理',
          description: '领取宿舍钥匙和门禁卡',
          materials: ['报到单', '一寸照片1张'],
          location: '学生公寓1号楼一层',
          note: '宿舍禁止使用大功率电器'
        },
        {
          id: 3,
          title: '体检',
          description: '基础体检项目',
          materials: ['报到单', '体检表（现场领取）'],
          location: '校医院二层',
          note: '体检前需空腹'
        }
      ]
    },
    '2025000002': {
      name: '李四',
      studentId: '2025000002',
      major: '汉语言文学',
      className: '汉文2402班',
      counselor: {
        name: '赵老师',
        phone: '13600136001'
      },
      campus: {
        name: '主校区',
        address: '北京市海淀区XX路100号'
      },
      reportTime: {
        start: '2025-09-01 08:00',
        end: '2025-09-02 18:00',
        suggestion: '9月1日下午'
      },
      pickupInfo: {
        vehicleInfo: '白色大巴车，车身有"XX大学迎新"标识',
        stations: [
          {
            name: '火车北站',
            time: '06:00-22:00',
            contact: '王老师 13900139001'
          }
        ]
      },
      processSteps: [
        {
          id: 1,
          title: '身份核验',
          description: '核对录取信息，领取报到单',
          materials: ['录取通知书原件', '身份证原件及复印件'],
          location: '主教学楼一层大厅'
        },
        {
          id: 2,
          title: '宿舍办理',
          description: '领取宿舍钥匙和门禁卡',
          materials: ['报到单', '一寸照片1张'],
          location: '学生公寓3号楼一层'
        }
      ]
    }
  }
};

/**
 * 登录验证接口
 * @param studentId 学号
 * @param idCardLast6 身份证后6位
 * @returns 登录结果
 */
export const verifyLogin = async (studentId: string, idCardLast6: string) => {
  if (MOCK_MODE) {
    // 模拟登录验证（实际项目中替换为真实接口调用）
    await new Promise(resolve => setTimeout(resolve, 500)); // 模拟网络延迟
    
    // 简单验证逻辑：学号存在且身份证后6位不为空
    const isSuccess = mockData.students[studentId] && idCardLast6.trim() !== '';
    return {
      success: isSuccess,
      message: isSuccess ? '登录成功' : '学号或身份证后6位错误'
    };
  }

  // 真实接口调用（上线时启用）
  const res = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ studentId, idCardLast6 })
  });
  
  return res.json();
};

/**
 * 获取学生信息接口
 * @param studentId 学号
 * @returns 学生详细信息
 */
export const getStudentInfo = async (studentId: string) => {
  if (MOCK_MODE) {
    // 模拟获取学生信息
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const student = mockData.students[studentId];
    if (!student) {
      throw new Error('未找到学生信息');
    }
    return student;
  }

  // 真实接口调用（上线时启用）
  const res = await fetch(`${API_BASE}/api/students/${studentId}`);
  if (!res.ok) {
    throw new Error('获取信息失败');
  }
  return res.json();
};