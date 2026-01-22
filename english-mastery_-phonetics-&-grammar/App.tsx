
import React, { useState } from 'react';
import ReferenceMaterial from './components/ReferenceMaterial';
import Quiz from './components/Quiz';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');

  const tabs: TabType[] = [
    { id: 'study', label: 'Hệ Thống Kiến Thức' },
    { id: 'quiz', label: 'Luyện Tập' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-indigo-200 shadow-lg mr-3">
              <span className="text-xl font-black">EN</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">ENGLISH MASTERY</h1>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Phonetics & Grammar Pro</p>
            </div>
          </div>
          
          <nav className="flex bg-slate-100 p-1 rounded-xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container max-w-5xl mx-auto px-4 py-8">
        {activeTab === 'study' ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-black text-slate-900 mb-4">HỆ THỐNG KIẾN THỨC TRỌNG TÂM</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Ôn tập các quy tắc phát âm, trọng âm và các thì quan trọng trong tiếng Anh trước khi bước vào bài kiểm tra.
              </p>
            </div>
            <ReferenceMaterial />
          </div>
        ) : (
          <div>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-black text-slate-900 mb-4">BÀI TẬP LUYỆN TẬP</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Kiểm tra kiến thức của bạn. Hệ thống sẽ chấm điểm trên thang điểm 10.
              </p>
            </div>
            <Quiz />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-white font-black text-xl mb-2">English Mastery</h3>
              <p className="text-sm">Ứng dụng hỗ trợ ôn tập tiếng Anh chuyên sâu cho học sinh.</p>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-slate-800 rounded-full text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </div>
            </div>
          </div>
          <p className="text-center text-xs tracking-widest uppercase font-bold">
            &copy; {new Date().getFullYear()} English Mastery App. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Styles for animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
