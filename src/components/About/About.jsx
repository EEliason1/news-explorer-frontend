import "./About.css";
import authorImage from "../../assets/Evan_Eliason.jpg";

function About() {
  return (
    <div className="about">
      <img src={authorImage} alt="author image" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Evan Eliason. I am currently a CADD Technician for a land
          surveying company. Throughout this course I have learned HTML 5, CSS,
          JS, and various JS packages. I learned how to be a self sufficient
          Software Engineer and gain extra problem solving skills on top of what
          I gained in college.
          <br />
          <br />
          My experience at TripleTen has given me the tools necessary to satisfy
          almost any SE problem thrown at me. I can use this knowledge to
          develop websites and apps for customers that will meet and exceed
          market standards.
        </p>
      </div>
    </div>
  );
}

export default About;
