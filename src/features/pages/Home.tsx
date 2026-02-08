import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import Message from "../components/Message";
import SectionServices from "../components/SectionServices";
import Start from "../components/Start";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Start />
      <SectionServices />
      <AboutUs />
      <Message />
      <FormContact />
      <Footer />
    </div>
  );
}
