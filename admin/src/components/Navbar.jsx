import React, { useContext } from "react"
import { assets } from "../assets/assets_admin/assets"
import { AdminContext } from "../context/AdminContext"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate("/")
    aToken && setAToken("")
    aToken && localStorage.removeItem("aToken")
  };

  return (

    <div className="h-[47px] flex justify-between items-center px-5 border-b bg-white">
      <div className="flex items-center gap-2 text-[10px]">
        <img
          className="w-[125px] cursor-pointer"
          src={assets.admin_logo}
          alt="Prescripto admin"
        />
        <p className="border px-2 py-0.5 rounded-full border-gray-400 text-[9px] text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-[10px] px-8 py-2 rounded-full"
      >
        Logout
      </button>
    </div>

  )

}

export default Navbar
