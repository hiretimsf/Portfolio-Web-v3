import AndroidIcon from "@/icons/android-icon";
import DriverIcon from "@/icons/driver-icon";
import FrontendIcon from "@/icons/frontend-icon";
import GraduateIcon from "@/icons/graduate-icon";
import MarketingIcon from "@/icons/marketing-icon";
import ServerIcon from "@/icons/server-icon";
import WorkerIcon from "@/icons/worker-icon";
import type { ExperienceItemType } from "@/types";
import { DE, MN, US } from "country-flag-icons/react/3x2";

export const EXPERIENCE: ExperienceItemType[] = [
  {
    id: "self-employed-android",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Walnut Creek, CA",
    country: US,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "android-developer-2025",
        title: "Android Developer",
        employmentPeriod: "October 2025 — Present",
        employmentDuration: "2 months",
        employmentType: "Self-employed",
        icon: AndroidIcon,
        description: `- Built the Mongolian Sign Language (MSL) Dictionary app to make learning sign language easy and accessible for everyone. It features interactive lessons and a clean, modern design powered by Jetpack Compose, Hilt, Coroutines, Flow, Room, Ktor, and Material 3.
- Earned 100+ GitHub stars and 100+ Play Store downloads.`,
        skills: [
          "Android Development",
          "Jetpack Compose",
          "Navigation 3",
          "DataStore",
          "Kotlin Coroutines",
          "Kotlin Flow",
          "Ktor",
          "Retrofit",
          "OkHttp",
          "Dagger Hilt",
          "Hilt",
          "Room DB",
          "Material Design 3",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
    projects: [
      {
        title: "Sign Language (Kotlin)",
        date: "October 2025 - Present",
        description: "Learn Mongolian sign language with interactive lessons.",
        imageUrl: "/images/app-placeholder.jpg",
        imageAlt: "Sign Language Dictionary",
        demoLink:
          "https://play.google.com/store/apps/details?id=com.timtb.signlanguagedictionary",
      },
    ],
  },
  {
    id: "self-employed-frontend",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "frontend-developer-2025",
        title: "Frontend Developer",
        employmentPeriod: "January 2025 — October 2025",
        employmentDuration: "10 months",
        employmentType: "Self-employed",
        icon: FrontendIcon,
        description: `Built an open-source, full-stack blog app using Next.js, TypeScript, Tailwind CSS, and Supabase, featuring an admin panel, WYSIWYG editor, image uploads, login, search, paging, and commenting system.

- [Earned 450+ GitHub stars](http://bit.ly/4njcFMh)
- [Earned Vercel swag for open-source contributions (June 2024)](https://bit.ly/4jHRS3i)

Built an open-source portfolio apps with Next.js, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, Zustand, Nuqs, FumaDocs, Supabase, Drizzle ORM, and Framer Motion.

- Features advanced SEO, built-in live search, a mobile-first design, and a blog with MDX support powered by FumaDocs.
- Fully based on Shadcn UI components for a modern, clean UI.
- Featured on [WeAreDevelopers (March 2025)](https://bit.ly/4lE6TVI)`,
        skills: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn Ui",
          "Supabase",
          "Drizzle",
          "Shadcn",
          "Zustand",
          "FumaDocs",
          "Nuqs",
          "Framer Motion",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
    projects: [
      {
        title: "Full-Stack Blog App",
        date: "June 2024 - Present",
        description:
          "A fully responsive full-stack blog app built with Next.js, React, TailwindCSS, and Supabase as backend. Based on Shadcn UI components.",
        imageUrl: "/images/apps/web/blog-app.jpg",
        imageAlt: "Blog App",
        demoLink: "https://ubdotcafe.vercel.app",
      },
      {
        title: "Portfolio Website v3",
        date: "October 2025 - Present",
        description:
          "Built with Next.js 16 and TailwindCSS. Designed and developed from the ground up, inspired by my own headshot. Features a modern, clean, and responsive design, with a focus on performance and SEO optimization.",
        imageUrl: "/images/apps/web/portfolio-app-v3.jpg",
        imageAlt: "Portfolio Website",
        demoLink: "https://hiretimsf.com",
      },
      {
        title: "Portfolio Website v2",
        date: "January 2025 - June 2025",
        description:
          "Built with Next.js 15 and TailwindCSS. A modern, fast, fully responsive portfolio website with SEO optimization, MDX blog system, and custom react motion animations.",
        imageUrl: "/images/apps/web/portfolio-app-v2.jpg",
        imageAlt: "Portfolio Website",
        demoLink: "https://tim-portfolio-web-v2.vercel.app/",
      },
      {
        title: "Portfolio Website v1",
        date: "January 2025 - June 2025",
        description:
          "Built with Next.js 13 and TailwindCSS. This is the first version of my portfolio website.",
        imageUrl: "/images/apps/web/portfolio-app-v1.jpg",
        imageAlt: "Portfolio Website",
        demoLink: "https://tim-portfolio-web-v1.vercel.app/",
      },
    ],
  },
  {
    id: "tesla",
    companyName: "Tesla",
    companyLogo: "/images/logos/tesla-logo.jpg",
    companyLogoAlt: "Tesla Logo",
    companyLocation: "Tesla Factory, Fremont, CA",
    companyWebsite: "https://www.tesla.com",
    country: US,
    positions: [
      {
        id: "production-associate-2020",
        title: "Production Associate",
        employmentPeriod: "October 2020 — January 2025",
        employmentDuration: "4 years 4 months",
        employmentType: "Full-time",
        icon: WorkerIcon,
        description: `- Monitored and performed functional testing for Model S and X vehicles at the end of the production line.
- Conducted drive tests for Model 3 and Y to ensure vehicle performance and quality.
- Assembled and installed body-side components for Model S.
- Delivered parts to the Model 3 Body-in-White production line using a forklift.`,
        skills: [
          "Forklift",
          "Model S",
          "Model X",
          "Model 3",
          "Model Y",
          "Body-in-White",
          "Functional Testing",
          "Drive Tests",
          "Assembly",
          "Installation",
          "Parts Delivery",
          "Forklift Operation",
          "Vehicle Testing",
          "Vehicle Performance Testing",
          "Vehicle Quality Control",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "self-employed-android-early",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://www.github.com/hiretimsf",
    positions: [
      {
        id: "android-developer-2017",
        title: "Android Developer",
        employmentPeriod: "April 2017 — July 2020",
        employmentDuration: "3 years 4 months",
        employmentType: "Self-employed",
        icon: AndroidIcon,
        description: `Developed and published two Android portfolio apps demonstrating modern architecture, testing, and best development practices.

- Portfolio App (Kotlin): Rebuilt the app in Kotlin (MVVM, Navigation, LiveData/DataBinding, Material Design, Coroutines, Retrofit, Room, Koin) with improved data flow and image handling.

- Portfolio App (Java): Developed the initial version in Java and XML using MVC architecture with the Android SDK and Retrofit for API integration.`,
        skills: [
          "Java",
          "XML",
          "Kotlin",
          "MVC",
          "MVVM",
          "Jetpack Components",
          "Google Material Design",
          "Navigation",
          "Room DB",
          "Retrofit",
          "OkHttp",
          "Koin",
          "ViewModel",
          "LiveData",
          "DataBinding",
          "Leak Canary",
          "Unit Testing",
          "Shape Shifter",
          "SVG Animation",
          "Firebase",
          "Dark Theme",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
    projects: [
      {
        title: "Portfolio App (Kotlin)",
        date: "April 2017 - July 2020",
        imageUrl: "/images/apps/android/portfolio-app-kotlin.jpg",
        imageAlt: "Portfolio App (Kotlin)",
        description:
          "A Kotlin-based portfolio app using Jetpack Components, MVVM, Room, and Coroutines for seamless offline/online syncing.",
        demoLink: "https://github.com/timtbdev/Android-Portfolio-App-Kotlin",
      },
      {
        title: "Portfolio App (Java)",
        date: "April 2017 - July 2020",
        imageUrl: "/images/apps/android/portfolio-app-java.jpg",
        imageAlt: "Portfolio App (Java)",
        description:
          "A Java-based Android portfolio app showcasing my development skills, built with standard SDK APIs and MVC architecture.",
        demoLink: "https://github.com/timtbdev/Android-Portfolio-App-Java",
      },
      {
        title: "Portfolio Website v0",
        date: "January 2023 - June 2023",
        description:
          "This is the first version of my portfolio site, built with HTML, CSS, and jQuery.",
        imageUrl: "/images/apps/web/portfolio-app-v0.jpg",
        imageAlt: "Portfolio Website v0",
        demoLink: "https://personal-website-76368.web.app/index.html",
      },
    ],
  },
  {
    id: "morningstar",
    companyName: "MorningStar Senior Living",
    companyLogo: "/images/logos/morning-star-logo.jpg",
    companyLogoAlt: "MorningStar Senior Living Logo",
    companyLocation: "Hayward, CA",
    country: US,
    companyWebsite: "https://www.morningstarseniorliving.com",
    positions: [
      {
        id: "server-2019",
        title: "Server",
        employmentPeriod: "October 2019 — January 2020",
        employmentDuration: "4 months",
        employmentType: "Full-time",
        icon: ServerIcon,
        description: `- Served meals and drinks to residents.
- Kept dining room clean and organized.`,
        skills: [
          "Meal Service",
          "Customer Service",
          "Communication",
          "Teamwork",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "driver-warehouse",
    companyName: "Uber, Lyft, Doordash, Amazon, UPS",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Delivery Services Logo",
    companyLocation: "San Francisco Bay Area, CA",
    country: US,
    companyWebsite: "https://www.uber.com",
    positions: [
      {
        id: "driver-warehouse-2017",
        title: "Driver & Warehouse Associate",
        employmentPeriod: "April 2017 — July 2019",
        employmentDuration: "2 years 4 months",
        employmentType: "Part-time",
        icon: DriverIcon,
        description: `- Rideshare and delivery driver (Uber, Lyft, DoorDash)
- Part-time roles at UPS and Amazon warehouses`,
        skills: [
          "Customer Service",
          "Time Management",
          "Multi-tasking",
          "Communication",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "renewable-energy",
    companyName: "Renewable Energy Project",
    companyLogo: "/images/logos/renewable-energy-logo.png",
    companyLogoAlt: "Renewable Energy Logo",
    companyLocation: "Ulaanbaatar, Mongolia",
    country: MN,
    companyWebsite: "https://www.eghpp.mn",
    positions: [
      {
        id: "web-developer-2013",
        title: "Frontend Developer",
        employmentPeriod: "November 2013 — February 2016",
        employmentDuration: "2 years 4 months",
        employmentType: "Full-time",
        icon: FrontendIcon,
        description: `- Designed and developed a responsive project website using HTML, CSS, and JavaScript.
- Created digital marketing materials, improving project visibility and engagement.`,
        skills: [
          "HTML",
          "Cascading Style Sheets (CSS)",
          "JavaScript",
          "jQuery",
          "Adobe Photoshop",
          "After Effects",
          "Adobe Illustrator",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
    projects: [
      {
        title: "Renewable Energy Project",
        date: "September 2012 - November 2013",
        description:
          "Designed and developed from the ground up with HTML, CSS, and JavaScript to highlight the key advantages of a renewable energy initiative.",
        imageUrl: "/images/apps/web/renewable-energy-app.jpg",
        imageAlt: "Renewable Energy Project",
        demoLink: "https://ioco-5c746.web.app/eg/index.html",
      },
      {
        title: "Project Marketing Materials",
        date: "September 2012 - November 2013",
        description:
          "Marketing materials and visuals were created in Photoshop, along with videos in After Effects. A lot of effort went into highlighting the project’s benefits and making the content engaging.",
        imageUrl: "/images/apps/web/renewable-energy-marketing-materials.jpg",
        imageAlt: "Renewable Energy Marketing Materials",
        demoLink:
          "https://drive.google.com/file/d/1TJTkNLywZL3Z_MaKLHGfsu5q_NJ-Bjo_/view?usp=sharing",
      },
    ],
  },
  {
    id: "self-employed-android-early-2012",
    companyName: "Personal Projects",
    companyLogo: "/images/logo.png",
    companyLogoAlt: "Tim's headshot",
    companyLocation: "Ulaanbaatar, Mongolia",
    country: MN,
    companyWebsite: "https://github.com/hiretimsf",
    positions: [
      {
        id: "android-developer-2012",
        title: "Android Developer",
        employmentPeriod: "September 2012 — November 2013",
        employmentDuration: "1 year 3 months",
        employmentType: "Self-employed",
        icon: AndroidIcon,

        description: `- Developed and launched two Android applications, including a full-stack, location-based marketplace app for buying and selling items within local neighborhoods, built on the Ushahidi open-source platform using Java, XML, and Eclipse IDE.
- Created a custom T-shirt design app featuring exclusive collections by Mongolian designer @ido.dsnr, blending modern aesthetics with cultural inspiration.`,
        skills: [
          "Java",
          "XML",
          "Android SDK",
          "Eclipse IDE",
          "Android SDK Plugin",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
    projects: [
      {
        title: "T-shirt Design App",
        date: "September 2012 - November 2013",
        imageUrl: "/images/apps/android/tshirt-app.jpg",
        imageAlt: "T-shirt Design App",
        description:
          "Developed a custom T-shirt design app featuring exclusive collections by renowned Mongolian designer @ido.dsnr, blending modern aesthetics with cultural inspiration.",
        demoLink: "https://www.youtube.com/watch?v=my5CPizUXEg",
      },
      {
        title: "Local Marketplace App",
        date: "September 2012 - November 2013",
        imageUrl: "/images/apps/android/local-market-place-app.jpg",
        imageAlt: "Local Marketplace App",
        description:
          "A local marketplace app for buying and selling items in your neighborhood.",
        demoLink: "https://www.youtube.com/watch?v=2TeqDGT7ATk",
      },
    ],
  },
  {
    id: "unitel",
    companyName: "Unitel Group",
    companyLogo: "/images/logos/unitel-logo.png",
    companyLogoAlt: "Unitel Logo",
    companyLocation: "Ulaanbaatar, Mongolia",
    country: MN,
    companyWebsite: "https://www.unitel.mn",
    positions: [
      {
        id: "marketing-associate-2009",
        title: "Marketing Associate",
        employmentPeriod: "November 2009 — August 2012",
        employmentDuration: "2 years 10 months",
        employmentType: "Full-time",
        icon: MarketingIcon,
        description: `- Launched BlackBerry services in Mongolia, selling over 6,000 devices.
- Developed a product landing page with HTML & CSS that boosted user engagement by 10%.`,
        skills: [
          "HTML",
          "Cascading Style Sheets (CSS)",
          "JavaScript",
          "Photo Impact",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "mercedes-benz",
    companyName: "Mercedes-Benz AG",
    companyLogo: "/images/logos/daimler-logo.png",
    companyLogoAlt: "Daimler Logo",
    companyLocation: "Stuttgart, Germany",
    country: DE,
    companyWebsite: "https://www.mercedes-benz.com",
    positions: [
      {
        id: "intern-2007",
        title: "Intern",
        employmentPeriod: "March 2007 — August 2007",
        employmentDuration: "6 months",
        employmentType: "Full-time",
        icon: GraduateIcon,
        description: `- Migrated over 100 logistics reports to a new Cognos BI system.
- Assisted Data Warehouse users by creating custom data reports using SQL.`,
        skills: [
          "SQL",
          "IBM Cognos Analytics",
          "Cognos",
          "Microsoft Access",
          "Visual Basic",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];
