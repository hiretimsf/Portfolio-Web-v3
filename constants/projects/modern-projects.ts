import { ModernProject } from "@/types";

const modernProjects: ModernProject[] = [
  {
    id: 1,
    year: 2018,
    status: "active",
    section: "modern",
    type: "Java",
    subType: "Android",
    title: "Portfolio App Java",
    description:
      "A Java-based Android portfolio app showcasing my development skills, built with standard SDK APIs and MVC architecture.",
    video: "https://www.youtube.com/embed/j56fSGqF7Ho?si=KQSgguWxD5nPjAKv",
    videoAlt: "Portfolio App 1.0 demonstration video",
    github: "https://github.com/timtbdev/Android-Portfolio-App-Java",
    liveDemo: "https://ioco-5c746.web.app/d/",
    features: [
      {
        feature: "Java, XML, MVC Architecture",
      },
      {
        feature: "Standard Android SDK APIs",
      },
      {
        feature: "Material Design 2",
      },
    ],
  },
  {
    id: 2,
    year: 2018,
    status: "active",
    section: "modern",
    type: "Kotlin",
    subType: "Android",
    title: "Portfolio App Kotlin",
    description:
      "A Kotlin-based portfolio app using Jetpack Components, MVVM, Room, and Coroutines for seamless offline/online syncing.",
    video: "https://www.youtube.com/embed/YjVJyqcv5I8?si=rLGU5MlcojDpsigP",
    videoAlt: "Portfolio App 2.0 demonstration video",
    github: "https://github.com/timtbdev/Android-Portfolio-App-Kotlin",
    liveDemo: "https://ioco-5c746.web.app/a/",
    features: [
      {
        feature: "Kotlin, XML, MVVM Architecture",
      },
      {
        feature: "Room, LiveData, ViewModels, Coroutines",
      },
      {
        feature: "Retrofit, Koin, WorkManager",
      },
    ],
  },
];

export default modernProjects;
