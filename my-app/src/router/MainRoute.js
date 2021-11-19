import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from '../components/layouts/MainLayout';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Books = lazy(() => import('../components/books/BookList'));
const AddBook = lazy(() => import('../components/books/AddBook'));
const EditBook = lazy(() => import('../components/books/EditBook'));

const MainRoute =  () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
            <MainLayout>
                <Route path="/" component={Dashboard}/>  
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/books" component={Books}/>
                <Route path="/book/add" component={AddBook}/>
                <Route path="/book/edit/:id" component={EditBook}/>
            </MainLayout>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default MainRoute;