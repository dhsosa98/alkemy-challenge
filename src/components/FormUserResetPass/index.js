import { LockClosedIcon } from '@heroicons/react/outline'
import { CashIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const FormUserResetPass = ({...props}) => {
  const { onSubmit, setUsername, setPassword, setPasswordRepeated, error, setError } = props
    return (
      <div className="min-h-full flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className='text-center'>
            <CashIcon className=" h-48 w-48 m-auto text-indigo-600"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your Password</h2>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e)=>{
                    setError(false)
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div>
                <label className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e)=>{
                    setError(false)
                    setPassword(e.target.value)}}
                />
              </div>
              <div>
                <label className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repeat Password"
                  onChange={(e)=>{
                    setError(false)
                    setPasswordRepeated(e.target.value)}}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">

              <div className="text-sm">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Did you remember your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Reset Password
              </button>
              
              
            </div>
            
          </form>
        </div>
      </div>
    )
}

export default FormUserResetPass