import React, { useEffect, useRef } from "react";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import Swal from "sweetalert2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // বাম দিকের কন্টেন্ট এনিমেশন (নিচ থেকে ওপরে মোবাইলের জন্য নিরাপদ)
      gsap.fromTo(leftSideRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftSideRef.current,
            start: "top 90%",
            once: true,
          }
        }
      );

      // ডান দিকের ফরম এনিমেশন
      gsap.fromTo(rightSideRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightSideRef.current,
            start: "top 90%",
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "08f7c7df-8b3f-45e4-ac5a-368aff6ef257");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully! I will contact you soon.",
        icon: "success",
        background: "#18181b",
        color: "#fff",
        confirmButtonColor: "#9333ea",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-11/12 mx-auto py-16 lg:py-32 border-t border-white/5"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Contact Info */}
        <div ref={leftSideRef} className="opacity-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 italic text-white leading-tight">
            Let's <span className="text-purple-600">Connect</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
            I am currently open to new opportunities and challenges. Whether you
            have a project in mind or just want to discuss an idea, feel free to
            reach out!
          </p>

          <div className="space-y-6 lg:space-y-10">
            {/* Email */}
            <div className="flex items-center gap-4 lg:gap-6 group">
              <div className="p-3 lg:p-4 bg-zinc-900 rounded-2xl group-hover:bg-purple-600 transition-colors duration-300 shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <a href="mailto:rabiulislam5334@gmail.com" className="block min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Email Me</p>
                <p className="text-base lg:text-xl font-bold group-hover:text-purple-400 transition-colors duration-300 truncate">
                  rabiulislam5334@gmail.com
                </p>
              </a>
            </div>

            {/* Call */}
            <div className="flex items-center gap-4 lg:gap-6 group">
              <div className="p-3 lg:p-4 bg-zinc-900 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <a href="tel:+8801945204318" className="block min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Direct Call</p>
                <p className="text-base lg:text-xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                  +8801945204318
                </p>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 lg:gap-6 group">
              <div className="p-3 lg:p-4 bg-zinc-900 rounded-2xl group-hover:bg-green-600 transition-colors duration-300 shrink-0">
                <MessageCircle className="text-white" size={24} />
              </div>
              <a href="https://wa.me/8801945204318" target="_blank" rel="noreferrer" className="block min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider">WhatsApp</p>
                <p className="text-base lg:text-xl font-bold group-hover:text-green-500 transition-colors duration-300">
                  +8801945204318
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          ref={rightSideRef}
          className="opacity-0 bg-zinc-900/50 p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 relative overflow-hidden"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/5 blur-[100px] pointer-events-none"></div>

          <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6 relative z-10">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all text-white text-sm lg:text-base"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all text-white text-sm lg:text-base"
            />
            <textarea
              name="message"
              required
              placeholder="Tell me about your project"
              rows="4"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all text-white text-sm lg:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 text-sm lg:text-base"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;