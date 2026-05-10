import NavBar from "../NavBar"

export default function Transactions (){
    return (
         <div className="flex min-h-screen bg-gray-50">
                    <header><NavBar /></header>
        
                    <main className="flex-1 p-8">
            
            <div className="flex justify-between items-center mb-8">                <div className="font-serif p-1 text-l">
                <h1 className="text-3xl font-bold text-slate-800">Transactions</h1>
                <p className="text-slate-500 text-sm mt-1">List of your recent transactions</p>
                </div>
                <button className="bg-[#6366f1] text-white px-5 py-2 rounded-lg text-sm font-medium shadow-sm" type="button">Add Transaction</button>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
               <table className="w-full text-left border-collapse">                    
                    <thead >
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" > Id</th>
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" >Amount</th>
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" > Description</th>
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" > Category</th>
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" > Wallet</th>
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" > Date</th>
                        <th className="px-6 py-4 font-semibold text-slate-600 text-sm" > CreatedAt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">  
                      <tr>
                        <td className="px-6 py-5 text-sm text-slate-700" >{1} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`20,000`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`lorem ipsum dola set mito`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Bills`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Monthly`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Today`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Tomorrrow`} </td>
                      </tr>
                    </tbody>
                    <tbody  className="divide-y divide-slate-100">  
                        <tr>
                        <td className="px-6 py-5 text-sm text-slate-700">{2} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`20,000`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`lorem ipsum dola set mito`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" > {`Food`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Expenses`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700">{`Today`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Today`} </td>
                        </tr>
                    </tbody>
                    <tbody  className="divide-y divide-slate-100">  
                      <tr>
                        <td className="px-6 py-5 text-sm text-slate-700" >{3} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`20,000`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`lorem ipsum dola set mito`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" > {`Food`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Expenses`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Today`} </td>
                        <td className="px-6 py-5 text-sm text-slate-700" >{`Today`} </td>
                      </tr>
                    </tbody>
                </table>
            </div>
            </main>
        </div>
    )
}