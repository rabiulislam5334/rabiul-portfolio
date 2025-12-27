import React from "react";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
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
      className="w-11/12 mx-auto py-32 border-t border-white/5"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Contact Info */}
        <div data-aos="fade-right">
          <h2 className="text-5xl font-bold mb-6 italic">
            Let's <span className="text-purple-600">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I am currently open to new opportunities and challenges. Whether you
            have a project in mind or just want to discuss an idea, feel free to
            reach out!
          </p>

          <div className="space-y-10">
            {/* Email */}
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-purple-600 transition-colors">
                <Mail className="text-white" size={28} />
              </div>
              <a href="mailto:rabiulislam5334@gmail.com" className="block">
                <p className="text-sm text-gray-400">Email Me</p>
                <p className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                  rabiulislam5334@gmail.com
                </p>
              </a>
            </div>

            {/* Call */}
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-blue-600 transition-colors">
                <Phone className="text-white" size={28} />
              </div>
              <a href="tel:+8801761037099" className="block">
                <p className="text-sm text-gray-400">Direct Call</p>
                <p className="text-xl font-bold hover:text-blue-500 transition-colors">
                  +8801761037099
                </p>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-zinc-900 rounded-2xl group-hover:bg-green-600 transition-colors">
                <MessageCircle className="text-white" size={28} />
              </div>
              <a
                href="https://wa.me/8801945204318"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="text-xl font-bold hover:text-green-500 transition-colors">
                  +8801945204318
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="bg-zinc-900/50 p-8 md:p-10 rounded-[2.5rem] border border-white/5"
          data-aos="fade-left"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all text-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all text-white"
            />
            <textarea
              name="message"
              required
              placeholder="Tell me about your project"
              rows="4"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-600 transition-all text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
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
