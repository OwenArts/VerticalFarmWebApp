import {useLocation} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <NavBarOptions/>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-300">
                    <NavBarOptions/>
                </ul>
            </div>
        </div>
    );
}

function NavBarOptions() {
    const location = useLocation();

    return (
        <>
            <li>
                <a className={`btn btn-ghost text-base-content text-xl items-center group ${location.pathname === '/' ? 'text-accent stroke-accent' : ''}`}
                   href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2 stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent" width="44"
                         height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
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
                <a className={`btn btn-ghost text-base-content text-xl items-center group ${location.pathname === '/drawers' ? 'text-accent stroke-accent' : ''}`}
                   href="/drawers">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-leaf stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent" width="44"
                         height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 21c.5 -4.5 2.5 -8 7 -10"/>
                        <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"/>
                    </svg>
                    <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                        Drawers
                    </p>
                </a>
            </li>
            <li>
                <a className={`btn btn-ghost text-base-content text-xl items-center group ${location.pathname === '/settings' ? 'text-accent stroke-accent' : ''}`}
                   href="/settings">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent" width="44"
                         height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path
                            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                    </svg>
                    <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                        Settings
                    </p>
                </a>
            </li>
            {/*
            <li>
                <a className={`btn btn-ghost text-base-content text-xl items-center group ${location.pathname === '/drivers' ? 'text-accent stroke-accent' : ''}`}
                   href="/drivers">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="icon icon-tabler icon-tabler-helmet stroke-base-content transition-colors duration-300 ease-in-out group-hover:stroke-accent"
                         width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5"
                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16z"/>
                        <path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5"/>
                    </svg>
                    <p className="transition-colors duration-300 ease-in-out group-hover:text-accent">
                        Drivers
                    </p>
                </a>
            </li><li>
                <a className={`btn btn-ghost text-base-content text-xl items-center group ${location.pathname === '/teams' ? 'text-accent stroke-accent' : ''}`}
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
                <a className={`btn btn-ghost text-base-content text-xl items-center group ${location.pathname === '/standings' ? 'text-accent stroke-accent' : ''}`}
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
            */}
        </>
    );
}
    