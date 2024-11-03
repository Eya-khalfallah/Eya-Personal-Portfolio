import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react'
import { MapPin, Mail, Phone } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }
  return (
    <section className=" p-[6%] bg-[#272231] rounded-2xl text-left">
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-10">
          <HiOutlineMail className="size-4" />
          <h3 className="text-xs font-medium text-gray-100">CONTACT</h3>
        </div>
        <h1 className="text-5xl font-light mb-8">
          Contact <span className="text-5xl font-bold text-[#d67f92]">Me.</span>
        </h1>
        <p className=" w-[90%] mt-2 text-lg leading-relaxed text-zinc-400 mb-10">
          I design products that are more than pretty. I make them shippable and
          usable, tempor non mollit dolor et do auter.
        </p>

        <div className="w-full flex justify-between gap-10">
          <div className="space-y-8 w-[30%]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d67f92]/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Location</h3>
                <p className="text-zinc-400">Melbourne Street No 20</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d67f92]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">E-mail</h3>
                <p className="text-zinc-400">smith@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d67f92]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Phone</h3>
                <p className="text-zinc-400">+976 34 99 99</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-[55%] space-y-4">
            <input
              className="w-full px-4 py-3 bg-[#272231] border border-zinc-600 rounded-md text-white placeholder-zinc-400"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-3 bg-[#272231] border border-zinc-600 rounded-md text-white placeholder-zinc-400"
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="w-full px-4 py-3 bg-[#272231] border border-zinc-600 rounded-md text-white placeholder-zinc-400 placeholder min-h-[120px]"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className=" py-3 px-7 bg-[#d67f92] font-medium hover:bg-[#d67f92b6] text-gray-100 rounded-full transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
