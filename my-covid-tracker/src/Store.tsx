import React, { useReducer } from 'react'


interface IState {
    city: []
}

interface IAction {
    type : string,
    payload: any 
}

const initialState: IState ={
    city: []
}

export const Store =React.createContext<IState>(initialState)

const reducer =  (state: IState, action: IAction) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, city: action.payload}                
        default:
            return state
    }    
}

export const StoreProvider = (props:any) => {
    const [state, dispatch] = useReducer(reducer ,initialState)
    return <StoreProvider  value={[state, dispatch]}>{props.children}</StoreProvider>
}