export function Skill({ icon, nome, cor, className }) {
  return (
    <span className={className} style={{ "--corSkill": cor }}>
      <figure>
        <img src={icon} alt={nome} />
      </figure>
      <h3>{nome}</h3>
    </span>
  );
}
