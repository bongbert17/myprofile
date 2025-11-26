
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  // Styles based on the provided image: white background, large rounded card, teal accent.
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex justify-center items-center">
      
      {/* Main Container Card (Styled to match the image) */}
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl transition-all duration-500">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Contact <span className="text-teal-500">Me</span>
            </h2>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-black placeholder-gray-500 dark:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500 shadow-inner"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-black placeholder-gray-500 dark:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500 shadow-inner"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Message</label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-black placeholder-gray-500 dark:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500 shadow-inner resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-600 transition-colors duration-300 shadow-md shadow-teal-500/50"
              >
                Send Message
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;