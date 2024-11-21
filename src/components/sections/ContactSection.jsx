import { useState } from "react";
import { MailIcon, MapPinIcon, LinkedinIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY); // Check if variables are loaded correctly

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );
      console.log("Email sent successfully:", result.text);
      setResponseMessage("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="p-4 sm:p-6 md:p-[6%] bg-[#272231] rounded-2xl text-left"
      id="contact">
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <MailIcon className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100">CONTACT</h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          Contact <span className="font-bold text-[#d67f92]">Me.</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          Interested in working together or have a question? Feel free to reach
          out—I'd love to connect and discuss how I can help bring your ideas to
          life.
        </p>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          <div className="space-y-6 sm:space-y-8 w-full lg:w-[35%]">
            {/* Contact Information */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d67f92]/10 flex items-center justify-center">
                <MapPinIcon className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  Location
                </h3>
                <p className="text-zinc-400">Tunis, Tunisia</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d67f92]/10 flex items-center justify-center">
                <MailIcon className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">E-mail</h3>
                <p className="text-zinc-400">eya.khalfallah@ensi-uma.tn</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d67f92]/10 flex items-center justify-center">
                <LinkedinIcon className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  LinkedIn
                </h3>
                <a
                  className="text-zinc-400 hover:text-[#d67f92] transition-colors duration-300"
                  href="https://www.linkedin.com/in/eya-khalfallah/"
                  target="_blank"
                  rel="noreferrer">
                  Eya Khalfallah
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-[55%] space-y-4">
            <input
              className="w-full px-4 py-3 bg-[#272231] border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d67f92] focus:border-transparent"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full px-4 py-3 bg-[#272231] border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d67f92] focus:border-transparent"
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full px-4 py-3 bg-[#272231] border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d67f92] focus:border-transparent min-h-[120px]"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto py-3 px-7 bg-[#d67f92] font-medium hover:bg-[#d67f92b6] text-gray-100 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d67f92] focus:ring-offset-2 focus:ring-offset-[#272231]"
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        {responseMessage && (
          <p className="mt-4 text-center text-sm text-[#d67f92]">
            {responseMessage}
          </p>
        )}
      </div>
    </section>
  );
}
