import {Link as RouterLink} from 'react-router-dom'

export default function NavigationNavbarComponent() {
    return (
        <div className="flex flex-row w-screen justify-between items-center px-12 py-4 shadow-sm">
            <div className="flex flex-row items-center gap-4">
                <p className="text-3xl font-bold">
                    LOGO
                </p>
                <RouterLink to={"/"}>
                    <p className="text-xl">
                        home
                    </p>
                </RouterLink>
            </div>
            <div className="flex flex-row items-center">
                <RouterLink to={"/auth/login"}>
                    <p className="text-xl">
                        login
                    </p>
                </RouterLink>
            </div>
        </div>
    )
}