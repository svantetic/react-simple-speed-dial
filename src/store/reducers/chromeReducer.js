const initialState = {
    extensionFolder: {}
}

const chromeReducer = (state = initialState, action) => {
    if (action.type === 'SET_EXTENSION_FOLDER') {
        state = {
            ...state,
            extensionFolder: action.extensionFolder
        }
    }
    return state;
}

export default chromeReducer;