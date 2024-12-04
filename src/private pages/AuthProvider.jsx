import React, { createContext } from 'react';
import { auth } from './../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    // Create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Logged in a user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logged out a user
    const logoutUser = () => {
        return signOut(auth)
    }
    const info = {
        createUser,
        loginUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;