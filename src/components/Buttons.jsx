export default function Button({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="custom-button"
    >
      {title}
    </a>
  );
}
