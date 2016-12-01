import {ActionTypes as MessageActions} from '../actions/message-actions';
import {newMessage} from '../types/message';

export default (state = {}, action) => {
    switch(action.type){
        case MessageActions.CREATE_MESSAGE:
            let a = state.immutable.setIn(['thread', 'messages'], state.immutable.thread.messages.push(newMessage(action.text)));
            let b = a.setIn(['currentMessage', 'text'], '');
            return {
                immutable: b
            };
        case MessageActions.NEW_MESSAGE_CHANGE:
            return {
                immutable: state.immutable.setIn(['currentMessage', 'text'], action.text)
            };
        default:
            return state;
    }
};
