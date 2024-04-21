import {useRef} from 'react';
import InputError from '@/Components/InputError';
import {useForm} from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";

export default function DeleteUserForm() {
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        reset();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>Once your account is deleted, all of its resources and data will be permanently
                    deleted. Before
                    deleting your account, please download any data or information that you wish to
                    retain.
                </CardDescription>
            </CardHeader>
            <CardContent>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <form onSubmit={deleteUser}>
                            <DialogHeader>
                                <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                                <DialogDescription>
                                    Once your account is deleted, all of its resources and data will be
                                    permanently deleted.
                                    Please
                                    enter your password to confirm you would like to permanently delete your
                                    account.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password"
                                       type="password"
                                       name="password"
                                       ref={passwordInput}
                                       value={data.password}
                                       autoComplete="current-password"
                                       onChange={(e) => setData('password', e.target.value)}
                                       required
                                />
                                <InputError message={errors.password} className="mt-2"/>
                            </div>
                            <DialogFooter>
                                <div className="mt-4 flex space-x-4">
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit" variant="destructive" disabled={processing}>Delete</Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
