import React, { Component } from 'react';
import ThreadView from './views/thread-view';
import {createStore} from 'redux';
import reducers from './reducers/app.js';
import Thread, {emptyThread} from './types/thread';
import Message, {emptyMessage} from './types/message';
import {List, Record} from 'immutable';
import {createMessage, newMessageChanged} from './actions/message-actions';

const State = new Record({
    thread: emptyThread,
    currentMessage: emptyMessage
});

const initialState = new State({
    thread: new Thread({
        messages: new List([
            new Message({id: 1, text: 'First message'}),
            new Message({id: 2, text: 'Second message'}),
            new Message({id: 3, text: 'Third message'})
        ])
    }),
    currentMessage: new Message({id: -2, text: 'fish'})
});

const store = createStore(reducers, {immutable: initialState});
window.store = store;

class App extends Component {
    constructor(){
        super();
        this.state = store.getState();
    }

    componentDidMount(){
        store.subscribe(this.onReduxStoreChange.bind(this));
    }

    onReduxStoreChange(){
        this.setState(store.getState());
    }

    onMessageFieldChange(event){
        store.dispatch(newMessageChanged(event.target.value));
    }

    onInputKeyPress(event){
        if (event.key === 'Enter' && event.target.value) {
            store.dispatch(createMessage(event.target.value));
        }
    }

    render() {
      return (
        <div className="App">
            <ThreadView thread={this.state.immutable.thread} />
            <input
                onChange={this.onMessageFieldChange}
                onKeyPress={this.onInputKeyPress}
                placeholder='enter a message'
                value={this.state.immutable.currentMessage.text}/>
        </div>
      );
    }
}

export default App;
