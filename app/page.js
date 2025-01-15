import Link from "next/link";

export default function page(){
  return(
    <div>
      <h1>Hello, World</h1>
      <p>This is a simple web page.</p>
      <p>
        Link to week 2: <Link href="week-2">Week 2</Link>
      </p>
    </div>
  );
}