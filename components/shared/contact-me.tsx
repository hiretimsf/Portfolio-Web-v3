import Image from "next/image";
import YellowButton from "./yellow-button";

interface ContactMeProps {
  className?: string;
  email?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  imageAlt?: string;
}

const ContactMe = ({
  className = "",
  email = "hiretimsf@gmail.com",
  heading = "Looking for an Android Developer?",
  description = "I'm available for in-person or remote work.",
  buttonText = "Contact Me",
  imageAlt = "Professional developer ready to collaborate on Android projects",
}: ContactMeProps) => {
  return (
    <section
      className={`bg-panda-background mx-auto flex max-w-2xl flex-col border-t border-gray-200 px-6 pt-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:pt-0 ${className}`}
      aria-labelledby="contact-heading"
    >
      <div className="w-full flex-auto px-6 text-center sm:text-left">
        <h2
          id="contact-heading"
          className="text-panda-text text-center text-4xl font-semibold tracking-tight text-pretty sm:text-left sm:text-5xl"
        >
          {heading}
        </h2>
        <p className="text-panda-text mt-6 text-center text-lg/8 text-pretty sm:text-left sm:text-lg">
          {description}
        </p>
        <div className="mt-6">
          <YellowButton
            href={`mailto:${email}`}
            title={buttonText}
            mt={0}
            aria-label={`Send email to ${email}`}
          />
        </div>
      </div>
      <div className="flex-none">
        <Image
          alt={imageAlt}
          src="/images/contact-me.png"
          width={400}
          height={400}
          className="h-96 w-full rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
    </section>
  );
};

export default ContactMe;
