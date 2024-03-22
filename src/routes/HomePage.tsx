import { useState } from 'react';
import NavigationNavbarComponent from '../components/NavigationBarComponent';

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
