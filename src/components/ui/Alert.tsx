type AlertType = 'error' | 'info' | 'success' | 'warning';

interface AlertProps {
  type?: AlertType;
  message: string;
  className?: string;
}

export default function Alert({ 
  type = 'info', 
  message, 
  className = '' 
}: AlertProps) {
  const styles = {
    error: 'bg-red-50 text-red-700 border-red-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200'
  };

  const icons = {
    error: '❌',
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️'
  };

  return (
    <div className={`
      border rounded p-3 flex items-start gap-2
      ${styles[type]} ${className}
    `}>
      <span className="text-lg mt-0.5">{icons[type]}</span>
      <p>{message}</p>
    </div>
  );
}