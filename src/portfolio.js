/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vanshika Chhikara",
  title: "Hello, I'm Vanshika",
  subTitle: emoji(
    "19-year-old developer passionate about building impactful full-stack apps. Proficient in tRPC, MERN, and modern web stacks with experience in LLM integration. I share my learnings on YouTube, document my journey on X, and love collaborating at hackathons." ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vanshikaChhikaraGit",
  linkedin: "https://www.linkedin.com/in/vanshika-chhikara-0baa55275/",
  gmail: "vanshikachhikara12@gmail.com",
  youtube:"https://www.youtube.com/@iknowimnotcool",
  twitter:"https://x.com/vanshikack",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "Exploring code, building cool stuff, skilling up in AI/ML domain ",
 skills: [
  emoji("⚡ Develop fully functional full-stack applications"),
  emoji("⚡ Leverage LLM and Gen-AI to build AI-powered apps and intelligent agents"),
  emoji("⚡ Integrate third-party services such as Firebase, Docker, and DigitalOcean")
],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Gen-AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "NextJS",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }, 
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    }, 
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fab fa-css3"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fronted Engineer",
      company: "TradeHub24",
      companylogo: require("./assets/images/tradehub.png"),
      date: "Jan 2025-Feb 2025",
      desc: " Developed a responsive web application using ReactJS , transforming UI/UX design mockups into functional components with 95% accuracy",
      descBullets: [
        "Collaborated with senior developers through code reviews, adopting best practices in clean code, state management, and reusable components.",
        "Contributed to agile workflows (standups, sprints) and mobile responsiveness. "
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Gen-AI Program",
      subtitle:
        "Participated in a Gen-AI program organised by google cloud and recieved 4 winning-badges",
      image: require("./assets/images/googlecloud.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Gen-AI",
          url: "https://www.cloudskillsboost.google/public_profiles/3b5bc05b-3199-41ca-8356-c21e1138ceba/badges/8853302"
        },
        {
          name: "Prompt-Design",
          url: "https://www.cloudskillsboost.google/public_profiles/3b5bc05b-3199-41ca-8356-c21e1138ceba/badges/8847707"
        },
        {
          name: "Arcade",
          url: "https://www.cloudskillsboost.google/public_profiles/3b5bc05b-3199-41ca-8356-c21e1138ceba/badges/8841912"
        }
      ]
    },
    {
      title: "Smart India Hackathon",
      subtitle:
        " Selected among 150 teams nationwide to advance to the semifinal round of the Smart India Hackathon 2024,",
      image: require("./assets/images/sih.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section


// Talks Sections

const talkSection = {
  title: "Youtube",
  subtitle: emoji(
    "I love to share my knowledge with like-minded people over my youtube channel.(Subscribe?❤️)"
  ),

  talks: [
    {
      title: "BoredPanda",
      subtitle: "@iknowimnotcoll",
     channel_url: "https://www.youtube.com/channel/UC20Ptt-YzxH-2MLo0XOAEnQ",
    }
  ],
  display: true// Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to talk projects or just drop a message? Shoot me an email anytime!",
  number: "+91-9306761520",
  email_address: "vanshikachhikara12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display:false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
