import React from "react";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Education = () => {
  return (
    <section className="w-11/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Education Section - MBA, BBA (যেখানে type নেই বা year আছে) */}
      <div data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <GraduationCap className="text-purple-500" /> Education
        </h2>
        <div className="space-y-8">
          {portfolioData.education
            .filter((e) => e.year) // যেগুলোতে সাল আছে (MBA, BBA)
            .map((edu, i) => (
              <div
                key={i}
                className="border-l-2 border-purple-500 pl-6 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-gray-400">
                  {edu.school} | {edu.year}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Certifications Section - Technical (যেগুলোতে type আছে) */}
      <div data-aos="fade-left">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <Award className="text-blue-500" /> Certifications
        </h2>
        <div className="grid gap-4">
          {portfolioData.education
            .filter((e) => e.type) // যেগুলোর type ফিল্ড আছে সবগুলোকে দেখাবে
            .map((cert, i) => (
              <div
                key={i}
                className="p-5 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-purple-400 transition-colors">
                      {cert.degree}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{cert.school}</p>
                    {cert.details && (
                      <p className="text-[12px] text-gray-500 mt-2 font-mono italic">
                        {cert.details}
                      </p>
                    )}
                  </div>
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
