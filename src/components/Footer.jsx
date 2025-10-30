export default function Footer({ isDark, toggleTheme }) {
  return (
    <div className="card-section footer-section">
      <p className="footer-text">Made with love by Cindy</p>
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
