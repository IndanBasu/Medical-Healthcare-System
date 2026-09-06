import React, { useContext } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  // Handle form submission

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Please upload doctor image");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 }),
      );

      // console log formdata

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } },
      );

      if (data.success) {
        toast.success(data.message);

        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="ml-[23px] mt-4 w-full max-w-[595px]"
    >
      <p className="mb-3 text-lg font-medium text-[#3f3f46]">Add Doctor</p>

      <div className="w-full rounded-sm border border-[#e5e7eb] bg-white px-5 py-5">
        <div className="mb-6 flex items-center gap-3 text-[10px] text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="h-[53px] w-[53px] cursor-pointer rounded-full bg-gray-100 object-cover"
              src={
                docImg
                  ? URL.createObjectURL(docImg)
                  : assets.upload_area
              }
              alt="Upload doctor picture"
            />
          </label>

          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />

          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 text-[10px] text-[#62627a] lg:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <label>
              Doctor Name
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="text"
                placeholder="Name"
                required
              />
            </label>

            <label>
              Doctor Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="email"
                placeholder="Your email"
                required
              />
            </label>

            <label>
              Doctor Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="password"
                placeholder="Password"
                required
              />
            </label>

            <label>
              Experience
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-400"
              >
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
                <option>4 Year</option>
                <option>5 Year</option>
                <option>6 Year</option>
                <option>7 Year</option>
                <option>8 Year</option>
                <option>9 Year</option>
                <option>10 Year</option>
              </select>
            </label>

            <label>
              Fees
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="number"
                placeholder="Your fees"
                required
              />
            </label>
          </div>

          <div className="mt-2.5 flex flex-col gap-2.5 lg:mt-0">
            <label>
              Speciality
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-400"
              >
                <option>General physician</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>Neurologist</option>
                <option>Gastroenterologist</option>
              </select>
            </label>

            <label>
              Education
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="text"
                placeholder="Education"
                required
              />
            </label>

            <label>
              Address
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="mt-1 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="text"
                placeholder="Address 1"
                required
              />

              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="mt-2 w-full rounded-sm border border-[#dedee2] px-2 py-1.5 text-[10px] text-gray-700"
                type="text"
                placeholder="Address 2"
                required
              />
            </label>
          </div>
        </div>

        <div>
          <p className="mt-3 mb-1 text-[10px] text-[#62627a]">About me</p>

          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="mt-1 h-[84px] w-full resize-none rounded-sm border border-[#dedee2] px-2 pt-1.5 text-[10px]"
            type="text"
            placeholder="write about yourself"
            rows={5}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
