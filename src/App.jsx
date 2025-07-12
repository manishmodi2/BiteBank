import Navbar from "./components/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <Navbar />
                
                <main className="mt-8">
                    <MainRoutes />
                </main>
                
                <ToastContainer 
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
            
            <footer className="mt-12 py-6 border-t border-gray-800 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Recipe App. All rights reserved.</p>
                <p className="mt-2 text-sm">Made with ❤️ for food lovers</p>
            </footer>
        </div>
    );
};

export default App;