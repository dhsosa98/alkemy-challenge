import React from 'react';

function CenterContainer({ children }) {
    return ( 
        <div className=' grid justify-center items-center min-h-screen bg-gradient-to-r p-2 from-indigo-300 to-indigo-500'>
            <div className=' bg-gray-50 sm:px-10 px-5 border border-slate-100 shadow-sm rounded-xl'> 
            {children}
            </div>
        </div>
     );
}

export default CenterContainer;