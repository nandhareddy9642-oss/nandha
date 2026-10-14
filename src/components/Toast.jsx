import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    info: <Info className="w-5 h-5 text-purple-600" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-500" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-purple-100 shadow-xl rounded-xl px-4 py-3 text-slate-800 text-sm animate-slide-up transition-all">
      {icons[toast.type] || icons.info}
      <span className="font-medium">{toast.message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
