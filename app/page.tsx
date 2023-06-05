import Nav from "@/components/Nav";
import gymgirl from "./home.jpg"
import Image from "next/image";
export default function Home() {
  return (
  <div>
 <Nav />
 <div className ="w-auto h-fit relative"> <Image src={gymgirl} alt="Picture of girl" className="hidden sm:block"  /> </div>
 </div>
 );
}
