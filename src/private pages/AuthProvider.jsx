import React, { createContext } from 'react';
import { auth } from './../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
    const info = {
        createUser,

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;