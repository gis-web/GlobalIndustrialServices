import React from 'react';

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "468c3064-85a5-427e-a724-2b6cc00a8322");

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
      console.log("Success", res);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto mb-4">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Contact Us
      </h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            className="p-2 mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition ease-in-out"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="p-2 mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition ease-in-out"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="p-2 mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition ease-in-out"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            rows="4"
            required
            className="p-2 mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition ease-in-out"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg shadow-md font-bold hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
