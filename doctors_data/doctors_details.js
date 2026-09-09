const doctors = [

  {
    _id: "doc1",
    name: "Dr. Shailaja Sabnis",
    email: "shailaja.sabnis@rioshealthcare.com",
    password: "Shailaja@123",
    speciality: "General physician",
    degree: "MBBS, MD - General Medicine",
    experience: "34 Years",
    about:
      "Dr. Shailaja Sabnis is a general physician and internal medicine specialist with extensive experience in general healthcare, infectious diseases, allergies, and viral fever management.",
    fees: 2200,
    address: {
      line1: "Bandra West",
      line2: "Mumbai, Maharashtra",
    },
  },

  {
    _id: "doc2",
    name: "Dr. P Sreenivasa Rao",
    email: "p.sreenivasa.rao@rioshealthcare.com",
    password: "Sreenivasa@123",
    speciality: "Gynecologist",
    degree: "MBBS, MD, DNB, FICRS",
    experience: "29+ Years",
    about:
      "Dr. P Sreenivasa Rao is a consultant in obstetrics, gynecology and gynecologic oncology with experience in high-risk pregnancy care, complex gynecology and minimally invasive procedures.",
    fees: 1000,
    address: {
      line1: "Indiranagar",
      line2: "Bengaluru, Karnataka",
    },
  },

  {
    _id: "doc3",
    name: "Dr. Meeta Desai",
    email: "meeta.desai@rioshealthcare.com",
    password: "Meeta@123",
    speciality: "Dermatologist",
    degree: "MBBS, MD - Dermatology",
    experience: "25 Years",
    about:
      "Dr. Meeta Desai is a dermatologist, cosmetologist and trichologist with extensive experience in skin, hair and cosmetic dermatology.",
    fees: 1100,
    address: {
      line1: "Vastrapur",
      line2: "Ahmedabad, Gujarat",
    },
  },

  {
    _id: "doc4",
    name: "Dr. Jitendra Singh",
    email: "jitendra.singh@rioshealthcare.com",
    password: "Jitendra@123",
    speciality: "Pediatrician",
    degree: "MBBS, MD - Pediatrics",
    experience: "12 Years",
    about:
      "Dr. Jitendra Singh is a pediatrician and neonatologist focused on newborn and child healthcare, including high-risk newborns, preterm babies and complex pediatric conditions.",
    fees: 600,
    address: {
      line1: "Gomtinagar",
      line2: "Lucknow, Uttar Pradesh",
    },
  },

  {
    _id: "doc5",
    name: "Dr. Suresh Babu P",
    email: "suresh.babu@rioshealthcare.com",
    password: "Suresh@123",
    speciality: "Neurologist",
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "18 Years",
    about:
      "Dr. Suresh Babu P is a senior consultant neurologist with expertise in neurological conditions including epilepsy, headache, dementia, stroke and movement disorders.",
    fees: 1000,
    address: {
      line1: "Gachibowli",
      line2: "Hyderabad, Telangana",
    },
  },

  {
    _id: "doc6",
    name: "Dr. Preetha P",
    email: "preetha.p@rioshealthcare.com",
    password: "Preetha@123",
    speciality: "Neurologist",
    degree: "MBBS, MD - General Medicine, DM - Neurology",
    experience: "19 Years",
    about:
      "Dr. Preetha P is a neurologist with experience in neurological care and treatment of conditions involving the brain, nerves and nervous system.",
    fees: 1000,
    address: {
      line1: "Anna Nagar",
      line2: "Chennai, Tamil Nadu",
    },
  },

  {
    _id: "doc7",
    name: "Dr. Aseem Dhall",
    email: "aseem.dhall@rioshealthcare.com",
    password: "Aseem@123",
    speciality: "General physician",
    degree: "MBBS",
    experience: "34 Years",
    about:
      "Dr. Aseem Dhall is a general physician providing primary medical care and management of common medical conditions.",
    fees: 1200,
    address: {
      line1: "Vasant Kunj",
      line2: "Delhi",
    },
  },

  {
    _id: "doc8",
    name: "Dr. Mereena Varghese",
    email: "mereena.varghese@rioshealthcare.com",
    password: "Mereena@123",
    speciality: "Gynecologist",
    degree: "Gynecologist / Obstetrician",
    experience: "33 Years",
    about:
      "Dr. Mereena Varghese is an experienced gynecologist and obstetrician providing women's healthcare and obstetric and gynecological care.",
    fees: 750,
    address: {
      line1: "Vennala",
      line2: "Ernakulam, Kerala",
    },
  },

  {
    _id: "doc9",
    name: "Dr. Vishal Chugh",
    email: "vishal.chugh@rioshealthcare.com",
    password: "Vishal@123",
    speciality: "Dermatologist",
    degree: "MBBS, MD - Dermatology, Venereology & Leprosy",
    experience: "19 Years",
    about:
      "Dr. Vishal Chugh is a board-certified dermatologist with experience in dermatology, dermatosurgery, hair restoration and cosmetic skin care.",
    fees: 600,
    address: {
      line1: "C Scheme",
      line2: "Jaipur, Rajasthan",
    },
  },

  {
    _id: "doc10",
    name: "Dr. Tarun Anand",
    email: "tarun.anand@rioshealthcare.com",
    password: "Tarun@123",
    speciality: "Pediatrician",
    degree: "MBBS, MD - Pediatrics, Fellowship in Neonatology",
    experience: "11 Years",
    about:
      "Dr. Tarun Anand is a pediatrician and neonatologist providing pediatric and neonatal care, including child health, infections, vaccinations and growth monitoring.",
    fees: 600,
    address: {
      line1: "Gomtinagar",
      line2: "Lucknow, Uttar Pradesh",
    },
  },

  {
    _id: "doc11",
    name: "Dr. V.Soundappan",
    email: "v.soundappan@rioshealthcare.com",
    password: "Soundappan@123",
    speciality: "Neurologist",
    degree: "MBBS, MS - General Surgery, MCh - Neuro Surgery",
    experience: "46 Years",
    about:
      "Dr. V.Soundappan is a neurologist and neurosurgeon with extensive experience in brain and spine care, neurological disorders and neurosurgical procedures.",
    fees: 900,
    address: {
      line1: "Adyar",
      line2: "Chennai, Tamil Nadu",
    },
  },

  {
    _id: "doc12",
    name: "Dr. Sonia Lal Gupta",
    email: "sonia.gupta@rioshealthcare.com",
    password: "Sonia@123",
    speciality: "Neurologist",
    degree: "MBBS, Diplomate of American Board of Psychiatry and Neurology",
    experience: "21 Years",
    about:
      "Dr. Sonia Lal Gupta is a board-certified neurologist with expertise in headache medicine, vascular neurology, stroke care and general neurological conditions.",
    fees: 1500,
    address: {
      line1: "Sector 11",
      line2: "Noida, Uttar Pradesh",
    },
  },

  {
    _id: "doc13",
    name: "Dr. Soumik Debnath",
    email: "soumik.debnath@rioshealthcare.com",
    password: "Soumik@123",
    speciality: "General physician",
    degree: "MD - Physician",
    experience: "16 Years",
    about:
      "Dr. Soumik Debnath is a general physician with special interest in diabetology and experience in diabetes management, hypertension, health checkups and common infections.",
    fees: 700,
    address: {
      line1: "Salt Lake",
      line2: "Kolkata, West Bengal",
    },
  },

  {
    _id: "doc14",
    name: "Dr. Astha Jain Mathur",
    email: "astha.jain.mathur@rioshealthcare.com",
    password: "Astha@123",
    speciality: "Gynecologist",
    degree: "MBBS, DGO",
    experience: "20 Years",
    about:
      "Dr. Astha Jain Mathur is an obstetrician and gynecologist with experience in maternal care, gynecological laparoscopy, fibroid management and women's healthcare.",
    fees: 750,
    address: {
      line1: "Vijay Nagar",
      line2: "Indore, Madhya Pradesh",
    },
  },

  {
    _id: "doc15",
    name: "Dr. Vijay Nagdev",
    email: "vijay.nagdev@rioshealthcare.com",
    password: "Vijay@123",
    speciality: "Dermatologist",
    degree: "MBBS, DVD",
    experience: "16 Years",
    about:
      "Dr. Vijay Nagdev is a dermatologist, dermatosurgeon and hair transplant specialist with experience in skin, hair and cosmetic dermatology.",
    fees: 1200,
    address: {
      line1: "FC Road",
      line2: "Pune, Maharashtra",
    },
  },

  {
    _id: "doc16",
    name: "Dr. Purushottam Vashistha",
    email: "purushottam.vashistha@rioshealthcare.com",
    password: "Purushottam@123",
    speciality: "Gastroenterologist",
    degree: "MBBS, DM - Gastroenterology",
    experience: "27 Years",
    about:
      "Dr. Purushottam Vashistha is a gastroenterologist and hepatologist with experience in digestive health, gastroenterology procedures and liver-related care.",
    fees: 2500,
    address: {
      line1: "Powai",
      line2: "Mumbai, Maharashtra",
    },
  },

]

export default doctors