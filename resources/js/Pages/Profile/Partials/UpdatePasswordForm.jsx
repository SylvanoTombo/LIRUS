import { useRef } from 'react';
import InputError from '@/Components/InputError';
import {Link, useForm} from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Card>
            <form onSubmit={updatePassword} >
                <CardHeader>
                    <CardTitle>Update Password</CardTitle>
                    <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-w-xl">
                        <Label htmlFor="current_password">Current Password</Label>
                        <Input id="current_password"
                               className="mt-1 block w-full"
                               value={data.current_password}
                               onChange={(e) => setData('current_password', e.target.value)}
                               required
                               autoComplete="current-password"/>
                        <InputError className="mt-2" message={errors.current_password}/>
                    </div>

                    <div className="mt-4 max-w-xl">
                        <Label htmlFor="password">New Password</Label>
                        <Input id="password"
                               type="password"
                               className="mt-1 block w-full"
                               value={data.password}
                               onChange={(e) => setData('password', e.target.value)}
                               required
                               autoComplete="new-password"/>
                        <InputError className="mt-2" message={errors.password}/>
                    </div>

                    <div className="mt-4 max-w-xl">
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input id="password_confirmation"
                               type="password"
                               className="mt-1 block w-full"
                               value={data.password_confirmation}
                               onChange={(e) => setData('password_confirmation', e.target.value)}
                               required
                               autoComplete="current-password" />
                        <InputError className="mt-2" message={errors.password_confirmation}/>
                    </div>

                </CardContent>
                <CardFooter className="flex flex-col justify-center items-start space-y-4">
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                    <Button disabled={processing}>Save</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
