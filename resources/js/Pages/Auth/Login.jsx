import {useEffect} from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import {Head, Link, useForm} from '@inertiajs/react';
import {Label} from "@/components/ui/label"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <Card>
                <form onSubmit={submit}>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email"
                                   type="email"
                                   name="email"
                                   value={data.email}
                                   autoComplete="username"
                                   onChange={(e) => setData('email', e.target.value)}
                                   required
                            />
                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                        <div className="grid gap-2 mt-4">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                            <Input id="password"
                                   type="password"
                                   name="password"
                                   value={data.password}
                                   autoComplete="current-password"
                                   onChange={(e) => setData('password', e.target.value)}
                                   required
                            />
                            <InputError message={errors.password} className="mt-2"/>
                        </div>
                        <div className="block mt-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onCheckedChange={(checked) => setData('remember', checked)}/>
                                <Label htmlFor="rememberMe">Remember me</Label>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="block">
                        <div>
                            <Button className="w-full" disabled={processing}>Log in</Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href={route('register')} className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
