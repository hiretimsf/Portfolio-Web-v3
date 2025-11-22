import BackToTop from "./footer/back-to-top";
import BottomNavigation from "./footer/bottom-navigation";
import Copyright from "./footer/copyright";

export default function Footer() {
  return (
    <footer className="bg-panda-background">
      <BackToTop />

      <BottomNavigation />

      <Copyright />
    </footer>
  );
}
