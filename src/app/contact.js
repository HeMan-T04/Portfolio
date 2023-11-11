"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "./send-email";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div className="mx-auto w-full max-w-[70vw] sm:w-[50vw] md:w-[50vw] lg:w-[40vw]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium  outline-none focus:border-[#00eb00] focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium  outline-none focus:border-[#00eb00] focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="mb-3 block text-base font-medium">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter your subject"
            className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium outline-none focus:border-[#00eb00] focus:shadow-md"
            {...register("subject", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base font-medium">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium  outline-none focus:border-[#00eb00] focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-[#009900] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

// 'use client';
// import { useEffect, useState, FormEvent} from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log("Data", name, email, subject, message);
//   };
//   return (
//     <div className="mx-auto w-full max-w-[70vw] sm:w-[50vw] md:w-[50vw] lg:w-[40vw]">
//       <form onSubmit={onSubmit}>
//         <div className="mb-5">
//           <label htmlFor="name" className="mb-3 block text-base font-medium">
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             id="name"
//             placeholder="Full Name"
//             className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium  outline-none focus:border-[#00eb00] focus:shadow-md"
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="email" className="mb-3 block text-base font-medium">
//             Email Address
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             id="email"
//             placeholder="example@domain.com"
//             className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium  outline-none focus:border-[#00eb00] focus:shadow-md"
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="subject" className="mb-3 block text-base font-medium">
//             Subject
//           </label>
//           <input
//             type="text"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             name="subject"
//             id="subject"
//             placeholder="Enter your subject"
//             className="w-full rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium outline-none focus:border-[#00eb00] focus:shadow-md"
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="message" className="mb-3 block text-base font-medium">
//             Message
//           </label>
//           <textarea
//             rows="4"
//             name="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             id="message"
//             placeholder="Type your message"
//             className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#ffffff40] py-3 px-6 text-base font-medium  outline-none focus:border-[#00eb00] focus:shadow-md"
//           ></textarea>
//         </div>
//         <div>
//           <button
//             className="hover:shadow-form rounded-md bg-[#009900] py-3 px-8 text-base font-semibold text-white outline-none"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
