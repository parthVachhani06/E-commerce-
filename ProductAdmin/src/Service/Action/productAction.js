
import { ALBUMREJ, ALBUMREQ, ALBUMSUC, DELETEDATAREJ, DELETEDATAREQ, EDITDATAREJ, EDITDATAREQ, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES } from "../const";
import { collection, addDoc, getDocs, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
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
        type: ALBUMREJ,
        payload: err

    }
}


export const singleDataReq = () => {
    return {
        type: SINGLEDATAREQ
    }
};

export const singleDataRes = (data) => {
    return {
        type: SINGLEDATARES,
        payload: data
    }

};

export const singleDataRej = () => {
    return {
        type: SINGLEDATAREJ

    }
};

export const editDataReq = () => {
    return {
        type: EDITDATAREQ

    }
}

export const editDataRej = () => {
    return {
        type: EDITDATAREJ

    }
}

export const deleteDataReq = () => {
    return {
        type: DELETEDATAREQ

    }
}

export const deleteDataRej = () => {
    return {
        type: DELETEDATAREJ

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

export const singleData = (id) => {


    return async (dispatch) => {

        dispatch(singleDataReq());


        await getDoc(doc(db, 'e-com', `${id}`)).then((res) => {

            if (res.exists()) {
                const obj = { id: id, ...res.data() };
                dispatch(singleDataRes(obj));
            } else {
                dispatch(singleDataRej());
            }
        }).catch((err) => {
            dispatch(singleDataRej(err));
        })


    }

}


export const editData = (data) => {

    return async (dispatch) => {
        dispatch(editDataReq());
       await setDoc(doc(db, 'e-com', `${data.id}`), data).then((res) => {
            dispatch(getdata())
        }).catch((err) => {
            dispatch(editDataRej(err))
        })

    }
}

export const deleteData = (id) => {
    return dispatch => {
        dispatch(deleteDataReq())
        deleteDoc(doc(db, "e-com", `${id}`)).then((res) => {
            dispatch(getdata())
        }).catch((err) => {
            dispatch(editDataRej())
        })
    }
}

