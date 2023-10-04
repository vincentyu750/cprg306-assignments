import StudentInfo from "./StudentInfo"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href={"./week2"}><h1>Week 2 Link</h1></Link>
      <Link href={"./week3"}><h1>Week 3 Link</h1></Link>
    </main>
  )
}