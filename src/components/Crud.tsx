import axios from "axios"
import { useEffect, useState } from "react"
import Table from "./Table";
import Input from "./Input";
import { Link } from "react-router-dom";
type DataType = {
    id: number;
    name: string;
    email: any;
    body: string;
  };

  const Crud = () => {
    const [todos,settodos]=useState<DataType[]>([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            settodos([...res.data])
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    // const handleAdd=(event:any)=>{
    //     event.preventDefault();
    //     const id =event.target.id.value;
    //     console.log(id)
    //     axios.post('https://jsonplaceholder.typicode.com/comments',{
    //         id,
    //     })
    //     .then((res)=>{
    //        settodos([...res.data])
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }    
    const columns = [
        { feild: 'id', headerName: 'ID', width: '30' },
        { feild: 'name', headerName: 'Name', width: '70'},
        { feild: 'email', headerName: 'Email', width: '70'},
        { feild: 'body', headerName: 'Description', width: '70'},
        { feild: 'action', headerName: 'Action', width: '70'},
      ];
  return (
   <>
   <div className="text-center mb-5 mt-5"><Link className="border w-full bg-blue-500 text-white  px-4 py-3" to={'/ADD'}>ADD +</Link></div>
   <Table columns={columns} rows={todos} />
   </>
  );

              
}

export default Crud
