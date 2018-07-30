import axios from 'axios'

const GET_SIZES = 'GET_SIZES'
const actionCreator = (sizes)=>{
    return{
        type: GET_SIZES,
        payload: sizes
    }
}
export const getSizes =  (id)=>{
    return async (dispatch)=>{
        const {data} = await axios.get(`/api/products/size/${id}`)
        const action = actionCreator(data)
        dispatch(action)
    }
}


const SELECTED_SIZE= 'SELECTED_SIZE'
export const selectSize = (size)=>{
    return{
        type: SELECTED_SIZE,
        payload: size
    }
}

const initialState = {allSizes: [], selectedSize: 0}

const reducer = (state= initialState , action )=>{
    switch(action.type){
        case GET_SIZES: return {...state, allSizes: action.payload}
        case SELECTED_SIZE: return {...state, selectedSize: action.payload}
        default: return state
    }
}

export default reducer
