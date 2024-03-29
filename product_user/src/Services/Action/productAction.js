
import { ADDCARTREJ, ADDCARTREQ, ADDCARTRES, ALBUMREJ, ALBUMREQ, ALBUMSUC,} from "../const";
import { collection, addDoc, getDocs, } from "firebase/firestore";
import { db } from "../../firebaseconfig/firebaseconfig";


export const albumReq = () => {
    return {
        type: ALBUMREQ
    }
}

export const albumSuc = (data) => {
    return {
        type: ALBUMSUC,
        payload: data
    }
}

export const albumRej = (err) => {
    return {
        type: ALBUMREJ

    }
}

export const addcartReq =()=>{
    return{
        type : ADDCARTREQ
    }
}

export const addcartRes =()=>{
    return{
        type : ADDCARTRES
    }
}

export const addcartRej =()=>{
    return{
        type : ADDCARTREJ
    }
}





export const albumAction = (data) => {

    return dispatch => {
        dispatch(albumReq())

        addDoc(collection(db, "e-com"), data)
            .then(() => {
                dispatch(getdata());
            })
            .catch((err) => {
                dispatch(albumRej(err));
            });
    }
}



export const getdata = () => {
    return (dispatch) => {
        dispatch(albumReq());
        getDocs(collection(db, "e-com"))
            .then((res) => {
                let alldata = [];
                res.forEach((doc) => {
                    let obj = { id: doc.id, ...doc.data() }
                    alldata = [...alldata, obj];
                });
                dispatch(albumSuc(alldata));
            })
            .catch((error) => {
                dispatch(albumRej(error));
            });
    };
};

export const addcart = ()=>{
    return dispatch =>{
        dispatch(addcartReq());
        
    }
}


