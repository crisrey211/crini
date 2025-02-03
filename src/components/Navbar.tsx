import Facebook from "@/assets/icons/facebook.svg";
import Telegram from "@/assets/icons/telegram.svg";
import Whatsapp from "@/assets/icons/whatsapp.svg";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from '../data/menuItems';



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    return (
        <nav className="relative top-10 z-50 bg-white border-b rounded-lg shadow-md w-full">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src="/logo.svg" alt="Ciringo" width={120} height={40} className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menuItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        {item.submenu ? (
                                            <NavigationMenuTrigger className="group">
                                                {item.title}
                                                {/* {item.icon} */}
                                            </NavigationMenuTrigger>
                                        ) : (
                                            <Link to="/contacto"
                                            >
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    <span>{item.title}</span>
                                                    {item.icon && <span className="ml-2">{item.icon}</span>}
                                                </NavigationMenuLink>
                                            </Link>
                                        )}
                                        {item.submenu && (
                                            <NavigationMenuContent>
                                                <div className="flex gap-8 p-6 w-[800px]">
                                                    <div className="w-1/3">
                                                        <div className="relative h-full rounded-2xl overflow-hidden">
                                                            <img
                                                                src={item.submenu.image.src || "/placeholder.svg"}
                                                                alt={item.submenu.image.alt}
                                                                width={300}
                                                                height={400}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 grid grid-cols-2 gap-6">
                                                        {item.submenu.items.map((subItem) => (
                                                            <Link key={subItem.title} to="/contacto"
                                                                className="group block">
                                                                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                                                    {subItem.title}
                                                                </h3>
                                                                <p className="text-sm text-gray-600 line-clamp-2">{subItem.description}</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button className="rounded-full">Solicitar cotización</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[80%] rounded-r-[2rem]">
                            <SheetHeader>
                                <SheetTitle>NAVEGACIÓN</SheetTitle>
                                <SheetClose className="absolute right-4 top-4">
                                    <X className="h-6 w-6" />
                                </SheetClose>
                            </SheetHeader>
                            <div className="mt-8 flex flex-col space-y-4">
                                {menuItems.map((item) => (
                                    <div key={item.title}>
                                        {item.submenu ? (
                                            <NavigationMenu>
                                                <NavigationMenuList>
                                                    <NavigationMenuItem>
                                                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                                        <NavigationMenuContent>
                                                            <ul className="grid w-[200px] gap-3 p-4">
                                                                {item.submenu.items.map((subItem) => (
                                                                    <li key={subItem.title}>
                                                                        <NavigationMenuLink asChild>
                                                                            <Link
                                                                                to="/contacto"
                                                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                            >
                                                                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </NavigationMenuContent>
                                                    </NavigationMenuItem>
                                                </NavigationMenuList>
                                            </NavigationMenu>
                                        ) : (
                                            <Link
                                                to="/contacto"

                                                className="flex items-center justify-between py-2 text-gray-600 hover:text-gray-900"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="flex items-center">
                                                    {item.icon && <span className="mr-2">{item.icon}</span>}
                                                    {item.title}
                                                </span>
                                                <span>›</span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <hr className="my-4" />
                                <div className="text-sm text-gray-600">Redes sociales</div>
                                <div className="flex space-x-6">
                                    <Link to="/contacto"
                                        className="text-gray-600 hover:text-gray-900">
                                        <Facebook />
                                    </Link>
                                    <Link to="/contacto"
                                        className="text-gray-600 hover:text-gray-900">
                                        <Telegram />
                                    </Link>
                                    <Link to="/contacto"
                                        className="text-gray-600 hover:text-gray-900">
                                        <Whatsapp />
                                    </Link>
                                </div>
                                <Button className="w-full rounded-full mt-8">Solicitar cotización</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

