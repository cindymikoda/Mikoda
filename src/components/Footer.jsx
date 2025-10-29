export default function Footer({ isDark, toggleTheme }) {
  return (
    <div className="card-section footer-section">
      <p className="footer-text">
        Made with love by Cindy |
        <a
          href="https://github.com/cindymikoda/Mikoda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </p>

      <div className="theme-toggle-wrapper">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
