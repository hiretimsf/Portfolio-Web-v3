import Link from "next/link";
import { Button } from "../ui/button";
import YellowButton from "./yellow-button";

const ContactMe = () => {
  return (
    <div className="bg-panda-light-green mx-auto space-y-6 p-6 text-center">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-white">
        LOOKING FOR AN ANDROID DEVELOPER?
      </h2>
      <YellowButton
        href="mailto:hiretimsf@gmail.com"
        title="Contact Tim"
        textSize="lg"
        mt={0}
      />
    </div>
  );
};

export default ContactMe;
