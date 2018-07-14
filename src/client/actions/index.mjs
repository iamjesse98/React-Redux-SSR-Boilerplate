import axios from 'axios'

export const FETCH_MESSAGE = 'fetch_message'

export const fetchMessage = _ => async dispatch => {
    const res = await axios.get('/api')
    dispatch({
        type: FETCH_MESSAGE,
        payload: res
    })
}