import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AddProduct} from '../../features/Product';
import Header from '../header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addproduct() {
    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const product = {
            ProductName: formData.get('name'),
            Description: formData.get('description'),
            Price: formData.get('price'),
            imageUrl: formData.get('image'),
            Quantity: 1,
            }
            dispatch(AddProduct(product));
            toast.success('Add SuccesFul', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() =>{
                nevigate('/');
            },2000);
            }
  return (
    <React.Fragment>
    <Header />
    <div className='container'>
        <h1>Add Your Product</h1>
        <form class="row g-3 needs-validation mt-3" novalidate onSubmit={(e) => handleSubmit(e) }>
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Product name</label>
                <input type="text" class="form-control" name='name' id="validationCustom01" required />
            </div>
            <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Image Url</label>
                <input type="text" class="form-control" name='image' id="validationCustom02" required />
            </div>
            <div class="col-md-9">
                <label for="validationCustom03" class="form-label">Product Description</label>
                <input type="text" class="form-control" name='description' id="validationCustom03" required />
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">Price</label>
                <input type="number" class="form-control" name='price' id="validationCustom05" required />
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
            </form>
    </div>
    <ToastContainer />
    </React.Fragment>
  )
}

export default Addproduct
