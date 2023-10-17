import Header from "../components/Header";
import Footer from "../components/footer";

const MainLayout = ({ children }) => {
    return (
        <section className="relative min-h-screen bg-slate-50 backdrop-blur dark:bg-slate-900">
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </section>
    );
};

export default MainLayout;
