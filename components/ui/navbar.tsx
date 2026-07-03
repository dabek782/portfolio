import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
export default function Navbar (){
    return(
     <nav className="flex w-full shadow-md border-b-2 flex-row justify-between mx-auto">
        <Link href="/" className="font-extrabold text-2xl tracking-tight text-azure transition-colors hover:text-cerulean  m-5 ">Jakub Dąbrowski</Link>
    <NavigationMenu className=" mx-5  float-right " >
      <NavigationMenuList className="m-2">
        <NavigationMenuItem className="mx-3  py-2 text-azure hover:text-cerulean ">
            About me
        </NavigationMenuItem>
        <NavigationMenuItem className="mx-3  py-2 text-azure hover:text-cerulean">
            My projects
        </NavigationMenuItem>
        <NavigationMenuItem className="mx-3  py-2 text-azure hover:text-cerulean">
            Technologies 
        </NavigationMenuItem>
         <NavigationMenuItem className="mx-3  py-2 text-azure hover:text-cerulean">
            Contact 
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </nav>
    )
}