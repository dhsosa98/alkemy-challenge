function TableLayout(
    {children}
  ) {
    return (
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden my-1 p-3 transform hover:translate-x-1 duration-300 ease-in-out">
            <table className="min-w-full text-xs sm:text-lg ">
              {children}
            </table>
          </div>
        </div>
      </div>
    );
  }

  export default TableLayout;