import {useEffect, useReducer, useState} from "react";
import {loadingReducer} from "./LoadingReducer";

const initialState = {
    isLoading: true
};

export const useHttpGetRequest = (URL) => {

    const [users , setUsers] = useState([])
    const [state, dispatch] = useReducer(loadingReducer, initialState);

    useEffect(() => {
        dispatch({type:'LOADING'})
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                dispatch({type:'FINISHED'})
                setUsers(json)
            })
    },[])

    return {users , isLoading: state.isLoading}

}