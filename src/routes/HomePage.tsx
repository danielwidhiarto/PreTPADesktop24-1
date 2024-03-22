import { Link as RouterLink } from 'react-router-dom';
import NavigationNavbarComponent from '../components/NavigationBarComponent';
import { getCurrent } from '@tauri-apps/api/window';
import { useState } from 'react';

export default function HomePage() {
    const [greeting, setGreeting] = useState("hello world!");

    function changeText() {
        setGreeting("Halo dunia!");
    }

    return (
        <div className="h-screen">
            <NavigationNavbarComponent />
            <h1>{greeting}</h1>
            <button onClick={changeText}>Click me!</button>
        </div>
    );
}
