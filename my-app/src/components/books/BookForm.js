import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bookService from '../../services/book.service';

const BookForm = (props) => {
    const { id } = useParams();
    const [book, setBook] = useState({
        title: props.book ? props.book.title : '',
        category: props.book ? props.book.category : '',
        quantity: props.book ? props.book.quantity : '',
    });
    const { title, category , quantity } = book;
    const [errorMsg, setErrorMsg] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [title, category, quantity];
        let errorMsg = '';
        console.log(values)
        const allFieldsFilled = values.every((field) => {
          const value = `${field}`.trim();
          return value !== '' && value !== '0';
        });
    
        if (allFieldsFilled) {
          const book = {
            title,
            category,
            quantity
          };
          props.handleOnSubmit(book);
        } else {
          errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          default:
            setBook((prevState) => ({
              ...prevState,
              [name]: value
            }));
        }
      };

      const getBook = () => {
          if(id !== undefined){
            bookService.get(id)
            .then(response => {
                console.log(response)
                setBook(response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
          }
        
    }
    useEffect(() => {
        getBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (      
        <div>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <form onSubmit={handleOnSubmit}>
                <div class="form-group">
                    <label>Title</label>
                    <input class="form-control" name="title" value={title} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input class="form-control" name="category" value={category} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Quantity</label>
                    <input class="form-control" name="quantity" value={quantity} onChange={handleInputChange} />
                </div>
                <button type="submit" class="btn btn-success">Save</button>
            </form>
        </div>
    );
  }
  export default BookForm;
  