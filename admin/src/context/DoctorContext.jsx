import { createContext, useState, useEffect } from "react";

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken, setDToken] = useState(localStorage.getItem("dToken") || null)

    useEffect(() => {
        if (dToken) {
            localStorage.setItem("dToken", dToken)
        } else {
            localStorage.removeItem("dToken")
        }
    }, [dToken])

    const value = {
        dToken,
        setDToken,
        backendUrl,
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider