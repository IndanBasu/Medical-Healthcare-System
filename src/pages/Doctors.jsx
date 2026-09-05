import React, { useState, useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"

const Doctors = () => {

  let { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>

      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">

        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>

        {/* --- Left Sidebar - Specialities Filter --- */}

        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden  sm:flex'}`}>

          <p onClick={() => speciality === "General physician" ? navigate("/doctors") : navigate(`/doctors/${encodeURIComponent("General physician")}`)}
            className={`w-full sm:w-56 pl-3 py-2 pr-4 border border-gray-300 rounded cursor-pointer transition-all 
              ${speciality === "General physician" ? "bg-indigo-100 text-black" : "" }`}> General physician </p>

          <p onClick={() => speciality === "Gynecologist" ? navigate("/doctors") : navigate(`/doctors/${encodeURIComponent("Gynecologist")}`)}
            className={`w-full sm:w-56 pl-3 py-2 pr-4 border border-gray-300 rounded cursor-pointer transition-all 
              ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}> Gynecologist </p>

          <p onClick={() => speciality === "Dermatologist"  ? navigate("/doctors")  : navigate(`/doctors/${encodeURIComponent("Dermatologist")}`)}
            className={`w-full sm:w-56 pl-3 py-2 pr-4 border border-gray-300 rounded cursor-pointer transition-all 
              ${ speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}> Dermatologist </p>

          <p onClick={() => speciality === "Pediatricians" ? navigate("/doctors") : navigate(`/doctors/${encodeURIComponent("Pediatricians")}`)}
            className={`w-full sm:w-56 pl-3 py-2 pr-4 border border-gray-300 rounded cursor-pointer transition-all 
              ${ speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}> Pediatricians </p>

          <p onClick={() => speciality === "Neurologist" ? navigate("/doctors") : navigate(`/doctors/${encodeURIComponent("Neurologist")}`)}
            className={`w-full sm:w-56 pl-3 py-2 pr-4 border border-gray-300 rounded cursor-pointer transition-all 
              ${ speciality === "Neurologist" ? "bg-indigo-100 text-black" : "" }`}> Neurologist </p>

          <p onClick={() => speciality === "Gastroenterologist" ? navigate("/doctors") : navigate(`/doctors/${encodeURIComponent("Gastroenterologist")}`)}
            className={`w-full sm:w-56 pl-3 py-2 pr-4 border border-gray-300 rounded cursor-pointer transition-all 
              ${ speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}> Gastroenterologist </p>

        </div>

        {/* --- Right Side - Doctor Cards Grid --- */}

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {filterDoc.map((item, index) => (
            <div key={item._id || index} onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500 bg-white">

              <div className="bg-blue-50 flex items-center justify-center overflow-hidden h-60">
                <img className="w-full h-full object-cover object-center" src={item.image} alt={item.name} />
              </div>

              <div className="p-4">

                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>

                <p className="text-gray-900 text-lg font-medium"> {item.name}</p>

                <p className="text-gray-600 text-sm"> {item.speciality}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Doctors