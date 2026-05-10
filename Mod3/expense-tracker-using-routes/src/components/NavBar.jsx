
import {NavLink} from 'react-router-dom'
import { LayoutGrid, CreditCard, PieChart, ArrowLeftRight, User   } from 'lucide-react'

export default function NavBar () {

  const linkBase = "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all ";
  const activeStyle = "bg-[#6366f1] text-white shadow-md";
  const idleStyle = "text-slate-500 hover:bg-slate-50 hover:text-slate-700";
        
  
  return(
           <nav className="h-screen w-64 border-r border-slate-100 bg-white p-6 flex flex-col">
            <div className="mb-10 px-2">
                <div className="w-12 h-12 text-[#6366f1] border-2 border-[#6366f1] rounded-xl flex items-center justify-center">
                    <CreditCard size={28} />
                </div>
            </div>
                <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                 Overview
                </p>
            <div className="space-y-2"> 
                    <NavLink to='/'
                    className={({ isActive }) => linkBase + (isActive ? activeStyle : idleStyle)}>
                    <LayoutGrid size={20} />
                    <span> Home </span></NavLink>
                    
                    <NavLink to='/wallet'
                    className={({ isActive }) => linkBase + (isActive ? activeStyle : idleStyle)}>
                    <CreditCard size={20} />
                    <span>Wallet</span></NavLink>
                    
                    <NavLink to='/Categories'
                    className={({ isActive }) => linkBase + (isActive ? activeStyle : idleStyle)}>
                    <PieChart size={20} />
                    <span>Categories</span></NavLink>
                    
                    <NavLink to='/Transactions'
                    className={({ isActive }) => linkBase + (isActive ? activeStyle : idleStyle)}>
                    <ArrowLeftRight size={20} />
                    <span>Transactions</span></NavLink>
                    
                    <NavLink to='/profile'
                    className={({ isActive }) => linkBase + (isActive ? activeStyle : idleStyle)}>
                    <User size={20} />
                    <span>Profile</span></NavLink>
            </div>  
           </nav>
        )
}