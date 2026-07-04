import Image from "./image";
import { Button } from "./button";

export default function Hero(){
    return(
  
    <div className="flex flex-row" id="HeroSection">
        <section className=" flex flex-row bg-alice rounded-3xl mt-5 mr-40 ml-40  justify-center ">
        <Image/>
        <section className="flex flex-col justify-center">
         <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance py-10  mr-10">
             Hi! I am a Full Stack Developer specializing in robust NestJS backends and minimalist Next.js frontends
        </h1>
        
          <h3 className="scroll-m-40 text-xl font-semibold tracking-tight justify-center align-middle flex mr-10 pl-7" >
            I am passionate about studying new web development trends and continuously improving my craft. I strive to write clean, efficient code every day. When I am not building web applications, you can find me watching motorsports or playing video games.
          </h3>
          <section className=" justify-flex flex flex-row " id="buttons">
            <Button className="bg-azure text-alice m-5" variant="outline"> My projects </Button>
            <Button className="bg-white text-azure m-5" variant="outline"> Contact </Button>
        </section>
        </section>
                
        </section>
        </div> 


   
       
   
    
    )
}