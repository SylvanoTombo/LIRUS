import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import {Head, Link, useForm} from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <Card>
                <form onSubmit={submit}>
                    <CardHeader>
                        <CardTitle className="text-2xl">Forgot your password?</CardTitle>
                        <CardDescription>
                            No problem. Just let us know your email address and we will email you a password reset link
                            that will allow you to choose a new one.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                        <div>
                            <Input id="email"
                                   type="email"
                                   name="email"
                                   value={data.email}
                                   autoComplete="username"
                                   onChange={(e) => setData('email', e.target.value)}
                                   placeholder="john@doe.com"
                                   required
                            />
                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" disabled={processing}>Email Password Reset Link</Button>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
