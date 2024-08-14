import style from './style.module.css';
import Link from 'next/link'

export default function LinkObject({ data }: { data: any }) {
  return (
    <div className={style.link}>
      <Link href={data.href}>
        {data.title}
      </Link>
    </div>
  )
}