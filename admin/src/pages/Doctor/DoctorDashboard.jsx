import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const { dToken, dashData, getDashData, cancelAppointment } = useContext(DoctorContext)

  const { currency, slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (

    <div className='m-5 w-full max-w-[580px]'>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

        <div className="flex items-center gap-2 bg-white border border-gray-100 rounded p-2.5 h-[72px] cursor-pointer hover:scale-105 transition-all">

          <img className="w-11" src={assets.earning_icon} alt="" />

          <div>
            <p className="text-lg font-semibold text-gray-600">{currency} {dashData.earnings.toFixed(2)}</p>
            <p className="text-xs text-gray-400">Earnings</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white border border-gray-100 rounded p-2.5 h-[72px] cursor-pointer hover:scale-105 transition-all">

          <img className="w-11" src={assets.appointments_icon} alt="" />

          <div>
            <p className="text-lg font-semibold text-gray-600">{dashData.appointments}</p>
            <p className="text-xs text-gray-400">Appointments</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white border border-gray-100 rounded p-2.5 h-[72px] cursor-pointer hover:scale-105 transition-all">
          
          <img className="w-11" src={assets.patients_icon} alt="" />

          <div>
            <p className="text-lg font-semibold text-gray-600"> {dashData.patients}</p>
            <p className="text-xs text-gray-400"> Patients</p>
          </div>
        </div>

      </div>

      <div className="mt-5 w-full bg-white border border-[#e5e7eb] rounded-lg overflow-hidden">

        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e5e7eb]">

          <img className="w-5" src={assets.list_icon} alt="" />

          <p className="font-semibold text-sm">Latest Appointment </p>

        </div>

        <div className="py-0.5">

          {
            dashData.latestAppointments.map((item, index) => (

              <div className="flex items-center gap-3 px-5 py-2.5 hover:bg-gray-100" key={index}>

                <img className="w-8 rounded-full" src={item.docData.image} alt="" />

                <div className="flex-1 text-sm">

                  <p className="text-gray-800 font-medium">{item.docData.name}</p>
                  <p className="text-gray-600 text-xs"> Booking on {slotDateFormat(item.slotDate)}</p>

                </div>

                {
                  item.cancelled
                  ? <p className="text-red-400 text-xs font-medium">
                      Cancelled
                    </p>
                  : <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-6 cursor-pointer"
                      src={assets.cancel_icon}
                      alt="Cancel appointment"
                    />
                }

              </div>

            ))
          }

        </div>

      </div>

    </div>

  )

}

export default DoctorDashboard