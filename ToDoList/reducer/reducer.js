export const initialState = {
    counter: 0
}
function somereducer(state = initialState, action) {
    switch (action.type) {
        case 'Add':
            return { counter: action.payload }
    }
    return state
}


export default somereducer