import NavBar from "../NavBar"

export default function Categories () {
    return (
        <div className="flex min-h-screen bg-gray-50">
                   
                   <header><NavBar /></header>
       
                   <main className="flex-1 p-8">
            
            <div id="lowerpart" className="flex justify-between items-center mb-10">
                
                <div className="font-serif p-1 text-l">
                <h1 className="text-3xl font-bold text-slate-900">Categories</h1>
                <p className="text-slate-500 mt-1">Add your expense category</p>
                </div>
                <button className="bg-[#6366f1] text-white px-6 py-2 rounded-lg font-medium " type="button">Add Expense</button>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse">                    
                    <thead >
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 font-semibold text-slate-600"> Id</th>
                        <th className="p-4 font-semibold text-slate-600" >Name</th>
                        <th className="p-4 font-semibold text-slate-600" > Type</th>
                        <th className="p-4 font-semibold text-slate-600" > CreatedAt</th>
                      </tr>
                    </thead>
                      <tbody className="divide-y divide-slate-100">  
                      <tr>
                        <td className="p-4 text-slate-700" >{1} </td>
                        <td className="p-4 text-slate-700">{`bills`} </td>
                        <td className="p-4 text-slate-700" >{`bills`} </td>
                        <td className="p-4 text-slate-700" > {`today`} </td>
                        
                      </tr>
                      </tbody>
                      <tbody className="divide-y divide-slate-100">                    
                        <tr>
                        <td className="p-4 text-slate-700" >{2} </td>
                        <td className="p-4 text-slate-700" >{`food`} </td>
                        <td className="p-4 text-slate-700" >{`bills`} </td>
                        <td className="p-4 text-slate-700" > {`today`} </td>
                      
                      </tr>
                      </tbody>
                      <tbody className="divide-y divide-slate-100">                    
                        <tr>
                        <td className="p-4 text-slate-700" >{3} </td>
                        <td className="p-4 text-slate-700" >{`entertainment`} </td>
                        <td className="p-4 text-slate-700" >{`entertainment`} </td>
                        <td className="p-4 text-slate-700" > {`today`} </td>
                      </tr>
                      </tbody>
                      <tbody className="divide-y divide-slate-100">
                       <tr>
                        <td className="p-4 text-slate-700" >{4} </td>
                        <td className="p-4 text-slate-700" >{`rent`} </td>
                        <td className="p-4 text-slate-700" >{`rent`} </td>
                        <td className="p-4 text-slate-700" > {`today`} </td>
                      </tr>
                      </tbody>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                        <td className="p-4 text-slate-700" >{5} </td>
                        <td className="p-4 text-slate-700" >{`saving`} </td>
                        <td className="p-4 text-slate-700" >{`savings`} </td>
                        <td className="p-4 text-slate-700" > {`today`} </td>
                      </tr>
                      </tbody>
                   
                </table>
             </div>
             </main>
        </div>
    )
}