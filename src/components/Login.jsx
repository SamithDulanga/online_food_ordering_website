import React from 'react'

const Login = () => {
  return (
    <div>
         <div className="sm:my-28 my-6 container  py-28 sm:py-44 lg:py-0">
            <div className="w-full flex items-center justify-center">

                <div className="bg-white p-8  border-2 shadow-2xl w-full  max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" id="username" name="username" required
                                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required
                                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" required
                                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <button type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Continue
                        </button>
                        <div>
                          <h1 className="font-bold">Already have an account? <span className="text-red-500">Login here</span></h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox"/>
                            <h1>I agree to the terms of use & privacy policy.</h1>
                        </div>
                    </form>
                </div>



            </div>

        </div>
    </div>
  )
}

export default Login