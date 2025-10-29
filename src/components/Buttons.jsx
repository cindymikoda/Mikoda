export default function Buttons({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-section custom-button"
    >
      {title}
    </a>
  );
}
