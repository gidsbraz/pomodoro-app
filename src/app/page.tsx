import Image from "next/image";
import logo from "@/img/logo.png";
import play from "@/img/play.png"

export default function Home() {
  return (
    <main className='bg-zinc-900 h-screen flex flex-col justify-evenly'>
    <Image src={logo} width={250} height={29} className="self-center lg:self-start lg:m-14"/>
    <div className='flex flex-col items-center text-center'>
       <div className="flex flex-col w-[270px] h-[270px] border-4 border-green-500 rounded-full justify-center lg:mb-12">
          <h1 className="font-extrabold text-[75px] text-white">12:00</h1>
       </div>
    </div>
       <button className='bg-green-500 h-[80px] w-[80px] rounded-full flex flex-col justify-center items-center self-center'>
          <Image src={play} width={36} height={43} alt="botão" className="ml-1"/>
       </button>
       </main>
  );
}
