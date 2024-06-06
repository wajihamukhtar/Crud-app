import { Link } from "react-router-dom"

const Table = (props:any) => {
  return (
    <div className="relative overflow-x-auto">
            <table className=" min-w-[700px] w-11/12 text-sm text-left mt-2 rtl:text-right">
                <thead className=" text-md uppercase text-slate-700 bg-blue-100">
                    <tr>
                        {props?.columns && props?.columns.map((head:any, index:number) => (
                            <th key={index} scope="col" className="border px-6 py-3" style={{ width: head.width }}>
                                {head.headerName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='text-md text-slate-800'>
                    {props?.rows && props?.rows?.map((item:any, rowIndex:number) => (
                        <tr key={rowIndex} className="bg-white dark:bg-gray-800">
                            {props.columns.map((column:any, colIndex:number) => (
                                <td key={colIndex} className="border px-1 py-3">
                                    {item[column?.feild]}
                                </td>
                            ))}
                     <td className="flex">   
                    <Link to={'/Crud'}></Link>
                     </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Table
