import NavBar from "../NavBar"

export default function Wallet () {
    return(

<div className="flex flex-wrap gap-6 p-6 bg-gray-50 min-h-screen">         

     <header><NavBar /></header>        
             
             <div className="flex h-48 w-72 flex-col justify-center rounded-2xl bg-[#1a1a7e] p-8 text-white shadow-lg">
                <h2 className="text-2xl font-bold">Add a wallet</h2>
                <p className="text-sm font-light opacity-80 mt-1">Click to add a wallet for your transactions</p>
            </div>
             <div className="relative flex h-48 w-72 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-600">Monthly Bills</h2>
                <p className="mt-4 text-2xl font-bold text-gray-900">KES 50,000</p>
                <p className="self-end text-sm text-gray-400 font-light">today</p>
            </div>
             <div className="relative flex h-48 w-72 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-600">Monthly Bills</h2>
                <p className="mt-4 text-2xl font-bold text-gray-900">KES 50,000</p>
                <p className="self-end text-sm text-gray-400 font-light">today</p>
            </div>
             <div className="relative flex h-48 w-72 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-600">Monthly Bills</h2>
                <p className="mt-4 text-2xl font-bold text-gray-900">KES 50,000</p>
                <p className="self-end text-sm text-gray-400 font-light">today</p>
            </div> 
            <div className="relative flex h-48 w-72 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-600">Monthly Bills</h2>
                <p className="mt-4 text-2xl font-bold text-gray-900">KES 50,000</p>
                <p className="self-end text-sm text-gray-400 font-light">today</p>
            </div> 
        </div>
    )
}