import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/llapisos.jpg";

const SocialLinks: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={logo} alt="Logo Coordinadora AFEs" style={styles.logo} />
          <h1 style={styles.title}>Coordinadora d'AFEs</h1>
        </div>

        <div style={styles.textBlock}>
          <p style={styles.paragraph}>
            <strong>Bon dia famílies,</strong>
          </p>

          <p style={styles.paragraph}>
            Si voleu estar al dia de temes sobre educació al municipi,
            us convidem a seguir-nos a les xarxes de la Coordinadora d'AFEs.
          </p>

          <p style={styles.paragraphStrong}>
            Representem totes les AFEs de primària i tres instituts de la
            pública de Sant Cugat.
          </p>
        </div>

        <div style={styles.separator} />

        <div style={styles.linksContainer}>
          <SocialButton
            href="https://chat.whatsapp.com/KlACg9AeMmrJE2zIRqPT9N"
            icon={<FaWhatsapp />}
            color="#25D366"
            text="Canal de WhatsApp"
          />
          <SocialButton
            href="https://www.instagram.com/afes.sant.cugat"
            icon={<FaInstagram />}
            color="#E1306C"
            text="Instagram"
          />
          <SocialButton
            href="https://t.me/afes_santcugat"
            icon={<FaTelegramPlane />}
            color="#0088cc"
            text="Canal de Telegram"
          />
          <SocialButton
            href="https://www.facebook.com/AFAStCugat/"
            icon={<FaFacebookF />}
            color="#1877F2"
            text="Facebook"
          />
          <SocialButton
            href="https://x.com/afes_santcugat"
            icon={<FaXTwitter />}
            color="#000000"
            text="X (Twitter)"
          />
        </div>
      </div>
    </div>
  );
};

type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
  color: string;
  text: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon,
  color,
  text,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.linkButton}
  >
    <span style={{ ...styles.icon, color }}>{icon}</span>
    <span>{text}</span>
  </a>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f6f8",
    display: "flex",
    justifyContent: "center",
    padding: "24px 16px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  logo: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
  },
  title: {
  fontSize: "22px",
  fontWeight: 700,
  margin: 0,
  color: "#1f2937", // gris oscuro institucional
},
  textBlock: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#333",
  },
  paragraph: {
    marginBottom: "12px",
  },
  paragraphStrong: {
    marginBottom: "8px",
    fontWeight: 600,
  },
  separator: {
    height: "1px",
    backgroundColor: "#d9dde3",
    margin: "24px 0",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  linkButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "15px",
    borderRadius: "10px",
    textDecoration: "none",
    backgroundColor: "#ffffff",
    color: "#222",
    fontWeight: 600,
    fontSize: "15px",
    border: "1px solid #e1e4e8",
  },
  icon: {
    fontSize: "20px",
  },
};

export default SocialLinks;