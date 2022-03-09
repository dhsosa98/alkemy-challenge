import { AuthContext } from "../../AuthContext";
import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, UserCircleIcon, XIcon } from "@heroicons/react/outline";
import { Link, useHistory } from "react-router-dom";
import { CashIcon } from "@heroicons/react/solid";

const navigation = [{ name: "Dashboard", href: "/", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({ children }) => {
  const { user, signout } = useContext(AuthContext);
  const history = useHistory();

  const closeSesion = () => {
    signout();
    history.push("/login");
  };

  return (
    <div className=" text-purple-50 bg-gray-50 min-h-screen">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <CashIcon className="h-10 text-indigo-600 w-auto mx-3" />
                    <h5 className=" hidden lg:block w-auto text-2xl">
                      Operations Manager
                    </h5>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" hidden lg:block w-auto">
                  {`${user.name} ${user.surname}`}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    onClick={closeSesion}
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="flex flex-col w-auto justify-center my-2">
                  <UserCircleIcon className="h-11" />
                  <div className="mx-auto mb-2">{`${user.name} ${user.surname}`}</div>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="container sm:mx-auto text-gray-900">{children}</div>
    </div>
  );
};

export default Layout;
