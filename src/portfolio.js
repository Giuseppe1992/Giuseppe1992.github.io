
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

// TO RUN THE CONTAINER
//sudo docker build -t developerfolio:latest . 
//sudo docker run -itd -p 80:3000 developerfolio:latest 

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: " Giuseppe Di Lena",
  title: "Hi all, I'm Giuseppe",
  subTitle: emoji("Ph.D. | Customer Success Manager working at Microsoft Ireland"),
  resumeLink: "https://gdilena.blob.core.windows.net/portfolio/GiuseppeDiLenaCV.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true

};

// Social Media Links

const socialMediaLinks = {

  github: "https://github.com/Giuseppe1992",
  linkedin: "https://www.linkedin.com/in/giuseppe-di-lena-ph-d-81a3b8106/",
  stackoverflow: "https://stackoverflow.com/story/giuseppe1992",
  gmail: "giuseppedilena92@gmail.com",
  tryhackme: "https://tryhackme.com/p/Giuseppe1992",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/di.lena.giuseppe/",
  // medium: "https://medium.com/@saadpasta",
  // instagram: "https://www.instagram.com/giusepped1992/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM PASSIONATE ABOUT CLOUD COMPUTING, NETWORKING AND VIRTUALIZATION TECHNOLOGIES",
  skills: [
    emoji("⚡ Created an highly scalable network emulator for Linux clusters and cloud environments"),
    emoji("⚡ Developed resilience methodologies for NFV and SDN environment in 5G networks"),
    emoji("⚡ Created a network performance evaluation CLI compatible with Linux and Mac OSX, for the main cloud platforms")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fab fas fa-network-wired"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    //{
    //  skillName: "sql-database",
  //  fontAwesomeClassname: "fas fa-database"
    //}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Nice Sophia Antipolis, France",
      logo: require("./assets/images/Nice.png"),
      subHeader: "Ph.D. in Computer Science",
      duration: "March 2021",
      desc: "CIFRE in collaboration with Inria Sophia Antipolis and Orange Labs",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "University of L'Aquila, Italy",
      logo: require("./assets/images/Univaq.png"),
      subHeader: "Master's degree in Computer Science",
      duration: "March 2018",
      desc: "NEDAS: Network and Data Science",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "University of Nice Sophia Antipolis, France",
      logo: require("./assets/images/Nice.png"),
      subHeader: "Master's degree in Computer Science",
      duration: "August 2017",
      desc: "UBINET: Ubiquitous Networking and Computing",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "University of L'Aquila, Italy",
      logo: require("./assets/images/Univaq.png"),
      subHeader: "Bachelor's degree in Computer Science",
      duration: "September 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "80%"
    },
    {
      Stack: "Networking",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Customer Success Manager - Technical Pod",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo1.png"),
      date: "April 2021 - Now",
      desc: "Microsoft - Dublin (Ireland)",
      descBullets: [
        "Specialized in Networking, Linux and containerization technologies",
        "Managing a portfolio with 50+ customers in UK region",
        "Helping companies to follow the best practices, architecting secure and efficient Azure infrastructures."
        //"I will work mainly for the UK market"
      ]
    },
    {
      role: "Research Engineer - Ph.D. Candidate",
      company: "Orange Labs",
      companylogo: require("./assets/images/orangeLogo.jpg"),
      date: "April 2018 – March 2021",
      desc: "The objective is to develop a resilience methodology in an NFV and SDN environment linking theoretical results to industrial implementation.",
      descBullets: [
        "Created Distrinet, a distributed emulator for NFV and SDN networks",
        "Developed resilience methodologies for NFV and SDN environment in 5G networks, able to reduce resource consumptions by up to 40%",
        //"Created CloudMeasurement, a simple CLI orchestrator for network experiments (Iperf, Traceroute, etc.) for cloud environments"
      ]
    },
    {
      role: "Intern",
      company: "Inria",
      companylogo: require("./assets/images/inriaLogo.jpeg"),
      date: "Dec 2016 – Aug 2017",
      desc: "Internship experience during my Master's degree in Computer Science at University of Nice, Sophia Antipolis (France)",
      descBullets: [
        "Extend OpenStack to provide robust Service Function Chains (SFC)",
        "Overview classical Scheduling problem and present typical data center architectures",
        "Formalize a model for Scheduling with Communication Problem"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Giuseppe1992", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true", // Set true or false to show Contact profile using Github, defaults to false
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "OpenSource Projects",
  subtitle: emoji("I AM DEVELOPING COOL STUFF ⚡ THESE ARE SOME PROJECTS THAT I ACTIVELY MAINTAIN"),
  projects: [
    {
      image: require("./assets/images/Distrinet.png"),
      link: "https://distrinet-emu.github.io"

    },
    {
      image: require("./assets/images/cm.png"),
      link: "https://github.com/Giuseppe1992/CloudMeasurement/blob/master/README.md"
    }
  ],
  display: false // Set false to hide this section, defaults to true

};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Professional Certifications 🏆 "),
  subtitle:
    "Certifications and Courses that I have done!",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Solution Architect Expert",
      subtitle:
        "Individuals who advanced experience and knowledge across IT operations, including networking, virtualization, identity, security, business continuity, disaster recovery, data platform, budgeting, and governance.",
      image: require("./assets/images/azureArchitect.png"),
      footerLink: [
        {
          name: "Verification Link",
          url:
            "https://www.credly.com/badges/674a5e8c-9f3b-448a-b05a-6de10615d84c/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Solution Architect - Associate [SAA-C02]",
      subtitle:
        "Individuals who have one or more years of hands-on experience designing available, cost-efficient, fault-tolerant, and scalable distributed systems on Amazon Web Services.",
      image: require("./assets/images/aws_sol_arch.png"),
      footerLink: [
        {
          name: "Verification Link",
          url:
            "https://www.youracclaim.com/badges/71e2ce30-2162-487c-9e89-422c4cbeac70"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate [AZ-104]",
      subtitle:
        "Individuals who have deep understanding of each implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in Microsoft Azure.",
      image: require("./assets/images/azure_associate.png"),
      footerLink: [
        {
          name: "Verification Link",
          url:
            "https://www.credly.com/badges/b9057021-0440-41d2-a2df-efe68fbad1f4?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Hacking & Security: Advanced V6",
      subtitle: "This is an advanced and practical course. It covers in details all the methodologies used in the context of intrusions into corporate networks.",
      image: require("./assets/images/sysdream.png"),
      footerLink: [
        {name: "Verification Link", url: "https://portfolio-giuseppe-di-lena.s3.eu-central-1.amazonaws.com/sysdream.pdf"}
      ]
    },
  {
    title: "Microsoft Certified: Azure Fundamentals [AZ-900]",
    subtitle: "Individuals who have foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    image: require("./assets/images/azure_fundamentals.png"),
      footerLink: [
        {
          name: "Verification Link",
          url:
            "https://www.youracclaim.com/badges/8740608d-7f3a-403e-9923-f0ca086181aa"
        }
      ]
    },
    {
      title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals [SC-900]",
      subtitle: "Individuals who have foundational knowledge of with Microsoft Azure and Microsoft 365 and understand how Microsoft security, compliance, and identity solutions can span across different solution areas",
      image: require("./assets/images/SC900.png"),
        footerLink: [
          {
            name: "Verification Link",
            url:
              "https://www.credly.com/badges/f4f9b4df-395d-4375-87b5-95b9eedc2973"
          }
        ]
      }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Blogs Section

const blogSection = {

  title: "Publications",
  subtitle: "INTERNATIONAL PAPERS, JOURNALS AND DEMOS",
  blogs: [
    {
      url: "https://ieeexplore.ieee.org/document/9064126",
      title: "Bandwidth optimal Failure Recovery Scheme for Robust Programmable Networks.",
      description: "IEEE International Conference on Cloud Networking, Coimbra (CLOUDNET), Portugal, 2019"
    },
    {
      url: "https://ieeexplore.ieee.org/document/9064129",
      title: "Mininet on steroids: exploiting the cloud for Mininet performance.",
      description: "IEEE International Conference on Cloud Networking, Coimbra (CLOUDNET), Portugal, 2019"
    },
    {
      url: "https://hal.inria.fr/hal-02359695/document",
      title: "Demo Proposal - Distrinet: a Mininet implementation for the Cloud",
      description: "Proceedings of the 15th International Conference on emerging Networking EXperiments and Technologies (CONEXT), 2019"
    },
    {
      url: "https://hal.inria.fr/hal-02359695/document",
      title: "A Right Placement Makes a Happy Emulator: a Placement Module for Distributed SDN/NFV Emulation",
      description: "IEEE International Conference on Communications (ICC), 2021"
    },
    {
      url: "https://hal.inria.fr/hal-03000617/document",
      title: "Distrinet: a Mininet Implementation for the Cloud",
      description: "ACM SIGCOMM Computer Communication Review (CCR), 2021"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections


const talkSection = {
  title: "Publications",
  subtitle: emoji("SOME INTERNATIONAL PAPER AND DEMOS"),

  talks: [
    {
      title: "Bandwidth optimal Failure Recovery Scheme for Robust Programmable Networks.",
      subtitle: "IEEE International Conference on Cloud Networking, Coimbra, Portugal, 2019",
      slides_url: "https://ieeexplore.ieee.org/document/9064126",
      event_url: "https://cloudnet2019.ieee-cloudnet.org"
    },
    {
      title: "Demo Proposal - Distrinet: a Mininet implementation for the Cloud.",
      subtitle: "International Conference on emerging Networking EXperiments and Technologies, CoNEXT 2019, Florida, Orlando, USA, 2019",
      slides_url: "https://www.researchgate.net/publication/337575635_Demo_Proposal_-_Distrinet_a_Mininet_implementation_for_the_Cloud",
      event_url: "https://conferences2.sigcomm.org/co-next/2019/#!/home"
    },
    {
      title: "Short - Mininet on steroids: exploiting the cloud for Mininet performance.",
      subtitle: "IEEE International Conference on Cloud Networking, Coimbra, Portugal, 2019",
      slides_url: "https://ieeexplore.ieee.org/document/9064129",
      event_url: "https://cloudnet2019.ieee-cloudnet.org"
    }
    ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: false // Set true to display this section, defaults to false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  //subtitle: emoji("Discuss a project or just want to say hi? ☎️ +33 (0)786376988"),
  number: "+39-333 29 02 588",
  email_address: "giuseppedilena92@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
