export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="mx-auto max-w-sm p-4">
                {children}
            </div>
        </div>
    );
}
