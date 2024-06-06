import { Link } from "react-router-dom"

const Input = (props:any) => {
  const handleSubmit=()=>{
<Link to={'/Crud'}></Link>
  }  
  return(
    <div className="bg-blue-100 min-h-screen text-slate-700 flex items-center">
    <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">Name</label>
                    <input {...props}/>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">Twitter</label>
                    <input {...props}/>
                </div>
                <button onSubmit={handleSubmit} className="block w-full bg-blue-500 text-white font-bold p-3 rounded-lg">Submit</button>
            </form>
        </div>
    </div>
</div>
);
}
export default Input
