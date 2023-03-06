import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";
import Item from "./components/Item";

const initial = {
  favs: [],
  data: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("favs", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("favs"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      return { ...state, favs: [...state.favs, state.current] };

    case FAV_REMOVE:
      return {
        ...state,
        favs: state.favs.filter((Item) => Item.name !== action.payload),
      };

    case FETCH_SUCCESS:
      const dataList = action.payload;
      const rand = Math.floor(Math.random() * dataList.length);
      return {
        ...state,
        data: dataList,
        current: dataList[rand],
      };

    case FETCH_LOADING:
      return { ...state, loading: action.payload };

    case FETCH_ERROR:
      return { ...state, error: action.payload };

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
}
