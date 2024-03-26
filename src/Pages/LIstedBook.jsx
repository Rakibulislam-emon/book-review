// import { Outlet } from "react-router-dom";
import ReadBooks from "./ReadBooks";



export default function LIstedBook() {
  return (
    <div className="">
      <div >
        <h1 className='text-[40px] max-w-[90%] m-auto rounded-xl p-8 bg-[#1313130D] border font-bold text-center mt-4 mb-8'>Books</h1>
      </div>
      {/* <Outlet></Outlet> */}
      <ReadBooks></ReadBooks>
      
    </div>
  )
}
