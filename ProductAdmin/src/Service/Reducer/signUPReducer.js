// import { SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES } from "../const"

// const initialState = {
//     isLoading: false,
//     err: null,
//     islogin: false,
//     issignUp: false,
//     user: null,
// }

// export const signUpReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SIGNUPREQ:
//             return {
//                 ...state,
//                 isLoading: true,
//             };

//         case SIGNUPRES:
//             return {
//                 ...state,
//                 isLoading: false,
//                 issignUp: true,
//             };

//         case SIGNUPREJ:
//             return {
//                 ...state,
//                 err: "error"
//             };

//         case SIGNINREQ:
//             return {
//                 ...state,
//                 isLoading: true,
//             };

//         case SIGNINRES:
//             return {
//                 ...state,
//                 isLoading: false,
//                 islogin: true,
//             };

//         case SIGNINREJ:
//             return {
//                 ...state,
//                 err: "error"
//             };


//         case SIGNOUTREQ:
//             return {
//                 ...state,
//                 isLoading: true,
//             };

//         case SIGNOUTRES:
//             return {
//                 ...state,
//                 isLoading: false,
//                 islogin: false,
//                 user: null

//             };

//         case SIGNOUTREJ:
//             return {
//                 ...state,
//                 isLoading: false,
//                 err: "somting went worong"
//             };

//         default:
//             return state
//     }
// }


import { GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES } from "../const"

const initialState = {
    isLoading: false,
    err: null,
    islogin: false,
    issignUp: false,
    user: null

}

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUPREQ:
            return {
                ...state,
                isLoading: true,
            };

        case SIGNUPRES:
            return {
                ...state,
                isLoading: false,
                issignUp: true,
            };

        case SIGNUPREJ:
            return {
                ...state,
                err: "error"
            };

        case SIGNINREQ:
            return {
                ...state,
                isLoading: true,
            };

        case SIGNINRES:
            return {
                ...state,
                isLoading: false,
                islogin: true,
            };

        case SIGNINREJ:
            return {
                ...state,
                err: "error"
            };


        case SIGNOUTREQ:
            return {
                ...state,
                isLoading: true,
            };

        case SIGNOUTRES:
            return {
                ...state,
                isLoading: false,
                islogin: false,
                user: null

            };

        case SIGNOUTREJ:
            return {
                ...state,
                isLoading: false,
                err: "somting went worong"
            };

        case GOOGLESIGNINREQ:
            return {
                ...state,
                isLoading: true,
            }


        case GOOGLESIGNINRES:
            return {
                ...state,
                isLoading: false,
                islogin:true,
                user:action.paylod
                
            }

            case GOOGLESIGNINREJ:
                return{
                    ...state,
                    isLoading:false,
                    err:"Google Account Not Found"
                    
                }



        default:
            return state
    }
}