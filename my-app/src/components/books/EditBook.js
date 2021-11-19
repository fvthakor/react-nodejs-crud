import { useParams, NavLink } from 'react-router-dom';
import BookForm from './BookForm'
import BookDataService from "../../services/book.service";
const EditBook = ({ history }) => {
    const { id } = useParams();

    const handleOnSubmit = (book) => {
        BookDataService.update(id, book)
        .then(response => {
            history.push('/books')
          })
          .catch(e => {
            console.log(e);
          });
    };
    return (      
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit Book</h1>
            </div>
    
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="card shadow mb-4">
                        <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Edit Book</h6>
                            <NavLink to="/books" className="btn btn-danger btn-sm">
                                <i class="fas fa-fw fa-arrow-left"></i><span>Back</span>
                            </NavLink>
                        </div>
                        <div class="card-body">
                            <BookForm book={id} handleOnSubmit={handleOnSubmit}/>             
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
    );
  }
  export default EditBook;
  