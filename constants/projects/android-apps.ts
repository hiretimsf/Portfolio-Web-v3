import { AndroidApp } from "@/types";

const androidApps: AndroidApp[] = [
  {
    id: 1,
    title: "Portfolio App (Kotlin)",
    date: "April 2017 - July 2020",
    image: "/images/apps/android/portfolio-app-kotlin.jpg",
    description:
      "A Kotlin-based portfolio app using Jetpack Components, MVVM, Room, and Coroutines for seamless offline/online syncing.",
    github: "https://github.com/timtbdev/Android-Portfolio-App-Kotlin",
    liveDemo: "https://www.youtube.com/embed/YjVJyqcv5I8?si=rLGU5MlcojDpsigP",
  },
  {
    id: 2,
    title: "Portfolio App (Java)",
    date: "April 2017 - July 2020",
    image: "/images/apps/android/portfolio-app-java.jpg",
    description:
      "A Java-based Android portfolio app showcasing my development skills, built with standard SDK APIs and MVC architecture.",
    github: "https://github.com/timtbdev/Android-Portfolio-App-Java",
    liveDemo: "https://www.youtube.com/embed/j56fSGqF7Ho?si=KQSgguWxD5nPjAKv",
  },
  {
    id: 3,
    title: "T-shirt Design App",
    date: "September 2012 - November 2013",
    image: "/images/apps/android/tshirt-app.jpg",
    description:
      "Developed a custom T-shirt design app featuring exclusive collections by renowned Mongolian designer @ido.dsnr, blending modern aesthetics with cultural inspiration.",
    liveDemo: "https://www.youtube.com/watch?v=my5CPizUXEg",
  },
  {
    id: 4,
    title: "Local Marketplace App",
    date: "September 2012 - November 2013",
    image: "/images/apps/android/local-market-place-app.jpg",
    description:
      "A local marketplace app for buying and selling items in your neighborhood.",
    liveDemo: "https://www.youtube.com/watch?v=2TeqDGT7ATk",
  },
];

export default androidApps;
