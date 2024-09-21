import {
  AcamdemicInfo,
  DesignPortfolioItem,
  Paper,
  ProfessionalExperience,
  Reference,
  ResearchExperience,
} from "./type";

export const paperInformation: Paper[] = [
  {
    id: 1,
    publicationDate: "2024-06-10",
    venue: "SSRN",
    title:
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4859496",
    authors: [
      "Md Iqbal Hossain Shuvo",
      "Nazmus Sadat Mooaz",
      "Suchinto Roy Dhrubo",
      "Md Ashraful Islam",
    ],
    type: "Conference Proceedings",
    status: "Published",
    images: [
      "/Publication/Published/Comaparative/1.jpg",
      "/Publication/Published/Comaparative/2.jpg",
      "/Publication/Published/Comaparative/3.png",
    ],
  },
  {
    publicationDate: "2022-02-26",
    venue:
      "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    title:
      "A Wearable Hearing Protection Device for Vehicle Drivers to Mitigate the Impact of Sound Pollution for Noisy Places in Bangladesh",
    link: "https://ieeexplore.ieee.org/abstract/document/9775878",
    id: 2,
    authors: [
      "Joy James Costa",
      "SM Toha Al Kadir",
      "Suchinto Roy Dhrubo",
      "Md Ferdous Wahid",
      "Zubair Ahmed Ratan",
      "Dipta Roy",
    ],
    type: "Conference Proceedings",
    status: "Published",
    images: [
      "/Publication/Published/Wearable/1.png",
      "/Publication/Published/Wearable/2.png",
    ],
  },
  {
    id: 3,
    publicationDate: "2023-12-07",
    venue:
      "2023 6th International Conference on Electrical Information and Communication Technology (EICT)",
    title:
      "Transforming UAV Design: Coandă-Based Lift Generation for Enhanced Aerial Performance",
    link: "https://ieeexplore.ieee.org/abstract/document/10427637",
    authors: [
      "Nazmus Sadat Mooaz",
      "Md Miraj Arefin",
      "Suchinto Roy Dhrubo",
      "Ashfaq Ahmed",
    ],
    type: "Conference Proceedings",
    status: "Published",
    images: [
      "/Publication/Published/Transforming UAV/1.jpg",
      "/Publication/Published/Transforming UAV/2.jpg",
    ],
  },
  {
    id: 4,
    title:
      "Comparison of Different 3D Printed Materials in Various Process Parameters",
    authors: [
      "Md. Mahbub Morshed Haque",
      "Suchinto Roy Dhrubo",
      "Al-Fida Zubayer Pranto",
      "Akash Ahmed",
      "Md. Miraj Arefin",
      "Md. Shariful Islam",
    ],
    type: "Journal Article",
    status: "Under Review",
    images: [
      "/research_experience/additive_manufacturing/1.jpg",
      "/research_experience/additive_manufacturing/2.jpg",
      "/research_experience/additive_manufacturing/3.jpg",
      "/research_experience/additive_manufacturing/4.jpg",
      "/research_experience/additive_manufacturing/5.jpg",
      "/research_experience/additive_manufacturing/6.jpg",
    ],
  },
  {
    id: 5,
    title:
      "Fatigue, Impact and Creep Profile Comparison of FDM and SLA Printed Materials",
    authors: [
      "Suchinto Roy Dhrubo",
      "Md. Mahbub Morshed Haque",
      "Akash Ahmed",
      "Md. Miraj Arefin",
      "Al-Fida Zubayer Pranto",
      "Md. Shariful Islam",
    ],
    type: "Journal Article",
    status: "In Preparation",
    images: [
      "/Publication/pending/fatigue/1.jpg",
      "/Publication/pending/fatigue/2.jpg",
      "/Publication/pending/fatigue/3.jpg",
      "/Publication/pending/fatigue/4.jpg",
      "/Publication/pending/fatigue/5.jpg",
      "/Publication/pending/fatigue/6.jpg",
    ],
  },
];

