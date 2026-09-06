import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-[calc(100vh-47px)] h-full w-[197px] shrink-0 bg-white border-r">
      {aToken && (
        <ul className="text-[#515151]">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2.5 py-2.5 px-5 cursor-pointer text-[10px] ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`
            }
            to={"/admin-dashboard"}
          >
            <img className="h-3.5 w-3.5" src={assets.home_icon} alt="" />
            <p>Home</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2.5 py-2.5 px-5 cursor-pointer text-[10px] ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`
            }
            to={"/all-appointments"}
          >
            <img className="h-3.5 w-3.5" src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2.5 py-2.5 px-5 cursor-pointer text-[10px] ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`
            }
            to={"/add-doctor"}
          >
            <img className="h-3.5 w-3.5" src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2.5 py-2.5 px-5 cursor-pointer text-[10px] ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`
            }
            to={"/doctor-list"}
          >
            <img className="h-3.5 w-3.5" src={assets.people_icon} alt="" />
            <p>Doctors List</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2.5 py-2.5 px-5 cursor-pointer text-[10px] ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`
            }
            to={"/patients"}
          >
            <img className="h-3.5 w-3.5" src={assets.patients_icon} alt="" />
            <p>Patients</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
