import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await account.createEmailPasswordSession(
      email,
      password
    );

    alert("Logged in");

  } catch (error) {
    console.log(error);
  }
};
  return (
     <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-white">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
              Tujuane
            </h1>
            <p className="text-gray-600">Welcome back! Login to continue</p>
          </div>

          <div className="bg-white border-2 border border-pink-100 rounded-2xl p-8">
            <form>
              <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                  <label className="text-md font-semibold text-black">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="px-3 py-1 border border-pink-200 focus:ring-pink-500 focus:border-pink-500 rounded-lg h-10 text-black"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-md font-semibold text-black">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    className="px-3 py-1 border border-pink-200 focus:ring-pink-500 focus:border-pink-500 rounded-lg h-10 text-black"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold h-11 rounded-lg"
                >
                  Login
                </button>
              </div>
              <div className="mt-6 text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="text-pink-500 font-semibold hover:text-pink-600">
                  Sign up here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login