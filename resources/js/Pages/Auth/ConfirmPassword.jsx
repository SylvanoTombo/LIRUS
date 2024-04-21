import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <Card>
                <form onSubmit={submit}>
                    <CardHeader>
                        <CardDescription>
                            This is a secure area of the application. Please confirm your password before continuing.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Input id="password"
                                   type="password"
                                   name="password"
                                   value={data.password}
                                   autoComplete="current-password"
                                   onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" disabled={processing}>Confirm</Button>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
