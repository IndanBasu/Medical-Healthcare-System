import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {

    try {

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      const { data } = await axios.post(
        backendUrl + '/api/doctors/update-profile',
        updateData,
        { headers: { dToken } }
      )

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {

      toast.error(error.message)
      console.log(error)

    }

  }

  useEffect(() => {

    if (dToken) {
      getProfileData()
    }

  }, [dToken])

  return profileData && (

    <div className='w-full p-5 lg:p-8'>

      <div className='grid w-full max-w-6xl min-w-0 grid-cols-1 gap-5 lg:grid-cols-[280px_minmax(0,1fr)]'>

        <div className='flex h-fit justify-center rounded-lg bg-primary/80 p-4 lg:justify-start'>

          <img className='w-full max-w-64 rounded-lg object-cover' src={profileData.image} alt="" />

        </div>

        <div className='w-full min-w-0 rounded-lg border border-stone-100 bg-white p-6 py-7 lg:p-8'>

          {/* --- Doc Info : name, degree, experience --- */}

          <p className='break-words text-2xl font-medium text-gray-700 sm:text-3xl'>{profileData.name}</p>

          <div className='mt-1 flex flex-wrap items-center gap-2 text-gray-600'>

            <p className='min-w-0 break-words'>{profileData.degree} - {profileData.speciality}</p>

            <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>

          </div>

          {/* --- Doc About --- */}

          <div>

            <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About:</p>

            <p className='mt-1 max-w-[700px] break-words text-sm text-gray-600'>{profileData.about}</p>

          </div>

          <p className='text-gray-600 font-medium mt-4'>

            Appointment fee :{' '}

            <span className='text-gray-800'>

              {currency}{' '}

              {
                isEdit
                ? <input type="number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} />
                : profileData.fees
              }

            </span>

          </p>

          <div className='flex flex-wrap items-start gap-1 py-2'>

            <p>Address :</p>

            <div className='flex min-w-0 flex-1 flex-wrap items-center gap-1 text-sm'>

              {
                isEdit
                ? <input className='border border-gray-300 rounded px-2 py-1 w-44' type="text" onChange={(e) => setProfileData(prev => ({ ...prev,  address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} />
                : <p className='break-words'>{profileData.address.line1}</p>
              }

              {
                isEdit
                ? <input className='w-full max-w-56 rounded border border-gray-300 px-2 py-1' type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} />
                : <p className='break-words'>{profileData.address.line2}</p>
              }

            </div>

          </div>

          <div className='flex gap-1 pt-2'>

            <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" name="" id="" />

            <label htmlFor="">Available</label>

          </div>

          {
            isEdit
            ? <button onClick={updateProfile} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button>
            : <button onClick={() => setIsEdit(true)} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
          }

        </div>

      </div>

    </div>

  )
  
}

export default DoctorProfile