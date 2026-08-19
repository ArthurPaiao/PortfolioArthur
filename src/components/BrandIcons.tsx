import { FaGithub, FaLinkedin } from "react-icons/fa";

// Usamos react-icons (não lucide) especificamente pra ícones de marca,
// já que a Lucide removeu ícones de logos (GitHub, LinkedIn, etc.) na v1.0.
// react-icons é uma lib separada e estável pra esse tipo de ícone.

export function GithubIcon({ className }: { className?: string }) {
  return <FaGithub className={className} />;
}

export function LinkedinIcon({ className }: { className?: string }) {
  return <FaLinkedin className={className} />;
}
