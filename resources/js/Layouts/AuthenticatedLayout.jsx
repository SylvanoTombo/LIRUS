import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';

import { AvatarIcon, HamburgerMenuIcon, BellIcon, HomeIcon } from '@radix-ui/react-icons'

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"

export default function Authenticated({user, header, children, appName}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-white md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">

                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <ApplicationLogo
                                className="block h-9 w-auto fill-current text-gray-800"/>
                            <span className="">{appName}</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <BellIcon className="h-4 w-4"/>
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href={route('dashboard')}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <HomeIcon className="h-4 w-4"/>
                                Dashboard
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <HamburgerMenuIcon className="h-5 w-5"/>
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <ApplicationLogo
                                        className="block h-8 w-auto fill-current text-gray-800"/>
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <HomeIcon className="h-5 w-5"/>
                                    Dashboard
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="flex-1"></div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <AvatarIcon className="h-5 w-5"/>
                                <span className="sr-only">{user.name}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{ user.name }</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem asChild>
                                <Link href={route('profile.edit')}>Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem asChild>
                                <Link href={route('logout')} method="post" as="button">Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
                    {children}
                </main>
            </div>
        </div>
    )

}
