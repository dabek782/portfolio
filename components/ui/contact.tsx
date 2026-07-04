import { Button } from "./button"
import { Mail } from "lucide-react"
import Link from "next/link"
export default function Contact (){
    return(
        <div className="p-10 m-5">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center mt-10">
      Contact
    </h2>
        <div className="flex justify-center">
            <Button variant='outline' className='text-azure text-center max-w-30 mt-5'><Link href='mailto:kubadabrowski782@gmail.com'>Get in Touch</Link> <Mail className="mr-2 h-4 w-4"/> </Button>
        </div>
        </div>
        
        
    )
}