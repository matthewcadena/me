import style from './nav.module.css';
import Link from 'next/link'
import { motion } from "framer-motion";
import { slide } from './anim';

export default function LinkObject({ data }: { data: any }) {
  return (
    <motion.div variants={slide} custom={data.index} animate="enter" exit="exit" initial="initial" className={style.link}>
      <Link href={data.href} className={style.a}>
        {data.title}
      </Link>
    </motion.div>
  )
}