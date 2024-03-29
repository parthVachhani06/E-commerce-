import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES } from "../const";
import  {auth,provider } from "../../firebaseconfig/firebaseconfig";

export const signUpReq = () => {
    return {
        type: SIGNUPREQ

    }
};

export const signUpRes = () => {
    return {
        type: SIGNUPRES

    }
};


export const signUpRej = () => {
    return {
        type: SIGNUPREJ

    }
};

export const signInReq = () => {
    return {
        type: SIGNINREQ

    }
};

export const signInRes = () => {
    return {
        type: SIGNINRES

    }
};


export const signInRej = () => {
    return {
        type: SIGNINREJ

    }
};


export const signOutReq = () => {
    return {
        type: SIGNOUTREQ

    }
};
export const signOutRes = () => {
    return {
        type: SIGNOUTRES

    }
};

export const signOutRej = () => {
    return {
        type: SIGNOUTREJ

    }
};

export const googleSigninReq = ()=>{
    return{
        type : GOOGLESIGNINREQ
    }
}

export const googleSigninRes = (data)=>{
    return{
        type : GOOGLESIGNINRES,
        paylod:data
        
    }
}


export const googleSigninRej = ()=>{
    return{
        type : GOOGLESIGNINREJ
    }
}




export const signUpAction = (email, password) => {

    return async dispatch => {

        dispatch(signUpReq());

        await createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(signUpRes(user.email, user.password))
            })

            .catch((error) => {
                dispatch(signUpRej(error))
            });

    }
}

export const signInAction = (email, password) => {
    return async dispatch => {

        dispatch(signInReq());

        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch(signInRes())
        }).catch((error) => {
            console.log(error);
            dispatch(signInRej(error))
        });
    }
}

export const signOutAction = () => {
    return async dispatch => {
        dispatch(signOutReq());

        await signOut(auth).then(() => {
            dispatch(signOutRes())
        }).catch((err) => {
            dispatch(signOutRej(err))
        })

    }
}

export const googleSignin = ()=>{
    return async dispatch =>{
            dispatch(googleSigninReq());

         await signInWithPopup(auth,provider).then((res)=>{
                   dispatch(googleSigninRes(res.user))
            }).catch((err)=>{
                console.log(err);
            })

            dispatch(googleSigninRej());


    }

}


