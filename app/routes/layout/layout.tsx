import Footer from "~/components/common/footer/Footer";
import type { Route } from "../../+types/root";
import TopNavBar from "~/components/common/top-navBar/top-navBar";
import { Outlet } from "react-router";
import "./layout.css"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Leauge Of Legends | Javir" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function MainLayout() {
    
    return (
        <div className="main-layout-container">
             <div className="layout-background" />
           <TopNavBar/>
            <main className="main-layout-section">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}