import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from './button'
import Link from 'next/link'
export default function MyProjects() {
    return (
        <div className="flex flex-col justify-center" id="MyProjects">
            <h2 className="mt-10 flex scroll-m-20 justify-center pb-2 text-3xl font-semibold tracking-tight">
                My projects
            </h2>
            <div className="mt-5 flex flex-row justify-center">
                <Tabs defaultValue="Innogram">
                    <TabsList className="mx-auto mb-6 flex w-full max-w-3xl justify-center">
                        <TabsTrigger value="Innogram">Innogram</TabsTrigger>
                        <TabsTrigger value="Bookit">Bookit</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Innogram" className="mt-5">
                        <Card className="border-azure mx-auto max-w-3xl border-2 text-left shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-azure text-xl font-semibold">
                                    Innogram
                                </CardTitle>
                                <CardDescription>
                                    Innogram is a full-stack social application
                                    that utilizes PostgreSQL and WebSockets for
                                    real-time communication, paired with a
                                    highly responsive frontend built using
                                    Next.js and Tailwind CSS.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <div className="flex flex-col">
                                    <div className="flex-wrap justify-end gap-2">
                                        <Badge variant="secondary">
                                            NestJS
                                        </Badge>
                                        <Badge variant="secondary">
                                            Next.js
                                        </Badge>
                                        <Badge variant="secondary">
                                            PostgreSQL
                                        </Badge>
                                        <Badge variant="secondary">
                                            MongoDB
                                        </Badge>
                                        <Badge variant="secondary">
                                            Tailwind CSS
                                        </Badge>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="mt-10">
                                            <Button
                                                className="bg-azure text-alice justify-start"
                                                variant="outline"
                                            >
                                                {' '}
                                                <Link
                                                    href={
                                                        'https://github.com/dabek782/Innogram'
                                                    }
                                                    target="blank"
                                                >
                                                    {' '}
                                                    Go to github repo
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Bookit" className="mt-5">
                        <Card className="border-azure mx-auto max-w-3xl border-2 text-left shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-azure text-xl font-semibold">
                                    Bookit
                                </CardTitle>
                                <CardDescription>
                                    Bookit is an event reservation platform
                                    driven by a robust NestJS backend. It
                                    leverages PostgreSQL transactions and Redis
                                    to ensure an optimal booking flow, featuring
                                    a clean Next.js and shadcn/ui frontend.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <div className="flex flex-col">
                                    <div className="flex-wrap justify-end gap-2">
                                        <Badge variant="secondary">
                                            NestJS
                                        </Badge>
                                        <Badge variant="secondary">
                                            Next.js
                                        </Badge>
                                        <Badge variant="secondary">
                                            PostgreSQL
                                        </Badge>
                                        <Badge variant="secondary">Redis</Badge>
                                        <Badge variant="secondary">
                                            Tailwind CSS
                                        </Badge>
                                        <Badge variant="secondary">
                                            Shadcn/ui
                                        </Badge>
                                    </div>

                                    <div className="flex justify-start">
                                        <div className="mt-10">
                                            <Button
                                                className="bg-azure text-alice justify-start"
                                                variant="outline"
                                            >
                                                {' '}
                                                <Link
                                                    href={
                                                        'https://github.com/dabek782/Intern-project-flash-sale-task'
                                                    }
                                                    target="blank"
                                                >
                                                    {' '}
                                                    Go to github repo
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
