import aauMin from "@/assets/icons/aau.min.webp";
import aau from "@/assets/icons/aau.png";
import enseeihtMin from "@/assets/icons/enseeiht.min.ico";
import enseeiht from "@/assets/icons/enseeiht.jpg";
import theninehertz from "@/assets/icons/theninehertz.png";
import mobidev from "@/assets/icons/mobidev.jfif";

import quytech from "@/assets/icons/quytech.png";
import recombee from "@/assets/icons/recombee.png";
import samba from "@/assets/icons/samba.png";

const details = {
  name: {
    first: "Nikola",
    last: "Tesla",
    nickname: "nikola",
  },
  title: "Talented Software Developer",
  biography: `I'm a **Talented Developer** with a strong foundation in **Computer Science**. This background equipped me with a deep understanding of software development, especially web development.
    <br /><br />
    My skillset is quite diverse! I'm proficient in programming languages, frameworks like **JavaScript**, **Python**, **Flutter**, **Kotlin**, **Matlab**, **Shell/Bash**, **Docker**. But that's not all! I've also worked in **Machine learning**, **Deep Learning**,  and **Cybersecurity**, using tools like **TensorFlow**, **Keras**, and **PyTorch** to develop intelligent applications.
    <br /><br />
    Also I have rich experiences in using **AWS**, **Google Cloud**, **Microsoft Azure**, **Docker**, **Kubernetes**, **Ansible**.
    <br /><br />
    Of course, my career hasn't been all smooth sailing. Adapting to new technologies and meeting deadlines can be tough. But I conquered these challenges by continuously learning and collaborating with colleagues to share knowledge and resources. My strong communication and problem-solving skills have also been crucial in navigating complex projects and ensuring successful outcomes.
    <br /><br />
    Now, I'm looking for exciting opportunities to leverage my tech skills, particularly in **Bioinformatics** and **Cloud Computing** and **Robotics**. I'm eager to contribute to innovative projects that push my abilities and help me grow professionally. In the past, I've led a team in developing several AI applications that boosted user engagement and completed several projects that tackled real-world problems.`,
  education: [
    {
      school: "University of Belgrade",
      url: "https://www.bg.ac.rs",
      icon: enseeiht,
      iconMin: enseeihtMin,
      location: "Studentski trg 1, Beograd, Serbia",
      degree: "Master's degree in engineering",
      major: "Computer Science and Applied Mathematics",
      start: "Sep 2020",
      end: "May 2023",
    },
    {
      school: "University of Novi Sad",
      url: "https://www.uns.ac.rs/",
      icon: aau,
      iconMin: aauMin,
      location: "Novi Sad 21000, Serbia",
      degree: "Master's degree in computer science",
      major: "Computer Graphics and Vision",
      start: "Sep 2022",
      end: "Mar 2023",
    },
    {
      school: "Gimnazija Jovan Jovanović Zmaj",
      url: "https://jjzmaj.edu.rs/",
      location: "Zlatne grede 4, Novi Sad, Serbia",
      degree: "IBDP",
      major: "Mathematics and Physics",
      start: "Sep 2018",
      end: "Jul 2020",
    },
  ],
  skills: [
    "Linux",
    "Kotlin",
    "Jira",
    "Javascript",
    "Typescript",
    "React",
    "Python",
    "C++",
    "Webpack",
    "MySQL",
    "AWS",
    "Azure",
    "Github",
    "Laravel",
    "HTML5",
    "MongoDB",
    "NodeJS",
    "Firebase",
    "Flutter",
    "Nginx",
    "Vue",
    "Sass",
    "Django",
    "C#",
    "PyTorch",
    "Tensorflow",
    "n8n",
  ],
  experience: [
    {
      company: "Recombee",
      url: "https://www.recombee.com/",
      icon: recombee,
      iconMin: recombee,
      location: "Prague, Czech Republic",
      contract: "Full-time",
      position: "Frontend Developer, AI Integration",
      start: "Jan 2025",
      end: "Mar 2025",
      description: [
        "Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform.",
        "Built the frontend with React and integrated a collaborative filtering model using Python (scikit-learn), served via a REST API.",
        "Implemented real-time recommendations and A/B testing to optimize user engagement and retention.",
      ],
      skills: [
        "React",
        "Python",
        "scikit-learn",
        "REST API",
        "Collaborative Filtering",
        "A/B Testing",
        "Data Analysis",
      ],
    },
    {
      company: "Quytech",
      url: "https://www.quytech.com/",
      icon: quytech,
      iconMin: quytech,
      location: "Gurugram, India",
      contract: "Full-time",
      position: "Frontend Developer, AI/NLP Engineer",
      start: "Oct 2024",
      end: "Dec 2024",
      description: [
        "Designed and deployed an AI-powered chatbot using Dialogflow and Node.js, integrated into a React-based web application.",
        "Enabled natural language understanding for handling FAQs, guiding users, and providing 24/7 automated support.",
        "Optimized conversation flows based on user feedback and analytics, improving customer satisfaction and reducing support workload.",
      ],
      skills: [
        "React",
        "Node.js",
        "Dilogflow",
        "NLP",
        "REST API",
        "UX Optimization",
      ],
    },
    {
      company: "Mobidev",
      url: "https://mobidev.biz/",
      icon: mobidev,
      iconMin: mobidev,
      location: "Atlanta, USA",
      contract: "Full-time",
      position: "Full-stack engineer",
      start: "Jan 2024",
      end: "Sep 2024",
      description: [
        "Built a web-based image editor with AI features such as background removal, style transfer, and auto-enhancement",
        "Utilized TensorFlow.js for on-device inference, ensuring privacy and fast performance.",
        "Developed an intuitive UI for real-time editing and batch processing of images.",
      ],
      skills: [
        "React",
        "Tensorflow",
        "WebGL",
        "GraphQL",
        "Image Processing",
        "Figma",
      ],
    },
    {
      company: "Theninehertz",
      url: "https://www.kanop.io/",
      icon: theninehertz,
      iconMin: theninehertz,
      location: "Jaipur, India",
      contract: "Freelance & Internship",
      position: "Full-stack Developer",
      start: "Jul 2023",
      end: "Oct 2023",
      description: [
        "Engineered a scalable backend with Laravel, following MVC architecture for maintainability and modularity.",
        "Built RESTful APIs for product, order, and user management, and integrated secure payment gateways.",
        "Utilized Eloquent ORM for efficient database operations and implemented authentication and authorization.",
      ],
      skills: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST API",
        "Eloquent ORM",
        "Payment Integration",
      ],
    },
    {
      company: "Samba",
      url: "https://fresqueduclimat.org/",
      icon: samba,
      iconMin: samba,
      location: "California, USA",
      contract: "Freelance",
      position: "Frontend Developer",
      start: "Mar 2023",
      end: "Jun 2023",
      description: [
        "Constructed a secure and responsive healthcare management portal using React and JWT-based authentication.",
        "Leveraged React hooks and context for global state management and dynamic UI updates.",
        "Consumed RESTful APIs for real-time appointment scheduling and patient record handling.",
      ],
      skills: ["React", "JWT", "Responsive Design"],
    },
  ],
  languages: [
    {
      name: "Serbian",
      level: "C2",
      native: true,
    },
    {
      name: "English",
      level: "C1",
    },
    {
      name: "Russian",
      level: "B1",
    },
  ],
  contact: {
    location: "Nobi Sad, Serbia",
    email: " mythofmidas@gmail.com",
    phone: "+33 7 83 79 29 25",
    website: "https://www.bsodium.fr",
    linkedin: "https://www.linkedin.com/in/bsodium/",
    github: "https://www.github.com/bsodium",
    researchgate: "https://www.researchgate.net/profile/Elliot-Negrel-Jerzy",
    gitlab: "https://www.gitlab.com/bsodium",
    deviantart: "https://www.deviantart.com/bsodium",
  },
};

export default details;
