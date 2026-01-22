
import React from 'react';

const ReferenceMaterial: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section>
        <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">I. PHÁT ÂM – TRỌNG ÂM</h2>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">1. PHÁT ÂM</h3>
          <div className="space-y-4 text-slate-600">
            <p className="font-medium text-slate-800">Cách làm bài tập:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Chọn đọc 3/4 từ. Chọn từ chắc chắn nhất.</li>
              <li>Ghi xuống âm của phần gạch chân.</li>
              <li>Chọn đáp án có âm khác biệt.</li>
            </ul>
            
            <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
              <p className="font-bold text-indigo-900">*** Cách phát âm đuôi -s:</p>
              <ul className="mt-2 space-y-1">
                <li><span className="font-bold text-indigo-700">/s/:</span> Tận cùng là /p/, /k/, /f/, /θ/, /t/.</li>
                <li><span className="font-bold text-indigo-700">/iz/:</span> Trước là ch, sh, ss, x, ge, ce, se.</li>
                <li><span className="font-bold text-indigo-700">/z/:</span> Nguyên âm và các phụ âm còn lại.</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
              <p className="font-bold text-emerald-900">*** Cách phát âm đuôi -ed:</p>
              <ul className="mt-2 space-y-1">
                <li><span className="font-bold text-emerald-700">/t/:</span> Tận cùng là /s/, /tʃ/, /ʃ/, /k/, /p/, /f/.</li>
                <li><span className="font-bold text-emerald-700">/id/:</span> Trước là /t/ và /d/.</li>
                <li><span className="font-bold text-emerald-700">/d/:</span> Nguyên âm và các phụ âm còn lại.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">2. TRỌNG ÂM</h3>
          <div className="space-y-4 text-slate-600">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-100 p-4 rounded-lg">
                <p className="font-bold text-slate-800 mb-2">Trọng âm theo phiên âm:</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Không rơi vào /ə/ hoặc /əʊ/.</li>
                  <li>Nếu có cả /ə/ và /əʊ/, rơi vào /əʊ/.</li>
                  <li>Rơi vào nguyên âm dài, đôi hoặc kết thúc >1 phụ âm.</li>
                  <li>Tất cả âm ngắn: Rơi vào âm thứ nhất.</li>
                </ul>
              </div>
              <div className="border border-slate-100 p-4 rounded-lg">
                <p className="font-bold text-slate-800 mb-2">Hậu tố & Đuôi:</p>
                <ul className="list-disc pl-5 text-sm">
                  <li><span className="font-semibold italic">Nhận trọng âm:</span> -eer, -ee, -oo, -ese, -ain...</li>
                  <li><span className="font-semibold italic">Rơi vào trước nó:</span> -ion, -ic, -ity, -graphy...</li>
                  <li><span className="font-semibold italic">Dịch chuyển 3 âm:</span> -y, -ce, -ate, -ise...</li>
                  <li><span className="font-semibold italic">Không ảnh hưởng:</span> -ful, -er, -less, -ness...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">II. NGỮ PHÁP</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border-collapse">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left border-b font-bold text-slate-700">Thì động từ</th>
                <th className="p-4 text-left border-b font-bold text-slate-700">Công thức</th>
                <th className="p-4 text-left border-b font-bold text-slate-700">Dấu hiệu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-semibold">Hiện tại đơn</td>
                <td className="p-4">S + V(s/es) | Am/Is/Are</td>
                <td className="p-4 text-sm">Often, Always, Every...</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-semibold">Quá khứ đơn</td>
                <td className="p-4">S + V(ed/Cột 2) | Was/Were</td>
                <td className="p-4 text-sm">Yesterday, Ago, Last...</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-semibold">Tương lai đơn</td>
                <td className="p-4">S + Will + V(bare)</td>
                <td className="p-4 text-sm">Tomorrow, Next, Soon...</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-semibold">Hiện tại tiếp diễn</td>
                <td className="p-4">S + Am/Is/Are + V-ing</td>
                <td className="p-4 text-sm">Now, At present, Look!</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-semibold">Hiện tại hoàn thành</td>
                <td className="p-4">S + Have/Has + V(pp)</td>
                <td className="p-4 text-sm">Since, For, Just, Yet...</td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-4 font-semibold">Quá khứ hoàn thành</td>
                <td className="p-4">S + Had + V(pp)</td>
                <td className="p-4 text-sm">Before, After, By the time</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
          <h3 className="text-lg font-bold text-amber-800 mb-4">Cấu trúc thời gian đặc biệt</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-amber-900 mb-2 underline">BY THE TIME:</p>
              <ul className="text-sm space-y-2 text-amber-800">
                <li><span className="font-bold">Quá khứ:</span> By the time + V(QK đơn), V(QK hoàn thành)</li>
                <li><span className="font-bold">Tương lai:</span> By the time + V(HT đơn), V(TL hoàn thành)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-amber-900 mb-2 underline">UNTIL / TILL:</p>
              <ul className="text-sm space-y-2 text-amber-800">
                <li>S + V(TL đơn) + until + S + V(HT đơn)</li>
                <li>V(bare)/Don’t + V(bare) + until + S + V(HT đơn)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferenceMaterial;
