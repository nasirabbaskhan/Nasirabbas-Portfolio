"use client";
import { useState } from "react";
import * as yup from "yup";
import { toast } from "../ui/use-toast";

export default function Contect() {
  const [email, setEmail] = useState("");
  const [name, SetName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(""); // for validation
  console.log("name", name, "email", email, "message", message);
  const contectUsValidationSchema = yup.object().shape({
    name: yup.string().required().max(10).min(4),
    email: yup.string().required().email(),
    message: yup.string().required().min(10),
  });

  const handleSubmit = async () => {
    try {
      const results = await contectUsValidationSchema.validate({
        name,
        email,
        message,
      });
      if (results) {
        toast({
          title: " Successfull",
          description: "Message Successfully Submitted!",
        });
        setEmail("");
        setMessage("");
        SetName("");
      }
      setErrors("");
    } catch (error: any) {
      console.log(error.errors);

      setErrors(error.errors);
    }
  };
  return (
    <>
      <section className="text-gray-600 bg-[#121212] body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="heading">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => SetName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="w-full bg-[#55e6a5]  rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className="w-full bg-[#55e6a5]  rounded border border-gray-300 text-black focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white "
                  >
                    Message
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    value={message}
                    className="w-full bg-[#55e6a5]  rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="mt-6 mb-4 text-red-700">{errors}</div>
                <button
                  onClick={handleSubmit}
                  className="lg:w-[100%] text-center  md:w-[60%] w-[60%] cursor-pointer px-[1rem] rounded-md sm:w-[42%] hover:bg-yellow-400 transition-all duration-200 py-[1rem] md:text-[16px] text-[10px] font-bold uppercase bg-[#55e6a5] text-black "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
