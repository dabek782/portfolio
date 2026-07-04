import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="mx-auto flex w-90% flex-row justify-between border-b-2 shadow-md">
            <Link
                href="/"
                className="text-azure hover:text-cerulean m-5 text-2xl font-extrabold tracking-tight transition-colors"
            >
                Jakub Dąbrowski
            </Link>
            <NavigationMenu className="float-right mx-5">
                <NavigationMenuList className="m-2">
                    <NavigationMenuItem className="text-azure hover:text-cerulean mx-3 py-2">
                        <Link href={'/#HeroSection'}>About me</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-azure hover:text-cerulean mx-3 py-2">
                        <Link href={'/#MyProjects'}>My projects</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-azure hover:text-cerulean mx-3 py-2">
                        <Link href={'/#technologies'}>Technologies</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-azure hover:text-cerulean mx-3 py-2">
                        Contact
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}
