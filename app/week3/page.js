import StudentInfo from "../StudentInfo"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>My Shopping List</h1>
      <StudentInfo/>
      <Link href={".."}><h1>Root Page</h1></Link>

    </main>
  )
}