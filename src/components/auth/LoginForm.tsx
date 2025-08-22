'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

interface LoginFormProps {
  onSubmit: (studentId: string, idCardLast6: string) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [formData, setFormData] = useState({
    studentId: '',
    idCardLast6: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    studentId?: string;
    idCardLast6?: string;
  }>({});

  const validateForm = () => {
    const errors: { studentId?: string; idCardLast6?: string } = {};
    if (!formData.studentId.trim()) {
      errors.studentId = '请输入学号';
    } else if (!/^\d{10,12}$/.test(formData.studentId)) {
      errors.studentId = '学号格式不正确（10-12位数字）';
    }

    if (!formData.idCardLast6.trim()) {
      errors.idCardLast6 = '请输入身份证后6位';
    } else if (!/^[0-9Xx]{6}$/.test(formData.idCardLast6)) {
      errors.idCardLast6 = '身份证后6位格式不正确';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData.studentId, formData.idCardLast6);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          学号
        </label>
        <input
          type="text"
          value={formData.studentId}
          onChange={(e) => setFormData({...formData, studentId: e.target.value})}
          className={`w-full p-2 border rounded ${validationErrors.studentId ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="请输入10-12位学号，例如2025000002"
        />
        {validationErrors.studentId && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.studentId}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          身份证后6位
        </label>
        <input
          type="text"
          value={formData.idCardLast6}
          onChange={(e) => setFormData({...formData, idCardLast6: e.target.value})}
          className={`w-full p-2 border rounded ${validationErrors.idCardLast6 ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="请输入身份证号后6位（含X请大写），例如123456"
        />
        {validationErrors.idCardLast6 && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.idCardLast6}</p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? '登录中...' : '登录系统'}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        登录后可查询报到信息、分班情况等重要内容
      </p>
    </form>
  );
}