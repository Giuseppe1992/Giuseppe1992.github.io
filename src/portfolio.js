
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Giuseppe Di Lena",
  title: "Hi all, I'm Giuseppe",
  subTitle: emoji("A Research Engineer - Ph.D. Candidate 🚀 Working at Orange Labs."),
  resumeLink: "https://portfolio-giuseppe-di-lena.s3.eu-central-1.amazonaws.com/Giuseppe+Di+Lena+CV2.pdf"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Giuseppe1992",
  linkedin: "https://www.linkedin.com/in/giuseppe-di-lena-81a3b8106/",
  stackoverflow: "https://stackoverflow.com/story/giuseppe1992",
  gmail: "giuseppedilena92@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/di.lena.giuseppe/",
  //medium: "https://medium.com/@saadpasta",
  instagram: "https://www.instagram.com/giusepped1992/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM PASSIONATE ABOUT CLOUD COMPUTING, NETWORKING AND VIRTUALIZATION TECHNOLOGIES",
  skills: [
    emoji("⚡ Created an highly scalable network emulator for Linux clusters and cloud environments"),
    emoji("⚡ Developed resilience methodologies for NFV and SDN environment in 5G networks"),
    emoji("⚡ Created a network performance evaluation CLI compatible with Linux and Mac OSX, for the main cloud platforms")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google-drive"
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
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Engineer - Ph.D. Candidate",
      company: "Orange Labs",
      companylogo: require("./assets/images/orangeLogo.jpg"),
      date: "April 2018 – March 2021",
      desc: "The objective is to develop a resilience methodology in an NFV and SDN environment linking theoretical results to industrial implementation.",
      descBullets: [
        "Created Distrinet, a distributed emulator for NFV and SDN networks",
        "Developed resilience methodologies for NFV and SDN environment in 5G networks, able to reduce resource consumptions by up to 40%",
        "Created CloudMeasurement, a simple CLI orchestrator for network experiments (Iperf, Traceroute, etc.) for cloud environments"
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
        "Overview classical Scheduling problem and present typical data center architectures. Formalize a model for Scheduling with Communication Problem"
      ]
    },
    {
      role: "Intern",
      company: "Intecs",
      companylogo: require("./assets/images/intecsLogo.png"),
      date: "Aug 2014 – Sep 2014",
      desc: "First internship experience during my Bachelor's degree in Computer Science at University of L'Aquila (Italy)",
      descBullets: [
        "Study and installation of a cloud infrastructure with OpenStack",
        "Configuration of OpenStack in a testing environment with VirtualBox and Ubuntu"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Giuseppe1992", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

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
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Professional Certifications 🏆 "),
  subtitle: "Certifications and Courses that I have done!",

  achivementsCards: [
    {
      title: "AWS Certified Solution Architect - Associate [SAA-C02]",
      subtitle: "Individuals who have one or more years of hands-on experience designing available, cost-efficient, fault-tolerant, and scalable distributed systems on Amazon Web Services.",
      image: require("./assets/images/aws_sol_arch.png"),
      footerLink: [
        { name: "Verification Link", url: "https://www.youracclaim.com/badges/71e2ce30-2162-487c-9e89-422c4cbeac70" }
      ]
    },
    {
      title: "Azure Fundamentals [AZ-900]",
      subtitle: "Individuals who have foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      image: require("./assets/images/azure_fundamentals.png"),
      footerLink: [{ name: "Verification Link", url: "https://www.youracclaim.com/badges/8740608d-7f3a-403e-9923-f0ca086181aa" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
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

  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️ +33 (0)786376988"),
  subtitle: emoji("Discuss a project or just want to say hi? ☎️ +33 (0)786376988"),
  number: "+33-(0)786376988",
  email_address: "giuseppedilena92@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails}; // twitterDetails
