import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function HomePage() {
  return (
    <>
      <Header />
      <Heading>
        <Hero />
      </Heading>
      <Main>
        <h1>Hello World</h1>
      </Main>
      <Footer />
    </>
  );
}
