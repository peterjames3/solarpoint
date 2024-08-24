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
        }
      );
  };
  return (
    <section
      /* data-aos="fade-up"
      data-aos-duration="3000" */
      className="wrapper py-20 grid grid-cols-1 sm:grid-cols-2 "
    >
      <div className="space-y-7  h-[25rem] sm:h-auto ">
        <nav className="w-full h-full text-center pt-3 text-black flex flex-col items-center relative  bg-brandD">
          <h5 className="text-5xl pt-8 text-black font-semibold">
            Get in Touch
          </h5>
          <div className="absolute top-[30%] flex flex-col md:space-y-10 space-y-5 px-2">
            <h4 className="text-3xl font-semibold font-Inter text-white">
              Sub office
            </h4>
            <div className="flex gap-2">
              <nav className="text-white font-semibold text-2xl">
                {" "}
                <FaMapMarkedAlt />
              </nav>
              <nav className=" text-white">
                Apple wood,Adams Building, Ngong Road
              </nav>
            </div>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                <FaPhone />
              </nav>
              <nav className=" text-white">0712741650 | 0703704062</nav>
            </div>
            <div className="flex gap-2">
              <nav className="text-2xl text-white font-semibold">
                <MdMarkEmailRead />
              </nav>
              <nav className="text-white ">solarpointsystems1@gmail.com</nav>
            </div>
          
          </div>
        </nav>
      </div>
      <div className=" flex flex-col items-center space-y-8 justify-center bg-[#111827]">
        <h4 className="text-3xl py-3 text-white font-semibold hover:underline transition-all delay-300 ">
          Request For Quotation
        </h4>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2   "
        >
          <label className="text-white font-semibold">Name</label>
          <input
            type="text"
            name="from_name"
            className="border-2 text-slate-600 font-Poppins font-medium hover:border-blue-800 rounded-md py-2 px-2 outline-none transition-all delay-300"
          />
          <label className="text-white font-semibold">Email</label>
          <input
            type="email"
            name="from_email"
            className="border-2 text-slate-600 font-Poppins font-medium  hover:border-blue-800 rounded-md py-2 px-2 outline-none transition-all delay-300"
          />
          <label className="text-white font-semibold">Area Code</label>
          <input
            type="number"
            name="from_area_code"
            
            pattern="\d*"
            minLength="3"
            maxLength="5"
            placeholder="e.g., +1"
            className="border-2 text-slate-600 font-Poppins font-medium hover:border-blue-800 rounded-md py-2 px-2 outline-none transition-all delay-300"
          />

          <label className="text-white font-semibold">Phone Number</label>
          <input
            type="number"
            name="from_phone_number"
            className="border-2 text-slate-600 font-Poppins font-medium hover:border-blue-800 rounded-md py-2 px-2 outline-none transition-all delay-300"
          />

          <label className="text-white font-semibold">Service Type</label>
          <select
            name="service_type"
            className="border-2 text-slate-600 font-Poppins font-medium hover:border-blue-800 rounded-md py-2 px-2 outline-none transition-all delay-300"
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

          <label className="text-white font-semibold">Message / Details</label>
          <textarea
            name="message"
            className="outline-none py-4 px-5 rounded-sm text-slate-600 font-Poppins font-medium"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            value="Send"
            className="bg-brandC rounded-md py-4 font-semibold text-xl text-white cursor-pointer hover:bg-brandD transition-all delay-300"
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
