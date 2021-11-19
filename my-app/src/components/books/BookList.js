import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import Swal from 'sweetalert2'
import bookService from '../../services/book.service';

const BookList = ({ history }) => {
  const [ books, setBooks ] = useState([]);
  
  const deleteBook = (id, event) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        bookService.delete(id)
        .then(response => {
          Swal.fire(
            'Deleted!',
            'Your book has been deleted.',
            'success'
          )
          getBooks()
          // console.log(response)
          // history.push('/books')
          // setBooks(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
    })
  }
  const getBooks = () => {
    bookService.getAll()
    .then(response => {
      console.log(response)
      // history.push('/books')
      setBooks(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }
  useEffect(() => {
    getBooks();
  }, [])
  return (      
    // getBooks(),
    <React.Fragment>
      <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Books</h1>
        </div>

        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Books</h6>
                        <NavLink to="/book/add" className="btn btn-success btn-sm">
                            <i class="fas fa-fw fa-plus"></i><span>Add Book</span>
                        </NavLink>
                    </div>
                    <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {!_.isEmpty(books) ? (
                              books.map((book) => (
                                  <tr key={book._id}>
                                      <td>{book.title}</td>
                                      <td>{book.category}</td>
                                      <td>{book.quantity}</td>
                                      <td>
                                          <button onClick={() => history.push(`/book/edit/${book._id}`)} className="btn btn-primary btn-sm ml-2">
                                              <i class="fa fa-edit"></i>
                                          </button>
                                          <button class="btn btn-sm btn-danger ml-2" onClick={(e) => deleteBook(book._id, e)}>
                                              <i class="fa fa-trash"></i>
                                          </button>
                                      </td>
                                  </tr>
                                  ))
                                  ) : (
                                    <p >No books available. Please add some books.</p>
                                  )}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default BookList;
