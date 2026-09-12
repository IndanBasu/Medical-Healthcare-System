import React, { useContext } from "react"
import { assets } from "../../assets/assets_admin/assets"
import { useState } from "react"
import { AdminContext } from "../../context/AdminContext"
import { toast } from "react-toastify"
import axios from "axios"

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [experience, setExperience] = useState("1")
  const [customExperience, setCustomExperience] = useState("")
  const [fees, setFees] = useState("")
  const [about, setAbout] = useState("")
  const [speciality, setSpeciality] = useState("General physician")
  const [customSpeciality, setCustomSpeciality] = useState("")
  const [degree, setDegree] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")

  const { backendUrl, aToken } = useContext(AdminContext)

  // Handle form submission

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (!docImg) {
        return toast.error("Please upload doctor image")
      }

      const formData = new FormData()

      formData.append("image", docImg)
      formData.append("name", name)
      formData.append("email", email)
      formData.append("password", password)
      
      const experienceValue = Number(
        experience === "custom" ? customExperience : experience
      )

      const formattedExperience =
        experienceValue >= 20
          ? `${experienceValue}+ Years`
          : `${experienceValue} Year${experienceValue === 1 ? "" : "s"}`
      formData.append("experience", formattedExperience)
      formData.append("fees", Number(fees))
      formData.append("about", about)
      formData.append(
        "speciality",
        speciality === "custom" ? customSpeciality.trim() : speciality
      )

      formData.append("degree", degree)
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      )

      // Console log formdata

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`)
      })

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      )

      if (data.success) {
        toast.success(data.message)

        setDocImg(false)
        setName("")
        setPassword("")
        setEmail("")
        setAddress1("")
        setAddress2("")
        setDegree("")
        setAbout("")
        setFees("")
      
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }

  }

  return (

    <form onSubmit={onSubmitHandler} className="ml-[23px] mt-4 w-full max-w-[580px]">

      <p className="mb-3 text-lg font-medium text-[#3f3f46]">Add Doctor</p>

      <div className="w-full max-h-[690px] overflow-y-auto rounded-sm border border-[#e5e7eb] bg-white px-3 py-3">

        <div className="mb-4 flex items-center gap-3 text-[10px] text-gray-500">

          <label htmlFor="doc-img">
            <img className="h-[53px] w-[53px] cursor-pointer rounded-full bg-gray-100 object-cover" src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload doctor picture" />
          </label>

          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />

          <p>Upload doctor <br /> picture</p>

        </div>

        <div className="grid grid-cols-1 gap-x-3 text-[10px] text-[#62627a] lg:grid-cols-2">

          <div className="flex flex-col gap-1.5">

            <label className="!text-[#62627a]"> 
              Doctor Name
              <input onChange={(e) => setName(e.target.value)} value={name} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="text" placeholder="Name" required />
            </label>

            <label className="!text-[#62627a]">
              Doctor Email
              <input onChange={(e) => setEmail(e.target.value)} value={email} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="email" placeholder="Your email" required />
            </label>

            <label className="!text-[#62627a]">
              Doctor Password
              <input onChange={(e) => setPassword(e.target.value)} value={password} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="password" placeholder="Password" required />
            </label>

            <label className="!text-[#62627a]">
              Experience
              {experience === "custom" ? (
                <input onChange={(e) => setCustomExperience(e.target.value)} value={customExperience} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="number" min="1" placeholder="Enter years" required />
              ) : (
                <select onChange={(e) => setExperience(e.target.value)} value={experience} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-400" required>
                  {Array.from({ length: 10 }, (_, index) => {
                    const years = index + 1
                    return (
                      <option key={years} value={years}>{years}</option>
                    )
                  })}
                  {[20, 30, 40, 50].map((years) => (
                    <option key={years} value={years}>{years}+</option>
                  ))}
                  <option value="custom">Custom</option>
                </select>
              )}
            </label>

            <label className="!text-[#62627a]">
              Fees
              <input onChange={(e) => setFees(e.target.value)} value={fees} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="number" placeholder="Your fees" required />
            </label>

          </div>

          <div className="mt-1.5 flex flex-col gap-1.5 lg:mt-0">

            <label className="!text-[#62627a]">
              Speciality
              {speciality === "custom" ? (
                <input onChange={(e) => setCustomSpeciality(e.target.value)} value={customSpeciality} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="text" placeholder="Enter speciality" required />
              ) : (
                <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-400" required >
                  <option>General physician</option>
                  <option>Gynecologist</option>
                  <option>Dermatologist</option>
                  <option>Pediatrician</option>
                  <option>Neurologist</option>
                  <option>Gastroenterologist</option>
                  <option value="custom">Custom</option>
                </select>
              )}
            </label>

            <label className="!text-[#62627a]">
              Education
              <input onChange={(e) => setDegree(e.target.value)} value={degree} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="text" placeholder="Education" required />
            </label>

            <label className="!text-[#62627a]">
              Address
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className="mt-0.5 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="text" placeholder="Address 1" required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1 text-[10px] text-gray-700" type="text" placeholder="Address 2" required />
            </label>

          </div>

        </div>

        <div>

          <p className="mt-2 mb-1 text-[10px] !text-[#62627a]">About me</p>

          <textarea onChange={(e) => setAbout(e.target.value)} value={about} className="mt-0.5 h-[70px] w-full resize-none rounded-sm border border-[#dedee2] px-2 pt-1 text-[10px]" type="text" placeholder="write about yourself" rows={5} required ></textarea>

        </div>

        <button type="submit" className="bg-primary px-8 py-2 mt-3 text-white rounded-full">Add doctor</button>

      </div>

    </form>

  )

}

export default AddDoctor