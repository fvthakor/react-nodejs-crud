import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';

const Books = lazy(() => import('../components/books/BookList'));
const AddBook = lazy(() => import('../components/books/AddBook'));
const EditBook = lazy(() => import('../components/books/EditBook'));

const Index =  () => {
  return (
    <Router>
      <Switch>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                  <Header></Header>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/books" component={Books}/>
                    <Route path="/book/add" component={AddBook}/>
                    <Route path="/book/edit/:id" component={EditBook}/>
                  </Suspense>
              </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default Index;