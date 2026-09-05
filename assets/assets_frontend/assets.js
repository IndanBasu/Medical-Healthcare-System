import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Arjun Mehta",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Arjun Mehta is a dedicated general physician focused on preventive healthcare, early diagnosis, and personalized treatment. He provides comprehensive care for common medical conditions and promotes healthy lifestyle practices.",
    fees: 700,
    address: {
      line1: "Bandra West",
      line2: "Mumbai, Maharashtra",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Priya Sharma",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "9 Years",
    about:
      "Dr. Priya Sharma specializes in women's health, reproductive care, and preventive gynecology. She focuses on providing compassionate consultations and personalized treatment for women at different stages of life.",
    fees: 900,
    address: {
      line1: "Indiranagar",
      line2: "Bengaluru, Karnataka",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Preet Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Neha Patel provides specialized care for skin, hair, and nail conditions. Her approach focuses on accurate diagnosis, evidence-based treatment, and long-term skin health.",
    fees: 800,
    address: {
      line1: "Navrangpura",
      line2: "Ahmedabad, Gujarat",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Omkar Deshmukh",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dr. Rohan Deshmukh is a pediatrician dedicated to children's health, growth, and development. He provides preventive care, vaccination guidance, and treatment for common childhood illnesses.",
    fees: 750,
    address: {
      line1: "Kothrud",
      line2: "Pune, Maharashtra",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Riya Rao",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "12 Years",
    about:
      "Dr. Vikram Rao specializes in neurological disorders and provides comprehensive evaluation and management of conditions affecting the brain, spinal cord, and nervous system.",
    fees: 1200,
    address: {
      line1: "Gachibowli",
      line2: "Hyderabad, Telangana",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Jayesh Karkera",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "11 Years",
    about:
      "Dr. Ananya Iyer focuses on neurological health with an emphasis on accurate diagnosis and individualized treatment. She is committed to helping patients manage neurological conditions effectively.",
    fees: 1100,
    address: {
      line1: "Anna Nagar",
      line2: "Chennai, Tamil Nadu",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Rahul Kapoor",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS, MD",
    experience: "9 Years",
    about:
      "Dr. Rahul Kapoor provides primary medical care with a focus on preventive medicine, early detection, and effective management of common health conditions.",
    fees: 700,
    address: {
      line1: "Vasant Kunj",
      line2: "New Delhi, Delhi",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Cluckins Nair",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS, MS",
    experience: "8 Years",
    about:
      "Dr. Sneha Nair specializes in women's healthcare, reproductive health, and preventive gynecology. She emphasizes patient education and personalized care during every consultation.",
    fees: 850,
    address: {
      line1: "Kakkanad",
      line2: "Kochi, Kerala",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Kavya Shah",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "6 Years",
    about:
      "Dr. Kavya Shah provides dermatological care for a wide range of skin and hair conditions. She focuses on personalized treatment plans and maintaining long-term skin health.",
    fees: 800,
    address: {
      line1: "C Scheme",
      line2: "Jaipur, Rajasthan",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Aditya Verma",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Aditya Verma provides comprehensive pediatric care with a focus on childhood development, preventive healthcare, vaccinations, and common pediatric conditions.",
    fees: 750,
    address: {
      line1: "Gomti Nagar",
      line2: "Lucknow, Uttar Pradesh",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Meera Krishnan",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "13 Years",
    about:
      "Dr. Meera Krishnan specializes in neurological care and focuses on detailed clinical evaluation and individualized treatment strategies for neurological disorders.",
    fees: 1300,
    address: {
      line1: "Adyar",
      line2: "Chennai, Tamil Nadu",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Siddharth Malhotra",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM",
    experience: "10 Years",
    about:
      "Dr. Siddharth Malhotra provides specialized neurological consultations and focuses on accurate diagnosis, patient education, and comprehensive management of nervous system conditions.",
    fees: 1200,
    address: {
      line1: "Sector 62",
      line2: "Noida, Uttar Pradesh",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Ishita Banerjee",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Ishita Banerjee is a general physician focused on preventive healthcare, routine medical consultations, and early identification of potential health concerns.",
    fees: 700,
    address: {
      line1: "Salt Lake",
      line2: "Kolkata, West Bengal",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Nikhil Joshi",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS, MS",
    experience: "11 Years",
    about:
      "Dr. Nikhil Joshi provides comprehensive gynecological care with a focus on reproductive health, preventive consultations, and personalized treatment planning.",
    fees: 900,
    address: {
      line1: "Vijay Nagar",
      line2: "Indore, Madhya Pradesh",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Aditi Kulkarni",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Aditi Kulkarni specializes in clinical dermatology and provides personalized care for common skin, hair, and nail conditions with a focus on effective long-term treatment.",
    fees: 850,
    address: {
      line1: "Shivaji Nagar",
      line2: "Pune, Maharashtra",
    },
  },
  {
    _id: "doc16",
    name: "Dr. Karan Bhatia",
    image: doc1,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD, DM",
    experience: "12 Years",
    about:
      "Dr. Karan Bhatia specializes in digestive and gastrointestinal disorders. He focuses on accurate diagnosis, preventive digestive healthcare, and individualized treatment strategies.",
    fees: 1100,
    address: {
      line1: "Powai",
      line2: "Mumbai, Maharashtra",
    },
  },
];
