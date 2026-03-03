import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.separator} />

      <p style={styles.text}>
        © {new Date().getFullYear()} Coordinadora d'AFEs de Sant Cugat
      </p>

      <p style={styles.subtext}>
        Representant les AFEs de primària i instituts públics del municipi
      </p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    marginTop: "40px",
    paddingBottom: "20px",
    textAlign: "center",
    fontSize: "13px",
    color: "#555",
  },
  separator: {
    height: "1px",
    backgroundColor: "#d9dde3",
    margin: "20px 0",
  },
  text: {
    margin: "4px 0",
    fontWeight: 500,
  },
  subtext: {
    margin: "4px 0",
    fontSize: "12px",
    opacity: 0.8,
  },
};

export default Footer;