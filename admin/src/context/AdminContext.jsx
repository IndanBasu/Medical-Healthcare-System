import axios from "axios"
import { createContext, useState } from "react"
import { toast } from "react-toastify"

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

  const [aToken, setAToken] = useState(localStorage.getItem("aToken") ? localStorage.getItem("aToken") : null)
  const [doctors, setDoctors] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getAllDoctors = async () => {
    
    try {
      const {data} = await axios.post(backendUrl + "/api/admin/all-doctors", {}, { headers: { aToken}})
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
        console.log(data.doctors)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const changeAvailability = async (docId) => {

    try {
      const {data} = await axios.post(backendUrl + "/api/admin/change-availability", {docId}, {headers: {aToken}})
      if (data.success) {
        data.available
          ? toast.success("Doctor is now available")
          : toast.error("Doctor is no longer available")
        getAllDoctors()           // Refresh the list of doctors
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {aToken, setAToken, backendUrl, getAllDoctors, doctors, changeAvailability}


  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )

}

export default AdminContextProvider
