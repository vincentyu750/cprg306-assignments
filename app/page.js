import StudentInfo from "./StudentInfo"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href={"./week2"}><h1>Week 2 Link</h1></Link>
      <Link href={"./week3"}><h1>Week 3 Link</h1></Link>
      <Link href={"./week4"}><h1>Week 4 Link</h1></Link>
      <Link href={"./week5"}><h1>Week 5 Link</h1></Link>
      <Link href={"./week6"}><h1>Week 6 Link</h1></Link>
      <Link href={"./week7"}><h1>Week 7 Link</h1></Link>
      <Link href={"./week8"}><h1>Week 8 Link</h1></Link>
    </main>
  )
}