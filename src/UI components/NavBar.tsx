import {useEffect, useState} from "react";

function NavBar() {
    const [theme, setTheme] = useState(localStorage.getItem('theme')); // Default to 'day'
    const [initialized, setInitialized] = useState(false); // Track if theme has been initialized

    // Fetch theme from cookie and set as initial state when component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme && !initialized) {
            setTheme('day');
            setInitialized(true); // Theme has been initialized
        }
    }, []); // Empty dependency array to run only once on mount

    useEffect(() => {
        if (theme) { // Only update localStorage if theme is initialized and not null
            localStorage.setItem('theme', theme);
            console.log(`Theme from local storage: ${localStorage.getItem('theme')}`);
        }
    }, [theme, initialized]); // Listen for changes in theme state and initialized state

    // Toggle theme between 'day' and 'night' when the user clicks the label
    const toggleTheme = () => {
        const newTheme = theme === 'day' ? 'night' : 'day';
        setTheme(newTheme);
    };

    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <ul className={'menu menu-horizontal md:flex md:flex-wrap md:justify-between'}>
                    <li>
                        <a className="btn btn-ghost text-base-content text-xl items-center group"
                           href="/">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-home-2 stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent"
                                 width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                                <path d="M10 12h4v4h-4z"/>
                            </svg>
                            <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                                Home
                            </p>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-ghost text-base-content text-xl items-center group"
                           href="/drivers">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-helmet stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent"
                                 width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16z"/>
                                <path
                                    d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5"/>
                            </svg>
                            <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                                Drivers
                            </p>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-ghost text-base-content text-xl items-center group"
                           href="/teams">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-users-group stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent"
                                 width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"/>
                                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                                <path d="M17 10h2a2 2 0 0 1 2 2v1"/>
                                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                                <path d="M3 13v-1a2 2 0 0 1 2 -2h2"/>
                            </svg>
                            <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                                Teams
                            </p>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-ghost text-base-content text-xl items-center group"
                           href="/standings">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-report-analytics stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent"
                                 width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                                <path d="M9 17v-5"/>
                                <path d="M12 17v-1"/>
                                <path d="M15 17v-3"/>
                            </svg>
                            <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                                Standings
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <label className="cursor-pointer grid place-items-center w-fit mr-5">
                    <input type="checkbox" value={'night'} onClick={toggleTheme}
                           defaultChecked={localStorage.getItem('theme') === 'night'}
                           className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                         xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                    </svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                         xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>

            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="avatar btn btn-ghost btn-circle">
                        <div className="w-10 rounded-full bg-formula-pfp-6 bg-cover"/>
                    </div>
                    <ul tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge badge-warning badge-outline">W.I.P.</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-between">
                                Settings
                                <span className="badge badge-warning badge-outline">W.I.P.</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-between" href={'/signin'}>
                                Sign in
                                <span className="badge badge-warning badge-outline">W.I.P.</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-between">
                                Log out
                                <span className="badge badge-warning badge-outline">W.I.P.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default NavBar