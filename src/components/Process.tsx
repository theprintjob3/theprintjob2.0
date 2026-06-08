import React from 'react';
import { Shirt, Image, FileCheck, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pick Base Apparel',
      desc: 'Browse and select your blank merchandise — premium athlete dri-fit tees, track pants, or double-sided ceramics.',
      icon: <Shirt className="w-5 h-5 text-rose-500" />,
      colorClass: 'text-rose-500 bg-rose-50 border-rose-100',
      tag: 'Step 1'
    },
    {
      num: '02',
      title: 'Draft / Share Logo',
      desc: 'Send your current vector outlines, sketch drawings, or let our experienced in-house artist refine your logo for free.',
      icon: <Image className="w-5 h-5 text-amber-500" />,
      colorClass: 'text-amber-500 bg-amber-50 border-amber-100',
      tag: 'Step 2'
    },
    {
      num: '03',
      title: 'Approve Proof Spec',
      desc: 'Check the direct digital mockups. Once you are completely satisfied with sizes, placements, and pricing, we kick off.',
      icon: <FileCheck className="w-5 h-5 text-purple-500" />,
      colorClass: 'text-purple-500 bg-purple-50 border-purple-100',
      tag: 'Step 3'
    },
    {
      num: '04',
      title: 'Prayagraj Delivery',
      desc: 'We box, secure, and deliver your customized apparel order directly to your academy, center, or team doors.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      colorClass: 'text-emerald-500 bg-emerald-50 border-emerald-100',
      tag: 'Finished Order'
    }
  ];

  return (
    <section id="process" className="py-12 bg-transparent text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Horizontal Steps bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200 relative group hover:border-neutral-400 transition-all duration-300 text-left flex flex-col justify-between shadow-sm hover:shadow-xl hover:translate-y-[-2px]"
            >
              <div>
                {/* Header line containing step counter */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`font-mono text-3xl sm:text-4xl font-extrabold opacity-30 group-hover:opacity-100 transition-all select-none ${step.colorClass.split(' ')[0]}`}>
                    {step.num}
                  </span>
                  
                  {/* Step symbol bubble */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-inner ${step.colorClass}`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-sans font-black text-lg text-neutral-800 tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {/* Status bar */}
              <div className="border-t border-neutral-100 pt-4 text-[10px] text-neutral-400 font-mono font-black tracking-widest uppercase">
                {step.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
