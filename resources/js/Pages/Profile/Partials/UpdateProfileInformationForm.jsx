import InputError from '@/Components/InputError';
import {Link, useForm, usePage} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";

export default function UpdateProfileInformation({mustVerifyEmail, status}) {
    const user = usePage().props.auth.user;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <Card>
            <form onSubmit={submit} >
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account's profile information and email address.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="max-w-xl">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name"
                               className="mt-1 block w-full"
                               value={data.name}
                               onChange={(e) => setData('name', e.target.value)}
                               required
                               autoComplete="name" />
                        <InputError className="mt-2" message={errors.name}/>
                    </div>

                    <div className="mt-4 max-w-xl">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email"
                               type="email"
                               className="mt-1 block w-full"
                               value={data.email}
                               onChange={(e) => setData('email', e.target.value)}
                               required
                               autoComplete="username" />
                        <InputError className="mt-2" message={errors.email}/>
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="text-sm mt-2 text-gray-800">
                                Your email address is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            {status === 'verification-link-sent' && (
                                <div className="mt-2 font-medium text-sm text-green-600">
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}
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
