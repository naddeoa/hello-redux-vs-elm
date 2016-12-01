import {Record, List} from 'immutable';

const Thread = new Record({
    messages: new List()
});

export default Thread;

export const emptyThread = new Thread();

