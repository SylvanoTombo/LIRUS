import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";

import { AvatarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Authenticated({ user, children, appName }) {
    const { url } = usePage();
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href={route("dashboard")}
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <ApplicationLogo className="block h-8 w-auto fill-current text-gray-800" />
                        <span className="sr-only">{appName}</span>
                    </Link>
                    <Link
                        href={route("dashboard")}
                        className={
                            "transition-colors hover:text-foreground " +
                            (url === "/dashboard"
                                ? "text-foreground"
                                : "text-muted-foreground")
                        }
                    >
                        Dashboard
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <HamburgerMenuIcon className="h-5 w-5" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <span className="sr-only">{appName}</span>
                            </Link>
                            <Link
                                href={route("dashboard")}
                                className={
                                    "transition-colors hover:text-foreground " +
                                    (url === "/dashboard"
                                        ? "text-foreground"
                                        : "text-muted-foreground")
                                }
                            >
                                Dashboard
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full"
                            >
                                <AvatarIcon className="h-5 w-5" />
                                <span className="sr-only">{user.name}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={route("profile.edit")}>
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                {children}
            </main>
        </div>
    );
}
