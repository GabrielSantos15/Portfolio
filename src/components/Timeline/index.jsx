import TrajectoryElement from "../ExperienceCard";
import "./Timeline.estilos.css"; // Se tiver CSS

export default function Timeline({titulo,data}) {
  return (
    <section id="experienceSection">
      <div className="trajectory-container">
        <h2>{titulo}</h2>

        {data.map((item) => (
          <TrajectoryElement key={item.id} item={item}></TrajectoryElement>
        ))}
      </div>
    </section>
  );
}
