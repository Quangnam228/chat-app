import React,{ useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../fireBase/config';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const unSubscibed = auth.onAuthStateChanged((user) => {
        if (user) {
            const { displayName, email, uid, photoURL } = user;
            setUser({
                displayName,
                email,
                uid,
                photoURL,
            });
            setIsLoading(false);
            const homePage = () => {
                navigate("/");
            }
            homePage();
            return;
        }

        // reset user info
        setUser({});
        setIsLoading(false);
        const submit = () => {
            navigate("/login");
        }
        submit();
    });

    // clean function
    return () => {
        unSubscibed();
    };
}, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin style={{ position: 'fixed', inset: 0 }} /> : children}
        </AuthContext.Provider>
    );
}

