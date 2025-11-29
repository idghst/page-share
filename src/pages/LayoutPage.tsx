import { Outlet } from 'react-router-dom';

const ClientLayoutPage = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200">
            <Outlet />
        </div>
    );
};

export default ClientLayoutPage;
