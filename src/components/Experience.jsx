import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // এখানে আমরা check করি এলিমেন্টগুলো আছে কি না
    const items = gsap.utils.toArray(".exp-item");

    if (items.length > 0) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%", // আরও আগেই এনিমেশন শুরু হবে
            toggleActions: "play none none none",
            // markers: true // এটি আনকমেন্ট করলে আপনি স্ক্রিনে দাগ দেখতে পাবেন যে কোথায় ট্রিগার হচ্ছে
          },
        }
      );
    }
  }, []);

  const experiences = [
    {
      role: "Software Developer (Oracle APEX)",
      company: "Metro Solution Ltd.",
      duration: "Jan 2023 - Oct 2023",
      location: "Dhaka",
      desc: "Worked on BASCO automation. Collaborated with teams to deliver enterprise-grade software solutions using Oracle APEX.",
    },
    {
      role: "Software Support Executive",
      company: "Computer Network Systems (CNS) Ltd.",
      duration: "Oct 2019 - Dec 2022",
      location: "Dhaka, Bangladesh",
      desc: "Provided technical support for major government projects including DEEDS (Land Registration), PWC (Food), and Online Land Services. Delivered onsite and remote troubleshooting, software updates, and expert technical assistance.",
    },
    {
      role: "Web Designer & WordPress Developer",
      company: "Freelance (Fiverr & Upwork)",
      duration: "50+ Projects",
      location: "Remote",
      desc: "Developed modern, responsive websites including E-commerce and Business portfolios with focus on UI/UX.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-11/12 mx-auto py-24"
      style={{ opacity: 1, visibility: "visible" }} // Force visibility
    >
      <div className="mb-16">
        <h2 className="text-5xl font-bold uppercase tracking-tighter text-white">
          Work <span className="text-purple-600">History</span>
        </h2>
        <div className="h-1 w-20 bg-purple-600 mt-2"></div>
      </div>

      <div className="grid gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="exp-item p-10 bg-[#1a1a1a] rounded-[2rem] border border-white/5 hover:border-purple-500/30 transition-all group"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-500 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-gray-400 font-medium text-lg">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col md:items-end text-sm text-gray-500 font-mono">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Calendar size={14} /> {exp.duration}
                </span>
                <span className="flex items-center gap-2 mt-2">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </div>
            <p className="mt-8 text-gray-400 max-w-4xl leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
