import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
export default function Technologies() {
    return (
        <div id="technologies" className="mt-10">
            <div className="flex justify-center">
                <h2 className="0 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    My Tech Stack
                </h2>
            </div>
            <div className="m-10 grid grid-cols-3">
                <Card className="m-10 p-10 shadow-xl duration-200 transform-content hover:scale-115">
                    <CardHeader>
                        <CardTitle className="text-azure text-center">
                            Frontend
                        </CardTitle>
                        <CardDescription>
                            <ul>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>HTML</li>
                            </ul>
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="m-10 p-10 duration-200 transform-content hover:scale-115">
                    <CardHeader>
                        <CardTitle className="text-azure text-center">
                            Backend
                        </CardTitle>
                        <CardDescription>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>NestJS</li>
                            </ul>
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="m-10 p-10 duration-200 transform-content hover:scale-115">
                    <CardHeader>
                        <CardTitle className="text-azure text-center">
                            Database and other technologies
                        </CardTitle>
                        <CardDescription>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                                <li>Redis</li>
                                <li>Docker</li>
                                <li>Git</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                            </ul>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
