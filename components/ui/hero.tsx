import Image from './image'
import { Button } from './button'
import Link from 'next/link'
export default function Hero() {
    return (
        <div className="flex flex-row" id="HeroSection">
            <section className="bg-alice mt-5 mr-40 ml-40 flex flex-row justify-center rounded-3xl">
                <Image />
                <section className="flex flex-col justify-center">
                    <h1 className="mr-10 scroll-m-20 py-10 text-center text-4xl font-extrabold tracking-tight text-balance">
                        Hi! I am a Full Stack Developer specializing in robust
                        NestJS backends and minimalist Next.js frontends
                    </h1>

                    <h3 className="mr-10 flex scroll-m-40 justify-center pl-7 align-middle text-xl font-semibold tracking-tight">
                        I am passionate about studying new web development
                        trends and continuously improving my craft. I strive to
                        write clean, efficient code every day. When I am not
                        building web applications, you can find me watching
                        motorsports or playing video games.
                    </h3>
                    <section
                        className="justify-flex flex flex-row"
                        id="buttons"
                    >
                        <Button
                            className="bg-azure text-alice m-5"
                            variant="outline"
                        >
                            <Link href="#MyProjects">My projects </Link>{' '}
                        </Button>
                        <Button
                            className="text-azure m-5 bg-white"
                            variant="outline"
                        >
                            {' '}
                            Contact{' '}
                        </Button>
                    </section>
                </section>
            </section>
        </div>
    )
}
