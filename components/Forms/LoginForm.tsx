'use client'

import { useState } from "react";
//import { useRouter } from "next/router";

interface LoginFormData {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  //const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        //router.push("/about"); // Redirect to dashboard if login successful
      } else {
        alert('Invalid email or password'); // Show error message otherwise
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <h2 className="mb-4 text-[32px] leading-snug font-bold">Log in to your account</h2>
      <form onSubmit={handleSubmit} className="mt-10">
        <div>
          <label htmlFor="email" className="block text-xs undefined">Email</label>
          <div className="relative">
            <div className="flex flex-col items-start">
              <div className="relative w-full">
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  placeholder="" 
                  autoComplete="username" 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email} 
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="password" className="block text-xs undefined">Password</label>
          <div className="relative">
            <div className="flex flex-col items-start">
              <div className="relative w-full">
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  autoComplete="current-password" 
                  type="password" 
                  name="password" 
                  id="password"
                  value={formData.password} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <label className="flex items-center">
            <input type="checkbox" name="remember" className="border-gray-300 rounded shadow-sm text-primary-blue focus:ring-primary-blue" value="" />
              <span className="ml-2">Remember me</span>
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 transition ease-in-out duration-150 false ml-4">Log in</button>
        </div>
        <div className="flex justify-between mt-8">
          <a className="rounded-sm md:hover:underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue" href="/forgot-password">Forgot your password?</a>
          <a className="rounded-sm md:hover:underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue" href="/register">Create an account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
