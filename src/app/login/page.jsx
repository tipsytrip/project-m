import React from "react";

function Login() {
  return (
    <main className="flex justify-center items-center w-full min-h-[100vh] border border-black">
      <div className="border border-black rounded-md w-96 max-w-xl min-h-[600px] p-10">
        <section className="text-2xl text-center font-bold">Login</section>
        <section className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Type your E-mail"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm px-2"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="Password"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="password"
                id="Password"
                placeholder="Type your Password"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm px-2"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Password
              </span>
            </label>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
