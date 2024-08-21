import styles from "./nav.module.css";
import LinkObject from "./Link";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";

export default function Nav() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Work", href: "#work" },
    { title: "Projects", href: "#my-projects" },
  ];

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <LinkObject data={{ ...item, index }} key={index} />;
          })}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}
