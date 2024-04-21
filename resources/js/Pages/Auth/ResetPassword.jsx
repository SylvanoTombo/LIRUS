import {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import {Head, useForm} from '@inertiajs/react';
import {Card, CardContent, CardFooter} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function ResetPassword({token, email}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        token: token,
        email: email,
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

        post(route('password.store'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password"/>

            <Card>
                <form onSubmit={submit}>
                    <CardContent>
                        <div className="mt-4">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email"
                                   type="email"
                                   name="email"
                                   value={data.email}
                                   autoComplete="username"
                                   onChange={(e) => setData('email', e.target.value)}
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
                                    />
                                </div>
                            </div>
                            <InputError message={errors.password} className="mt-2"/>
                            <InputError message={errors.password_confirmation} className="mt-2"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" disabled={processing}>Reset Password</Button>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
