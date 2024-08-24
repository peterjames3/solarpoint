
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
function OurContact() {
  return (
    <section className="mx-auto my-20 max-w-6xl space-y-5 rounded-sm bg-slate-100 p-10 shadow-md shadow-black">
      <h4 className="font-Inter text-3xl font-semibold">Head office</h4>
      <div className="flex w-full cursor-pointer flex-col space-y-6">
        <div className="flex gap-4">
          <nav className="text-2xl font-semibold text-brandD">
            {" "}
            <FaMapMarkedAlt />
          </nav>
          <nav className=" ">Apple wood,Adams Building, Ngong Road</nav>
        </div>
        <div className="flex gap-4">
          <nav className="text-2xl font-semibold text-brandD">
            <FaPhone />
          </nav>
          <nav> 0712741650 | 0703704062</nav>
        </div>
        <div className="flex gap-4">
          <nav className="text-2xl font-semibold text-brandD">
            <MdMarkEmailRead />
          </nav>
          <nav className=" ">solarpointsystems1@gmail.com</nav>
        </div>
      </div>
    </section>
  );
}

export default OurContact;
