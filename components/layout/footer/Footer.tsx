import BackToTop from "./back-to-top";
import BottomNavigation from "./bottom-navigation";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <footer className="bg-panda-background">
      <BackToTop />

      <BottomNavigation />

      <Copyright />
    </footer>
  );
}
