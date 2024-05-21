function SignUp() {
    return (<div
            className="bg-cover bg-center bg-no-repeat bg-fixed h-screen w-screen bg-formula-login-background m-0 flex flex-col justify-center items-center">
            <div hidden={true}>
                <label className="cursor-pointer grid place-items-center w-fit mr-5">
                    <input type="checkbox" value={'night'}
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
            <section className="absolute right-24 items-center ">
                <div className="w-full bg-base-300/30 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-base-content md:text-2xl">
                            Sign up
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-base-content">Username
                                </label>
                                <input type="text" name="username" id="username"
                                       className="bg-base-300 border border-gray-300 text-base-content sm:text-sm rounded-lg focus:ring-base-600 focus:border-base-600 block w-full p-2.5 placeholder-base-content"
                                       placeholder="Username" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-base-content">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-base-300 border border-gray-300 text-base-content sm:text-sm rounded-lg focus:ring-base-600 focus:border-base-600 block w-full p-2.5 placeholder-base-content"
                                       placeholder="your@email.com" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="emailconfirmation"
                                       className="block mb-2 text-sm font-medium text-base-content">Confirm
                                    your email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-base-300 border border-gray-300 text-base-content sm:text-sm rounded-lg focus:ring-base-600 focus:border-base-600 block w-full p-2.5 placeholder-base-content"
                                       placeholder="your@email.com" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-base-content">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••••••••••"
                                       className="bg-base-300 border border-gray-300 text-base-content sm:text-sm rounded-lg focus:ring-base-600 focus:border-base-600 block w-full p-2.5 placeholder-base-content"
                                       required={true}/>
                            </div>
                            <div>
                                <label htmlFor="passwordconfirmation"
                                       className="block mb-2 text-sm font-medium text-base-content">Confirm
                                    password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••••••••••"
                                       className="bg-base-300 border border-gray-300 text-base-content sm:text-sm rounded-lg focus:ring-base-600 focus:border-base-600 block w-full p-2.5 placeholder-base-content"
                                       required={true}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center  h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border bg-accent border-accent rounded focus:ring-3 focus:ring-accent "
                                               required={false}/>
                                    </div>
                                    <div className="ml-3 text-sm font-medium">
                                        <label htmlFor="remember" className="text-base-content">Remember
                                            me</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full text-base-content bg-base-200 rounded-lg text-sm px-5 py-2.5 text-center hover:bg-base-300">Sign
                                up
                            </button>
                            <p className="text-sm font-medium text-base-content">
                                Already have an account?<a href="/formulaoneweb.client/src/Pages/SignIn"
                                                           className="ml-3 font-medium text-primary underline hover:text-secondary">Sign
                                in</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp