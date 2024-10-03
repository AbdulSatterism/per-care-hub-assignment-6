"use client"
const Contact = () => {
  return (
    <div className="p-8 my-10 shadow-sm shadow-blue-600">
      <h2 className="text-3xl text-center font-bold mb-8  ">Contact</h2>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gap-4">
            <h3 className="text-2xl font-semibold  text-blue-600 uppercase">
              Get in Touch
            </h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium ">Name</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Email</label>
                <input
                  type="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Message</label>
                <textarea className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border shadow-sm text-xl rounded-md text-white bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* side option */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 uppercase">
                Contact Information
              </h3>
              <p className="mt-4 text-gray-500">
                Feel free to reach out to us through any of the following
                methods.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-500">
                Company Location
              </h4>
              <p className="text-gray-500">
                Mirpur-10,Dhaka
                <br />
                Bangladesh
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-500">Email</h4>
              <p className="text-gray-500">abdulsatter.ism@gmail.com</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-500">Mobile</h4>
              <p className="text-gray-500">(+880)- 1710426245</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
