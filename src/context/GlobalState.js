import React , { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    query: '',
    loading:false
}

//create context
export const GlobalContext = createContext(initialState);

//Provide component
export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer, initialState);

    //Actions //describe what we happened //dispatch is kind of setState

    async function setQuery( value ) {
        try {
            dispatch({
                type:'SET_QUERY',
                payload: value
            })
        } catch (err) {
            console.log(err);
        }
    }
    async function setLoading() {
        try {
            dispatch({
                type:'SET_LOADING',
                payload: true
            })
        } catch (err) {
            console.log(err);
        }
    }
    async function setSuccess( value ) {
        try {
            dispatch({
                type:'SET_SUCCESS',
                payload: false
            })
        } catch (err) {
            console.log(err);
        }
    }

    return ( <GlobalContext.Provider 
        value={{
        query: state.query,
        loading:state.loading,
        setQuery,
        setLoading,
        setSuccess
    }}>
        {children}
    </GlobalContext.Provider>

    )
}