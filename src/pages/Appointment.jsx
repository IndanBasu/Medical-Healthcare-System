import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { assets } from "../../assets/assets_frontend/assets"
import RelatedDoctors from "../components/RelatedDoctors"

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState("")

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // Getting Current Date

    let today = new Date()

    for (let i = 0; i < 7; i++) {

      // Getting Date with Index

      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // Setting End Time of the date with Index

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // Setting Hours

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours( currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10 )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"})

        // Add Slot to Array

        timeSlots.push({dateTime: new Date(currentDate), time: formattedTime})

        // Increment current time by 30 minutes

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots((prev) => [...prev, timeSlots])
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return (
    docInfo && (

      <div>

        {/* --- Doctor Details --- */}

        <div className="flex flex-col sm:flex-row gap-4">

          <div> <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="" /> </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">

            {/* --- Doc Info : Name, Degree, Experience --- */}

            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>

              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* --- Doctor About --- */}

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>

              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :{" "}
              <span>
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>

          </div>

        </div>

        {/* --- Booking slots --- */}

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">

          <p>Booking slots</p>

          {/* --- Days --- */}

          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {
              docSlots.length && docSlots.map((item, index) => (
                <div onClick={() => {
                    setSlotIndex(index)
                    setSlotTime("")
                  }}
                  className={`text-center py-3 min-w-[54px] h-[80px] rounded-[30px] cursor-pointer border transition-all flex flex-col justify-center ${
                    slotIndex === index
                      ? "bg-primary text-white border-primary shadow-md"
                      : "border-gray-200 text-gray-600"
                  }`}
                  key={index}
                >

                  <p className="text-sm font-medium">
                    {item[0] && daysOfWeek[item[0].dateTime.getDay()]}
                  </p>

                  <p className="text-base font-medium mt-1">
                    {item[0] && item[0].dateTime.getDate()}
                  </p>

                </div>
              ))
            }

          </div>

          {/* --- Time Slots --- */}

          <div className="flex items-center gap-2 w-full overflow-x-auto mt-4 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {
              docSlots.length && docSlots[slotIndex].map((item, index) => (
                <p onClick={() => setSlotTime(item.time)}
                  className={`text-xs font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border transition-all ${
                    item.time === slotTime
                      ? "bg-primary text-white border-primary"
                      : "text-gray-500 border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            }

          </div>

          {/* --- Book Appointment Button --- */}

          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 shadow-md">Book an appointment</button>

        </div>

        {/* --- Listing Related Doctors --- */}

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

      </div>
    )
  )
}

export default Appointment