import { EyeIcon, EyeOffIcon, LoginIcon } from '@heroicons/react/outline'
import { CashIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const FormUserLogin = ( {...props} ) => {
  const { onSubmit, setUsername, setPassword, error, setError } = props
  const [showPass, setShowPass] = useState(false)
    return (
        
        <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className='text-center'>
            <CashIcon className=" h-48 w-48 m-auto text-indigo-600"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            {error && <div className=' bg-red-500 text-center p-2 text-white'>{error}</div>}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">
                  Username
                </label>
                <input
                  name="username"
                  autoComplete="current-username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm"
                  placeholder="Username"
                  onChange={(e)=>{
                    setError(false)
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div className='flex flex-row border border-gray-300 rounded-b-md'>
                <label className="sr-only">
                  Password
                </label>
                  <input
                    name="password"
                    type={!showPass ? "password" : "text"}
                    autoComplete="current-password"
                    required
                    className="appearance-none border-none relative block w-full px-3 py-2 rounded-b-md  placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
                    placeholder="Password"
                    onChange={(e)=>{
                      setError(false)
                      setPassword(e.target.value)}}
                  />
                  <div className='pt-1.5 px-3'>
                    {!showPass ?
                    <EyeIcon onClick={()=>setShowPass(!showPass)} className='h-6 text-gray-500' />
                    :
                    <EyeOffIcon onClick={()=>setShowPass(!showPass)} className='h-6 text-gray-500' />
                    }
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/reset-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LoginIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
              <div className="text-lg text-center m-2">
                New user?{" "}
                <Link to="/register" className=" text-lg text-indigo-600 hover:text-indigo-500">
                  Sign Up
                </Link>
              </div>
              
            </div>
            
          </form>
        </div>
      </div>
    </>
    )
}

export default FormUserLogin