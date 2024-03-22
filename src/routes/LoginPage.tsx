// LoginPage.js
import { invoke } from "@tauri-apps/api";
import NavigationNavbarComponent from "../components/NavigationBarComponent";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    function login() {
        invoke('login', {"username": "ED23-1", "password": "ED23-1"})
        .then(() => {
            navigate('/', {replace:true})
        });
    }

    return (
        <div className="h-screen">
            <div className="w-1/2">
                <NavigationNavbarComponent />
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}