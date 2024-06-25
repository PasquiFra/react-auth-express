import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function ({ children }) {

    const { isLogged } = useAuth();

    if (!isLogged) return <Navigate to="/auth/login" />

    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    );
}