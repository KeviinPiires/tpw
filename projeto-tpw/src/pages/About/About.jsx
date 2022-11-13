// HOOKS 
import { Link } from "react-router-dom";

// CSS
import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link to="/" className="btn">
        Criar post
      </Link>
    </div>
  );
}