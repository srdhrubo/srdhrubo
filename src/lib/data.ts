import { AcamdemicInfo, Paper } from "./type";

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
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    authors: [
      "Md Iqbal Hossain Shuvo",
      "Nazmus Sadat Mooaz",
      "Suchinto Roy Dhrubo",
      "Md Ashraful Islam",
    ],
    type: "Journal Article",
    status: "Under Review",
    images: [
      "/Publication/Published/Comaparative/1.jpg",
      "/Publication/Published/Comaparative/2.jpg",
      "/Publication/Published/Comaparative/3.png",
    ],
  },
  {
    id: 5,
    title:
      "A Comparative Analysis of Flap Position for Improved Aerodynamic Characteristics using NACA 4412",
    authors: [
      "Md Iqbal Hossain Shuvo",
      "Nazmus Sadat Mooaz",
      "Suchinto Roy Dhrubo",
      "Md Ashraful Islam",
    ],
    type: "Journal Article",
    status: "In Preparation",
    images: [
      "/Publication/Published/Comaparative/1.jpg",
      "/Publication/Published/Comaparative/2.jpg",
      "/Publication/Published/Comaparative/3.png",
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
