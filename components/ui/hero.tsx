import Image from "./image";

export default function Hero(){
    return(
        <section id="hero" className=" flex flex-row bg-alice rounded-3xl mr-40 ml-40 my-20 ">
        <Image/>
         <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance py-20 pl-30">
        Hi my name is Jakub Dąbrowski
    </h1>
    </section>
    )
}