import styles from "../styles/Home.module.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
    </div>
  );
}
