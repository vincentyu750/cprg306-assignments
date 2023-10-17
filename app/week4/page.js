import StudentInfo from "../StudentInfo"
import Link from "next/link"
import NewItem from "./new-item"


export default function Home() {
  return (
    <main>
      <h1>My Shopping List</h1>
      <StudentInfo/>
      <Link href={".."}><h1>Root Page</h1></Link>
      <h1 className="text-4xl font-bold m-5 text-center text-yellow-500">
        Week 4: New Item
      </h1>
      <NewItem />
    </main>
  )
}