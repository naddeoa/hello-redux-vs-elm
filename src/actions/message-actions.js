
export const ActionTypes = {
    CREATE_MESSAGE: 'CREATE_MESSAGE',
    NEW_MESSAGE_CHANGE: 'MESSAGE_CHANGE'
}

export const createMessage = text  => {
    return {
        type: ActionTypes.CREATE_MESSAGE,
        text: text
    };
};

export const newMessageChanged = text => {
    return {
        type: ActionTypes.NEW_MESSAGE_CHANGE,
        text: text
    }
};

