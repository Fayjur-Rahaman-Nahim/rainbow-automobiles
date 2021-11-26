import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialize from "../Pages/Login/Firebase/firebase.init"

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(false)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                const destination = location?.state?.from || '/';
                history.push(destination);
                saveUser(email, name, 'POST');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(true));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(false)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(true));
    }

    const googleSignIn = (location, history) => {
        setIsLoading(false);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUser(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(true))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({});
            }
            setIsLoading(true);
        });
    }, []);

    useEffect(() => {
        fetch(`https://frozen-bayou-71820.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://frozen-bayou-71820.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    const logOut = (history) => {
        signOut(auth).then(() => {
            history.push('/');
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(true));
    }

    return {
        user,
        admin,
        token,
        error,
        googleSignIn,
        registerUser,
        loginUser,
        isLoading,
        logOut
    }

}

export default useFirebase;