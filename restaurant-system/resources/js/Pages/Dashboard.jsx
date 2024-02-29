import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminOrderQueue from './AdminOrderQueue';
import AdminAddOrder from './AdminAddOrder';
import AdminItemMenu from './AdminItemMenu';

export default function Dashboard({ auth, token,items}) {
    
    console.table(items)

  


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Welcome {auth.user.name}</div>
                    </div>
                </div>
            </div>


            <AdminOrderQueue accessToken = {token} />

            <AdminAddOrder accessToken = {token} />


            <div className="row">
                <div className="col-12">

                <AdminItemMenu items = {items} />
                </div>
            </div>
            


            
        </AuthenticatedLayout>
    );
}
