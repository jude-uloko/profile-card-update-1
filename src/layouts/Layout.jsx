import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../Burger';

export default function Layout() {
    return (
        <div>
            {/* Persistent Navigation Bar */}
            <NavBar />

            {/* Dynamic page content */}

            <main className='main-content'>
                <Outlet />
            </main>

            {/* Persistent Footer */}
            <Footer />
        </div>
    )
}