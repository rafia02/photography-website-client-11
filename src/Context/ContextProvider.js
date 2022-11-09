import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';


export const AuthContex = createContext()
const auth = getAuth(app)

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const googleSignin = ()=>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const signup =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const login =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
       return signOut(auth)
    }

    const userUpdateProfile =(phofile)=>{
        return updateProfile(auth.currentUser, phofile)
    }
    
    useEffect(()=>{
        const unsbscrib = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
    },[])

    const authInfo ={googleSignin, userUpdateProfile, login, setLoading, user,  signup, logout}

    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default ContextProvider;