import { socialLinks } from "../library/socialData";

export default function Socials() {
  return (
    <div className="card-section socials-section">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          className="social-icon"
          aria-label={social.label}
        >
          <img src={social.icon} alt={social.label} />
        </a>
      ))}
    </div>
  );
}
