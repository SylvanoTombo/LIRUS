import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Card>
                <form onSubmit={submit}>
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>Enter your information to create an account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name"
                                   type="name"
                                   name="name"
                                   value={data.name}
                                   autoComplete="name"
                                   onChange={(e) => setData('name', e.target.value)}
                                   required
                            />
                            <InputError message={errors.name} className="mt-2"/>
                        </div>
                        <div className="mt-4">
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
                        <div className="mt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password"
                                           type="password"
                                           name="password"
                                           value={data.password}
                                           autoComplete="new-password"
                                           onChange={(e) => setData('password', e.target.value)}
                                           required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                                    <Input id="password_confirmation"
                                           type="password"
                                           name="password_confirmation"
                                           value={data.password_confirmation}
                                           autoComplete="new-password"
                                           onChange={(e) => setData('password_confirmation', e.target.value)}
                                           required
                                    />
                                </div>
                            </div>
                            <InputError message={errors.password} className="mt-2"/>
                            <InputError message={errors.password_confirmation} className="mt-2"/>
                        </div>
                    </CardContent>
                    <CardFooter className="block">
                        <div>
                            <Button className="w-full" disabled={processing}>Create an account</Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account? {" "}
                            <Link href={route('login')} className="underline">
                                Sign In
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
