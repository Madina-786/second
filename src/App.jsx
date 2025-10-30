import Nav from "./Component1/Nav";
import Hero from "./Component1/Hero";
import Labels from "./Component1/Labels";
import Categories from "./Component1/Categories";
import OnlineCourses from "./Component1/OnlineCourses";
import Personalized from "./Component1/Personalized";
import Testimonial from "./Component1/Testimonial";
import Explore from "./Component1/Explore";
import Footer from "./Component1/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <section>
        <Hero />
      </section>
      <Labels />
      <Categories />
      <OnlineCourses />
      <Personalized />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
}
