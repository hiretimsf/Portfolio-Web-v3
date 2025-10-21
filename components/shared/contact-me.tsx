import Image from "next/image";
import YellowButton from "./yellow-button";

interface ContactMeProps {
  className?: string;
}

const ContactMe = ({ className }: ContactMeProps) => {
  return (
    <div
      className={`bg-panda-background mx-auto flex max-w-2xl flex-col px-6 pt-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:pt-0 ${className || ""}`}
    >
      <div className="w-full flex-auto px-6 text-center sm:text-left">
        <h2 className="text-panda-text text-center text-4xl font-semibold tracking-tight text-pretty sm:text-left sm:text-5xl">
          Looking for an Android Developer?
        </h2>
        <p className="text-panda-text mt-6 text-center text-lg/8 text-pretty sm:text-left sm:text-lg">
          I'm available for in-person or remote work.
        </p>
        <YellowButton
          href="mailto:hiretimsf@gmail.com"
          title="Contact Me"
          mt={6}
        />
      </div>
      <Image
        alt="Contact me image"
        src="/images/contact-me.png"
        width={400}
        height={400}
        className="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
        priority={true}
        unoptimized={true}
      />
    </div>
  );
};

export default ContactMe;
