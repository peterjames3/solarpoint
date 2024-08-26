import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const notify = () => {
    toast.success("Your message has been sent successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Disable the button to prevent multiple submissions
    setIsSubmitting(true);

    // Check for empty fields in the form
    const fromName = form.current.from_name.value.trim();
    const fromEmail = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();
    const areaCode = form.current.from_area_code.value.trim();
    const phoneNumber = form.current.from_phone_number.value.trim();

    if (!fromName || !fromEmail || !message || !areaCode || !phoneNumber) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSubmitting(false); // Enable the button again
      return; // Stop the function if validation fails
    }

    emailjs
      .sendForm("service_w9z9xy7", "template_t75no5e", form.current, {
        publicKey: "U2NejbKtesTalN3K-",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          notify(); // Success notification
          form.current.reset(); // Reset form fields
          setIsSubmitting(false); // Enable the button again after submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message sending failed. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSubmitting(false); // Enable the button again in case of failure
        },
      );
  };
  return (
    <section
      /* data-aos="fade-up"
      data-aos-duration="3000" */
      className="wrapper grid grid-cols-1 py-20 sm:grid-cols-2"
    >
      <div className="h-[25rem] space-y-7 sm:h-auto">
        <nav className="relative flex h-full w-full flex-col items-center bg-brandD pt-3 text-center text-black">
          <h5 className="pt-8 text-5xl font-semibold text-black">
            Get in Touch
          </h5>
          <div className="absolute top-[30%] flex flex-col space-y-5 px-2 md:space-y-10">
            <h4 className="font-Inter text-3xl font-semibold text-white">
              Sub office
            </h4>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                {" "}
                <FaMapMarkedAlt />
              </nav>
              <nav className="text-white">
                Apple wood,Adams Building, Ngong Road
              </nav>
            </div>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                <FaPhone />
              </nav>
              <nav className="text-white">0712741650 | 0703704062</nav>
            </div>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                <MdMarkEmailRead />
              </nav>
              <nav className="text-white">solarpointsystems1@gmail.com</nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 bg-[#111827]">
        <h4 className="py-3 text-3xl font-semibold text-white transition-all delay-300 hover:underline">
          Request For Quotation
        </h4>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2"
        >
          <label className="font-semibold text-white">Name</label>
          <input
            type="text"
            name="from_name"
            className="font-Poppins rounded-md border-2 px-2 py-2 font-medium text-slate-600 outline-none transition-all delay-300 hover:border-blue-800"
          />
          <label className="font-semibold text-white">Email</label>
          <input
            type="email"
            name="from_email"
            className="font-Poppins rounded-md border-2 px-2 py-2 font-medium text-slate-600 outline-none transition-all delay-300 hover:border-blue-800"
          />
          <label className="font-semibold text-white">Home Town</label>
          <input
            type="text"
            name="home_town"
            placeholder="Thika"
            className="font-Poppins rounded-md border-2 px-2 py-2 font-medium text-slate-600 outline-none transition-all delay-300 hover:border-blue-800"
          />

          <label className="font-semibold text-white">Phone Number</label>
          <input
            type="number"
            name="from_phone_number"
            className="font-Poppins rounded-md border-2 px-2 py-2 font-medium text-slate-600 outline-none transition-all delay-300 hover:border-blue-800"
          />

          <label className="font-semibold text-white">Service Type</label>
          <select
            name="service_type"
            className="font-Poppins rounded-md border-2 px-2 py-2 font-medium text-slate-600 outline-none transition-all delay-300 hover:border-blue-800"
          >
            <option value="Home Power Backup">Home Power Backup</option>
            <option value="Solar LEDs">Solar LEDs</option>
            <option value="Lithium Batteries">Lithium Batteries</option>
            <option value="Solar Panels">Solar Panels</option>
            <option value="Solar Water Heater">Solar Water Heater</option>
            <option value="Solar Water pump">Solar Water pump</option>
            <option value="Solar Street Lights">Solar Street Lights</option>
            <option value="offgrid solar">Offgrid Solar</option>
            <option value="240W">Starter Solar Home System - 240W</option>
            <option value="1kW">Silver Home Solar System - 1kW</option>
            <option value="1.8kW">Gold Solar Home System - 1.8kW</option>
            <option value="3.6kW">Platinum Solar Home System - 3.6kW</option>
            <option value="320w">
              Customized Sizing Plan - 320W Small Homes
            </option>
            <option value="1KVA">
              Customized Sizing Plan - 1 KVA Medium Homes
            </option>
            <option value="3KVA">
              Customized Sizing Plan - 3 KVA Standard Homes
            </option>
            <option value="4KVA">
              Customized Sizing Plan - 4 KVA Large Homes
            </option>
          </select>

          <label className="font-semibold text-white">Message / Details</label>
          <textarea
            name="message"
            className="font-Poppins rounded-sm px-5 py-4 font-medium text-slate-600 outline-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            value="Send"
            className="cursor-pointer rounded-md bg-brandC py-4 text-xl font-semibold text-white transition-all delay-300 hover:bg-brandD"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
