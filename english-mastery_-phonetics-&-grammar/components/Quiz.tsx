
import React, { useState, useMemo } from 'react';
import { QUESTIONS } from '../constants';
import { UserAnswer } from '../types';

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [submitted, setSubmitted] = useState(false);

  const correctAnswersCount = useMemo(() => {
    return (Object.values(answers) as UserAnswer[]).filter(a => a.isCorrect).length;
  }, [answers]);

  const handleSelect = (questionId: number, optionId: string) => {
    if (submitted) return;
    
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        selectedOptionId: optionId,
        isCorrect: optionId === question.correctAnswer
      }
    }));
  };

  const calculateScore = () => {
    const score = (10 * correctAnswersCount) / QUESTIONS.length;
    return score.toFixed(2);
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = Math.round((Object.keys(answers).length / QUESTIONS.length) * 100);

  return (
    <div className="max-w-3xl mx-auto pb-12 animate-fadeIn">
      {/* Progress Bar or Score Display */}
      <div className="sticky top-4 z-10 mb-8">
        {!submitted ? (
          <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-slate-600">Tiến độ: {Object.keys(answers).length}/{QUESTIONS.length} câu</span>
              <span className="text-sm font-bold text-indigo-600">{progress}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 h-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-xl rounded-2xl p-6 border-2 border-indigo-500 flex flex-col items-center justify-center animate-bounce-subtle">
            <p className="text-sm uppercase tracking-widest text-slate-500 font-bold">Kết quả bài làm</p>
            <div className="text-5xl font-black text-indigo-600 my-2">
              {calculateScore()} <span className="text-2xl text-slate-400">/ 10</span>
            </div>
            <p className="text-slate-600 font-medium">
              Số câu đúng: {correctAnswersCount} / {QUESTIONS.length}
            </p>
            <button 
              onClick={resetQuiz}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors"
            >
              Làm lại bài tập
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {QUESTIONS.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isSelected = !!userAnswer;

          return (
            <div key={q.id} className={`bg-white p-6 rounded-2xl shadow-sm border transition-all ${
              submitted && userAnswer?.isCorrect 
                ? 'border-emerald-200 bg-emerald-50/30' 
                : submitted && userAnswer && !userAnswer.isCorrect 
                  ? 'border-rose-200 bg-rose-50/30' 
                  : 'border-slate-200'
            }`}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                  {q.subCategory || q.category}
                </span>
                <span className="text-sm font-bold text-slate-400">Câu {idx + 1}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-6 leading-relaxed">
                {q.text}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((opt) => {
                  const isThisOptionSelected = userAnswer?.selectedOptionId === opt.id;
                  
                  let buttonClass = "flex items-center p-4 rounded-xl border-2 transition-all text-left ";
                  
                  if (submitted) {
                    if (isThisOptionSelected) {
                      buttonClass += userAnswer.isCorrect 
                        ? "border-emerald-500 bg-emerald-50 text-emerald-800 " 
                        : "border-rose-500 bg-rose-50 text-rose-800 ";
                    } else {
                      buttonClass += "border-slate-100 bg-slate-50 text-slate-400 ";
                    }
                  } else {
                    buttonClass += isThisOptionSelected
                      ? "border-indigo-600 bg-indigo-50 text-indigo-800 "
                      : "border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 text-slate-600 ";
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      disabled={submitted}
                      className={buttonClass}
                    >
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 font-bold text-sm ${
                        isThisOptionSelected ? 'bg-current text-white' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {opt.id}
                      </span>
                      <span className="font-medium">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && userAnswer && (
                <div className={`mt-4 text-sm font-bold flex items-center ${userAnswer.isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {userAnswer.isCorrect ? (
                    <>
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Đúng
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                      Sai
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              if (Object.keys(answers).length < QUESTIONS.length) {
                if (!confirm(`Bạn mới làm được ${Object.keys(answers).length}/${QUESTIONS.length} câu. Vẫn nộp bài?`)) return;
              }
              setSubmitted(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            NỘP BÀI VÀ CHẤM ĐIỂM
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
