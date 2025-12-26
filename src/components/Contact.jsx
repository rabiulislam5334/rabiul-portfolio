import React, { useEffect } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="w-11/12 mx-auto py-32 border-t border-white/5"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div data-aos="fade-right">
          <h2 className="text-5xl font-bold mb-6 italic">
            Let's <span className="text-purple-600">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            I am currently open to new opportunities and challenges. Whether you
            have a project in mind or just want to discuss an idea, feel free to
            reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-purple-600 transition-colors">
                <Mail className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Me</p>
                <p className="text-xl font-bold">Rabiulislam5334@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-blue-600 transition-colors">
                <Phone className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call/WhatsApp</p>
                <p className="text-xl font-bold">+8801761037099</p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Contact Form with DaisyUI */}
        <div
          className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5"
          data-aos="fade-left"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all"
            />
            <textarea
              placeholder="Tell me about your project"
              rows="4"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all"
            ></textarea>
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
