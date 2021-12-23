import {useState} from 'react';
import InitialState from '../InitialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToGain = payload => {
        setState({
            ...state,
            gains: [...state.gains, payload],
        })
    }
}

export default useInitialState;