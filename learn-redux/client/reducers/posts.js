//reducer takes in the action and copy of current state -> returns updated copy of store

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log("incrementing likes");
            const i = action.index;
            //return entire array but just updating for the one post
            return [
                ...state.slice(0,i),
                //taking copy of object at that position
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1),
            ]
        default:
    }
    return state;
}

export default posts;