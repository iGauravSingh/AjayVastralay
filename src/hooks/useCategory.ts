

import { useEffect, useReducer } from "react";
import axios from "axios";

// {id: 1, categoryName: 'For Baby', categoryIdentity: 'baby' ,categoryImage: cat1},

interface Category {
    id?: number;
    categoryName: string;
    categoryIdentity: string;
    categoryImage: string
}



interface State {
  data: Category[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Category[] }
  | { type: ActionType.FAILED; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useCategoryList = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchCategoryList();
  }, []);

  const fetchCategoryList = async () => {
    //const sessionToken = cookie.get("session_token");
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(
        `http://localhost:8080/category/getall`);
      const CategoryData = response.data
      //console.log('from usecategory', CategoryData)
      dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
    } catch (error: any) {
      //console.log(error);
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response.error,
      });
    }
  };

  

  const addCategory = async (data: Category) => {
    try {
        const response = await axios.post(
          `http://localhost:8080/category/addcategory`,data);
        const CategoryData = response.data
        console.log('from usecategory actegory upload', CategoryData)
        //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
      } catch (error: any) {
        console.log(error);
      }
  }

  const deleteCategory = async (data: any) => {
    try {
        const response = await axios.delete(
          `http://localhost:8080/category/deletecategory/${data}`);
        const CategoryData = response.data
        console.log('from usecategory delete category', CategoryData)
        //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
      } catch (error: any) {
        console.log(error);
      }
  }

  return { data, loading, error, addCategory, deleteCategory };
};

export default useCategoryList;