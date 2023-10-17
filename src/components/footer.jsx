import React from "react";

function Footer() {
    return (
        <footer className="w-full border-t-2 py-4">
            <div className="container mx-auto text-center">
                <p className="dark:text-white">
                    &copy; {new Date().getFullYear()} LokerIn
                </p>
            </div>
        </footer>
    );
}

export default Footer;
