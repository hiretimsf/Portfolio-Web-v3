import Link from "next/link";
import { Button } from "../ui/button";
import YellowButton from "./yellow-button";

const ContactMe = () => {
  return (
    <div className="bg-panda-light-green mx-auto p-6 text-center">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
        Looking for an Android Developer?
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg font-medium text-white/80">
        I build Android apps that solve real-world problems.
      </p>
      <YellowButton
        href="mailto:hiretimsf@gmail.com"
        title="Contact Me"
        textSize="lg"
        mt={0}
      />
    </div>
  );
};

export default ContactMe;
