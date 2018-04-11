import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
//import reducers from './reducers';
import createSagaMiddleware  from 'redux-saga';
import fetchPostsSaga from './ducks/operations';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostShow from './components/posts_show';
import promise from 'redux-promise';
import reducer from './ducks';

const sagaMiddleware = createSagaMiddleware();
//const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStore(reducer, applyMiddleware(sagaMiddleware));


//sagaMiddleware.run(fetchPostsSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
