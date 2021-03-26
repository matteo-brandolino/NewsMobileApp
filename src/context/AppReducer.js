//how state changes

export default (state,action) =>{
    switch(action.type){
        case 'SET_QUERY':
            return{
                ...state,
                query :action.payload
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: true,
            }
        case 'SET_SUCCESS':
            return{
                ...state,
                loading: false,
            }
        default:
            return state
    }
}