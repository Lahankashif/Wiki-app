import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center h-screen border-2 border-red-600">
        <img src="/assets/logo.png" alt="logo" className="w-40 mb-6" /> 

        <div className="flex flex-col gap-4 w-64">  
          <button
            type="button"
            onClick={()=>navigate('/Login')}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          >
            Log In
          </button>

          <button
            type="button"
            onClick={()=>navigate('/SignUp')}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-black bg-white text-black shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={()=>navigate('/Search')}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-black bg-white text-black shadow-sm focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
