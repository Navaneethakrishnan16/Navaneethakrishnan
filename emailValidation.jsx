import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


function Contact() {

const validateEmail = (email) => {
    // const allowedDomains = ["gmail", "yahoo", "outlook", "hotmail", "protonmail"]; // Allowed providers
    const allowedExtensions = ["com", "net", "org", "co", "us"]; // Allowed extensions

    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([a-zA-Z]{2,})$/; // Ensures full email with extension

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format! Example: user@gmail.com");
      return false;
    }

    const [_, domainPart] = email.split("@");
    if (!domainPart) {
      setEmailError("Invalid email! Missing '@' or domain.");
      return false;
    }

    const domainParts = domainPart.split(".");
    if (domainParts.length < 2) {
      setEmailError("Invalid email! Missing extension (e.g., .com, .net).");
      return false;
    }

    const domainName = domainParts[0]; // Extract the name before ".com"
    const extension = domainParts[1]; // Extract the extension like "com"

    // if (!allowedDomains.includes(domainName) || !allowedExtensions.includes(extension)) {
    //   setEmailError("Only public emails (Gmail, Yahoo, Outlook, etc.) are allowed!");
    //   return false;
    // }

    setEmailError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


     // Validate email
  if (!validateEmail(email)) {
    return; // Stop the form from submitting if validation fails
  }
  

return(

 <form
                  onSubmit={handleSubmit}
                  className="mt-10 max-w-lg mx-auto"
                >
                  <div className="mb-4">
                    <label
                      className=" text-maincol  font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
        <label className="text-maincol font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail(email)} // Validate when user leaves input
          className={`border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emailError ? "border-red-500" : ""
          }`}
          required
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>
                  <div className="mb-4">
                    <label
                      className=" text-maincol  font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // Ensure this matches the placeholder in EmailJS
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    {/* <button
              type="submit"
              className="bg-maincol text-white hover:bg-maincol-dark  font-bold float-left py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Send"
            >
              Submit
            </button> */}
                    <input
                      type="submit"
                      className="bg-maincol text-white hover:bg-maincol-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </form>

                {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 pt-10 pb-10 rounded shadow-lg text-center ">
          <h2 className="text-xl font-bold mt-2">Thanks for taking the time to submit!!!</h2>
            <div className="flex justify-center gap-4 mt-4">
            <FaCheckCircle size={100} color="#02a884"/>
            </div>
       <p className="mt-4">We will contact you shortly ...</p>
          </div>
        </div>
      )}

              </div>

)

}

export default Contact;
