import {Record} from 'immutable';

var uniqueId = 100;

const Message = new Record({
    id: -1,
    text: ''
});

export default Message;

export const emptyMessage = new Message();

export const newMessage = text => new Message({text: text, id: uniqueId++});


