import { EyeIcon, EyeOffIcon, LoginIcon } from "@heroicons/react/outline";
import { CashIcon } from "@heroicons/react/solid";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { getUser } from "../../services/login";

const FormUserLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username") || '');
  const [password, setPassword] = useState(localStorage.getItem("password") || '');
  const [rememberMe, setRememberMe] = useState(!!localStorage.getItem("password"));
  const [error, setError] = useState(false);
  const history = useHistory();
  const { signin } = useContext(AuthContext);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = {
        username: username,
        password: password,
      };
      const { data } = await getUser(user);
      if (data.token) {
        signin(data);
        if (rememberMe){
          localStorage.setItem("username", username)
          localStorage.setItem("password", password)
        }
        else{
          localStorage.removeItem("username")
          localStorage.removeItem("password")
        }
        history.push("/");
      } else {
        setError(data.errors);
      }
    } catch {
      console.log("error");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <CashIcon className=" h-48 w-48 m-auto text-indigo-600" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            {error && (
              <div className=" bg-red-500 text-center p-2 text-white">
                {error}
              </div>
            )}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Username</label>
                <input
                  name="username"
                  autoComplete="current-username"
                  value={username}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) => handleChangeUsername(e)}
                />
              </div>
              <div className="flex flex-row relative">
                <label className="sr-only">Password</label>
                <input
                  name="password"
                  type={!showPass ? "password" : "text"}
                  autoComplete="current-password"
                  value={password}
                  required
                  className="appearance-none border border-gray-300 relative block w-full px-3 py-2 rounded-b-md  placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                  placeholder="Password"
                  onChange={(e) => handleChangePassword(e)}
                />
                <div className="px-3 absolute right-0 bottom-0 h-full grid items-center z-20 cursor-pointer">
                  {!showPass ? (
                    <EyeIcon
                      onClick={() => setShowPass(!showPass)}
                      className="h-6 text-gray-500"
                    />
                  ) : (
                    <EyeOffIcon
                      onClick={() => setShowPass(!showPass)}
                      className="h-6 text-gray-500"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  checked={rememberMe}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  onChange={()=>{setRememberMe(!rememberMe)}}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/reset-password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
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
                  <LoginIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Log in
              </button>
              <div className="text-lg text-center m-2">
                New user?{" "}
                <Link
                  to="/register"
                  className=" text-lg text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormUserLogin;
