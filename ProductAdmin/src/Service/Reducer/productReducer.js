import { ALBUMREJ, ALBUMREQ, ALBUMSUC, DELETEDATAREJ, DELETEDATAREQ, EDITDATAREJ, EDITDATAREQ, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES } from "../const";

const initialState = {
  isLoading: false,
  err: false,
  albums: [],
  album: null
}

export const producReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALBUMREQ:
      return {
        ...state,
        isLoading: true
      };

    case ALBUMSUC:
      return {
        ...state,
        isLoading: false,
        albums: action.payload
      };

    case ALBUMREJ:
      return {
        ...state,
        err: action.payload,
        isLoading: false
      };


    case SINGLEDATAREQ:
      return {
        ...state,
        isloading: true,
      }

    case SINGLEDATARES:
      return {
        ...state,
        isloading: false,
        album: action.payload,
        error: null,
      }

    case SINGLEDATAREJ:
      return {
        ...state,
        isloading: false,
        error: "Error..."
      }


    case EDITDATAREQ:
      return {
        ...state,
        isloading: true,
      }


    case EDITDATAREJ:
      return {
        ...state,
        isloading: false,
        error: "Error..."
      }

    case DELETEDATAREQ:
      return {
        ...state,
        isloading: true,
      }


    case DELETEDATAREJ:
      return {
        ...state,
        isloading: false,
        error: "Error..."
      }

    default:
      return state;
  }
}