export const academicInfo: AcamdemicInfo[] = [
  {
    institution: "Khulna University of Engineering & Technology (KUET)",
    location: {
      city: "Khulna",
      postalCode: "9203",
      country: "Bangladesh",
    },
    started: "2018-01-25",
    completed: "2023-04-05",
    degree: [
      {
        obtainedDegree: "Bachelor of Science in Mechanical Engineering",
        gradeObtained: 3.36,
        maxGrade: 4,
        gradeName: "CGPA",
        position: 41,
        totalPupil: 140,
        marksPercentage: 71.2,
      },
    ],
    reminisce: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia consectetur numquam! Dolor quisquam dolorum totam, accusantium animi voluptates illo reprehenderit impedit aspernatur veritatis soluta tempora labore. Dicta, porro pariatur.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, libero eos illo est sunt dicta? Rerum tempora, repellendus deleniti, omnis molestias doloribus quae ipsa labore non totam recusandae, exercitationem ipsum!`,
    cover: "/kuet.jpg",
    logo: "/kuet_logo.png",
    courseOutline: "/download/course_outline/bsc",
  },
  {
    institution: "Saint Joseph Higher Secondary School",
    location: {
      city: "Dhaka",
      postalCode: "1207",
      country: "Bangladesh",
    },
    started: "2015-07-01",
    completed: "2017-06-30",
    degree: [
      {
        obtainedDegree: "Higher Secondary Certificate (HSC)",
        gradeObtained: 5,
        maxGrade: 5,
        gradeName: "GPA",
      },
    ],
    reminisce: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia consectetur numquam! Dolor quisquam dolorum totam, accusantium animi voluptates illo reprehenderit impedit aspernatur veritatis soluta tempora labore. Dicta, porro pariatur.
Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    cover: "/St._Joseph_Higher_Secondary_School.jpg",
    logo: "/St._Joseph_Higher_Secondary_School_logo.png",
  },
  {
    institution: "Hasan Ali Government High School",
    location: {
      city: "Chandpur",
      postalCode: "3600",
      country: "Bangladesh",
    },
    started: "2003-01-01",
    completed: "2015-06-30",
    degree: [
      {
        obtainedDegree: "Secondary School Certificate (SSC)",
        gradeObtained: 5,
        maxGrade: 5,
        gradeName: "GPA",
      },
    ],
    reminisce: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia consectetur numquam! Dolor quisquam dolorum totam, accusantium animi voluptates illo reprehenderit impedit aspernatur veritatis soluta tempora labore. Dicta, porro pariatur.
Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    cover: "/hasan_ali_govt.jpeg",
    logo: "/hasan_ali_govt_logo.png",
  },
];

export const researchExperiences: ResearchExperience[] = [
  {
    title: "Additive Manufacturing and Comparison of Mechanical Behaviour",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    group: "Independent Research Group",
    supervisor: "Dr. Md. Shariful Islam",
    startDate: "August 2023",
    endDate: "Present",
    type: "research",
    images: [
      "/research_experience/additive_manufacturing/1.jpg",
      "/research_experience/additive_manufacturing/2.jpg",
      "/research_experience/additive_manufacturing/3.jpg",
      "/research_experience/additive_manufacturing/4.jpg",
      "/research_experience/additive_manufacturing/5.jpg",
      "/research_experience/additive_manufacturing/6.jpg",
    ],
    description: [
      "Investigated the impact of different process parameters and materials on mechanical properties of 3D-printed components using Fused Deposition Modelling (FDM) & Stereolithography (SLA).",
      "Examined the effect of process parameters and materials (PLA, ABS, PLA-CF, PETG, PAHT-CF) on 3D-printed components using tensile, compressive, and bending tests.",
    ],
  },
  {
    title: "Mars Rover",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    group: "KUET Mars Rover (Team Durbar)",
    supervisor: "Dr. Md. Helal-An-Nahiyan",
    startDate: "January 2019",
    endDate: "April 2023",
    type: "project",
    images: [
      "/research_experience/mars_rover/1.jpg",
      "/research_experience/mars_rover/2.JPG",
      "/research_experience/mars_rover/3.JPG",
      "/research_experience/mars_rover/4.JPG",
      "/research_experience/mars_rover/5.JPG",
      "/research_experience/mars_rover/6.JPG",
      "/research_experience/mars_rover/7.JPG",
      "/research_experience/mars_rover/8.JPG",
    ],
    description: [
      "Researched, designed, and developed a Mars rover using the rocker-bogie mechanism, including a manipulator arm capable of lifting over 5 kg.",
      "Led the team, coordinated with sub-teams, and participated in international rover challenges.",
    ],
    competition: "Mars Rover Challenge",
  },
  {
    title: "Undergraduate Thesis",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    supervisor: "Dr. Md. Ashraful Islam",
    startDate: "March 2022",
    endDate: "March 2023",
    type: "thesis",
    thesisTitle:
      "A Numerical Study of Aerodynamic Performance of Corrugated Airfoil of a Dragonfly Wing Section",
    images: [
      "/research_experience/undergrad_thesis/1.png",
      "/research_experience/undergrad_thesis/2.gif",
    ],
    description: [
      "Conducted a numerical study on the aerodynamic performance of dragonfly-inspired corrugated airfoils, using a wide range of flapping frequencies, to evaluate lift and drag.",
      "Results show superior lift-to-drag ratios compared to conventional airfoils, and higher lift-to-drag ratios in higher frequencies.",
    ],
  },
  {
    title: "Undergraduate Project",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    supervisor: "Dr. Md. Shariful Islam",
    startDate: "February 2020",
    endDate: "March 2022",
    type: "project",
    projectTitle:
      "Construction & Performance Test of Electromagnetic Braking System",
    images: [
      "/research_experience/undergrad_project/1.jpg",
      "/research_experience/undergrad_project/2.jpg",
      "/research_experience/undergrad_project/3.jpg",
    ],
    description: [
      "Explored the potential of an Electromagnetic Braking System, using electromagnetism to stop vehicles, highlighting its advantages and current limitations.",
      "Emphasized the need for further research to overcome challenges and align with the shift toward electric-powered vehicles in the automobile industry.",
    ],
  },
  {
    title: "Drive Assisting Spectacle",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    startDate: "June 2019",
    endDate: "July 2019",
    type: "project",
    images: ["/research_experience/esho_robot_banai/spectacle.JPG"],
    description: [
      "An spectacle we made to observe the condition of driver's eyes. On case sleeping condition were detected it  was able to slowly decrease the speed of car (in our case a simple toy car) and guide to a complete stop with audio warning to driver.",
    ],
    competition: "Esho Robot Banai (TV Reality Show)",
  },

  {
    title: "Waste Collecting Robot",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    startDate: "April 2019",
    endDate: "May 2019",
    type: "project",
    images: ["/research_experience/esho_robot_banai/waste_collector.JPG"],
    description: [
      "A simple robot capable of removing floating waste in pond or lake. It's belt allows it to take in waste t it's free waste storage space. According to initial concept we wanted to built a bot which is easy to construct and easily maneuverable.",
    ],
    competition: "Esho Robot Banai (TV Reality Show)",
  },

  {
    title: "Underwater Searchbot",
    institution:
      "Khulna University of Engineering & Technology (KUET), Khulna-9203",
    startDate: "February 2019",
    endDate: "March 2019",
    type: "project",
    images: ["/research_experience/esho_robot_banai/sub.JPG"],
    description: [
      "This robot were built to have a look in underwater. Though it wasn't wireless but wired connection helped us to gain uninterrupted signal transfer to robot from the controller. Using two pairs of motor and propeller set we were able to control depth and planar movements of it in underwater. It was equipped with two cameras fitted inside the robot whose video feed were directly sent to controlling computer.",
    ],
    competition: "Esho Robot Banai (TV Reality Show)",
  },
];

export const experiences: ProfessionalExperience[] = [
  {
    company: "Synovia Pharma PLC.",
    formerName: "Sanofi Bangladesh Limited",
    designation: "Executive",
    startDate: "December 2023",
    responsibilities: [
      "Supervised the Fire Hydrant Pipeline Installation Project and managed ETP and STP operations.",
      "Ensured compliance with GMP and +QDCI regulatory standards.",
      "Implemented HSE protocols per BNBC Fire and Electrical Codes, PPE Matrix, DoE Laws-Acts, and DPHE Guidelines.",
      "Created Site Plan, Zone Layout, Machine Layout, and Man-Material-Waste Flow diagrams using AutoCAD.",
    ],
  },
];

export const iframeVideos = [
  "https://www.youtube.com/embed/DxiYWCe7TLI?si=YT8crkoHQ3SxbKyZ",
  "https://www.youtube.com/embed/ML1VA-ceKm8?si=Rl9j48nhUpzdBQ7H",
  "https://www.youtube.com/embed/MtGT4qaSBn8?si=RHzaR016wVNLX56K",
];

export const references: Reference[] = [
  {
    name: "Dr. Md. Ashraful Islam",
    title: "Professor",
    department: "Department of Mechanical Engineering",
    institution: "KUET",
    email: "md.islam@me.kuet.ac.bd",
    phone: "+8801786285393",
  },
  {
    name: "Dr. Md. Helal-An-Nahiyan",
    title: "Professor",
    department: "Department of Mechanical Engineering",
    institution: "KUET",
    email: "nahiyan@me.kuet.ac.bd",
    phone: "+8801781587733",
  },
];

export const designPortfolioItems: DesignPortfolioItem[] = [
  {
    id: 1,
    name: "Scientific Calculator",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/scientific_calculator/1.jpg",
      "/design_portfolio/scientific_calculator/2.jpg",
      "/design_portfolio/scientific_calculator/3.jpg",
      "/design_portfolio/scientific_calculator/4.jpg",
    ],
  },
  {
    id: 2,
    name: "Sunglass",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/sunglass/1.jpg",
      "/design_portfolio/sunglass/2.jpg",
    ],
  },
  {
    id: 3,
    name: "Speed Boat",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/speed_boat/1.jpg",
      "/design_portfolio/speed_boat/2.jpg",
    ],
  },
  {
    id: 4,
    name: "Drone",
    platform: ["Solidworks", "Keyshot"],
    images: ["/design_portfolio/drone/1.jpg", "/design_portfolio/drone/2.jpg"],
  },
  {
    id: 5,
    name: "Arduino Mega 2560",
    platform: ["Solidworks", "Keyshot"],
    images: ["/design_portfolio/arduino_mega_2560/1.jpg"],
  },
  {
    id: 6,
    name: "USB Type C Charger",
    platform: ["Solidworks", "Keyshot"],
    images: ["/design_portfolio/type_c_usb_charger/1.jpg"],
  },
  {
    id: 7,
    name: "L298N Stepper Motor Driver",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/L298N_stepper_motor_driver/1.jpg",
      "/design_portfolio/L298N_stepper_motor_driver/2.jpg",
    ],
  },
  {
    id: 8,
    name: "Mini Speaker",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/mini_speaker/1.jpg",
      "/design_portfolio/mini_speaker/2.jpg",
    ],
  },
  {
    id: 9,
    name: "Harmonium",
    platform: ["Autocad", "Keyshot"],
    images: ["/design_portfolio/harmonium/1.jpg"],
  },
  {
    id: 10,
    name: "Mouth Organ",
    platform: ["Autocad", "Keyshot"],
    images: ["/design_portfolio/mouth_organ/1.jpg"],
  },
  {
    id: 11,
    name: "Concept VTOL Aircraft",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/unmanned_aerial_vehicle/1.png",
      "/design_portfolio/unmanned_aerial_vehicle/2.png",
    ],
  },
  {
    id: 12,
    name: "Hearing Aid for Noise Cancellation",
    platform: ["Solidworks"],
    images: [
      "/design_portfolio/hearing_aid_for_noise_cancellation/1.JPG",
      "/design_portfolio/hearing_aid_for_noise_cancellation/2.JPG",
    ],
  },
  {
    id: 13,
    name: "Watery Land Floating Dust Collector",
    platform: ["Solidworks"],
    images: [
      "/design_portfolio/watery_land_floating_dust_collector/1.JPG",
      "/design_portfolio/watery_land_floating_dust_collector/2.JPG",
    ],
  },
  {
    id: 14,
    name: "Material Transport Mechanism",
    platform: ["Solidworks"],
    images: [
      "/design_portfolio/material_transport_mechanism/1.JPG",
      "/design_portfolio/material_transport_mechanism/2.JPG",
    ],
  },
  {
    id: 15,
    name: "Magnetic Brake",
    platform: ["Solidworks"],
    images: ["/research_experience/undergrad_project/3.jpg"],
  },
  {
    id: 16,
    name: "Plastic Mold",
    platform: ["Solidworks"],
    images: [
      "/design_portfolio/plastic_mold/1.jpg",
      "/design_portfolio/plastic_mold/2.jpg",
    ],
  },
  {
    id: 17,
    name: "Mistubishi Pajero",
    platform: ["Solidworks"],
    images: ["/design_portfolio/car/1.JPG", "/design_portfolio/car/2.JPG"],
  },
  {
    id: 18,
    name: "Mars Rover Team Project",
    platform: ["Solidworks", "Keyshot"],
    images: [
      "/design_portfolio/mars_rover/1.jpg",
      "/design_portfolio/mars_rover/2.jpg",
      "/design_portfolio/mars_rover/3.jpg",
      "/design_portfolio/mars_rover/4.jpg",
      "/design_portfolio/mars_rover/5.jpg",
      "/design_portfolio/mars_rover/6.jpg",
      "/design_portfolio/mars_rover/7.jpg",
      "/design_portfolio/mars_rover/8.jpg",
      "/design_portfolio/mars_rover/9.jpg",
      "/design_portfolio/mars_rover/10.jpg",
      "/design_portfolio/mars_rover/11.jpg",
      "/design_portfolio/mars_rover/12.jpg",
      "/design_portfolio/mars_rover/13.jpg",
      "/design_portfolio/mars_rover/14.JPG",
      "/design_portfolio/mars_rover/15.JPG",
      "/design_portfolio/mars_rover/16.JPG",
      "/design_portfolio/mars_rover/17.jpg",
      "/design_portfolio/mars_rover/18.jpg",
      "/design_portfolio/mars_rover/19.jpg",
      "/design_portfolio/mars_rover/20.jpg",
      "/design_portfolio/mars_rover/21.jpg",
      "/design_portfolio/mars_rover/22.jpg",
    ],
  },
];
