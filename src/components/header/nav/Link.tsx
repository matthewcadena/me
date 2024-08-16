import style from "./nav.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "./anim";
import { useAtom } from "jotai";
import { navActiveAtom } from "../../../state/atoms";

export default function LinkObject({ data }: { data: any }) {
  const [, setNavActive] = useAtom(navActiveAtom);

  return (
    <motion.div
      variants={slide}
      custom={data.index}
      animate="enter"
      exit="exit"
      initial="initial"
      className={style.link}
    >
      <div
        onClick={() => {
          setNavActive(false);
        }}
      >
        <Link href={data.href} className={style.a}>
          {data.title}
        </Link>
      </div>
    </motion.div>
  );
}
