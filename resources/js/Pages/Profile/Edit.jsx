import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head} from '@inertiajs/react';

export default function Edit({auth, mustVerifyEmail, status, appName}) {
    return (
        <AuthenticatedLayout
            appName={appName}
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                    <UpdatePasswordForm/>
                    <DeleteUserForm />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
