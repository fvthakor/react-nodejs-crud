import { NavLink } from 'react-router-dom';
import BookForm from './BookForm'
import BookDataService from "../../services/book.service";
const AddBook = ({ history }) => {
    const handleOnSubmit = (book) => {
        // console.log(book)
        BookDataService.save(book)
        .then(response => {
            console.log(response)
            history.push('/books')
            // setErrorMsg({message:response.data.message});
          })
          .catch(e => {
            console.log(e);
          });
        // history.push('/');
    };
    return (      
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Add Book</h1>
            </div>
    
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="card shadow mb-4">
                        <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Add Book</h6>
                            <NavLink to="/books" className="btn btn-danger btn-sm">
                                <i class="fas fa-fw fa-arrow-left"></i><span>Back</span>
                            </NavLink>
                        </div>
                        <div class="card-body">
                            <BookForm handleOnSubmit={handleOnSubmit}/>             
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
    );
  }
  export default AddBook;
  