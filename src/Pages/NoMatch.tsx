import React, {useState} from "react";
import ErrorAlert from "../Alert/ErrorAlert.tsx";
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NoMatch() {
    const [showError, setShowError] = useState(false);
    const notify = () => toast.warning('This feature is not available.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

    return (
        <main className="grid w-screen min-h-screen place-items-center bg-leaves-background bg-no-repeat bg-cover px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center bg-base-300 rounded-md p-24">
                <p className="text-accent font-bold text-2xl">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-base-content sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-base-content">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="rounded-md bg-base-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                        hover:bg-base-200 hover:text-base-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </a>
                    <a className="text-sm font-semibold text-base-content" onClick={notify}>
                        Contact support <span aria-hidden="true">→</span>
                    </a>
                </div>
                <ToastContainer/>
                {showError && <ErrorAlert message={"This feature is not available"}/>}
            </div>
        </main>
    );
}
