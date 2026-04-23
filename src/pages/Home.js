import "./Home.css";

const personal = {
  name: "Akarshan Jogi",
  phone: "+91 91210 84226",
  phoneE164: "+919121084226",
  emailPersonal: "akarshanjogi@gmail.com",
  emailCollege: "akarshan.jogi@learner.mahindrauniversity.edu.in",
};

const skills = [
  "React",
  "Python",
  "C++",
  "Deep Learning (PyTorch / TensorFlow)",
  "Digital Visual Creation",
];

function Home() {
  return (
    <div className="home page-fade">
      <section className="hero" aria-label="Introduction">
        <div className="hero__content">
          <p className="hero__kicker">Portfolio</p>
          <h1 className="hero__title">{personal.name}</h1>
          <p className="hero__role">
            3rd Year B.Tech AI Student
            <span className="hero__dot" aria-hidden>
              {" "}
              ·{" "}
            </span>
            Mahindra University
          </p>
        </div>
        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img
              src={process.env.PUBLIC_URL + "/profile-photo.png"}
              alt="Akarshan Jogi"
              className="hero__img"
              width={180}
              height={180}
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section__title">
          About
        </h2>
        <p className="section__text">
          Focused on <strong>Artificial Intelligence</strong>,{" "}
          <strong>Deep Learning</strong>, and <strong>Full-Stack Development</strong>.
          I enjoy building end-to-end systems and exploring how modern ML can solve
          real-world problems with clarity and craft.
        </p>
      </section>

      <section className="section" aria-labelledby="research-heading">
        <h2 id="research-heading" className="section__title">
          Research
        </h2>
        <p className="section__text">
          Deep neural architectures including <strong>Graph Convolutional Networks (GCN)</strong>{" "}
          and <strong>KAN models</strong>, with emphasis on <strong>Computer Vision</strong> and
          applications in structured prediction and medical insight.
        </p>
      </section>

      <section className="section" aria-labelledby="details-heading">
        <h2 id="details-heading" className="section__title">
          Personal details
        </h2>
        <ul className="details">
          <li>
            <span className="details__label">Name</span>
            <span className="details__value">{personal.name}</span>
          </li>
          <li>
            <span className="details__label">Phone</span>
            <a
              className="details__value details__value--link"
              href={`tel:${personal.phoneE164}`}
            >
              {personal.phone}
            </a>
          </li>
          <li>
            <span className="details__label">Email (personal)</span>
            <a
              className="details__value details__value--link"
              href={`mailto:${personal.emailPersonal}`}
            >
              {personal.emailPersonal}
            </a>
          </li>
          <li>
            <span className="details__label">Email (college)</span>
            <a
              className="details__value details__value--link"
              href={`mailto:${personal.emailCollege}`}
            >
              {personal.emailCollege}
            </a>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="section__title">
          Skills
        </h2>
        <ul className="skill-list">
          {skills.map((s) => (
            <li key={s} className="skill-pill">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
