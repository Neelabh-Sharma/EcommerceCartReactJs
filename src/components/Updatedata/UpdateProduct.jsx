import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../header/Header';
import { UpdateData } from '../../features/Product';

function UpdateProduct() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const nevigate = useNavigate();
    const data = {
        "ProductName": "",
        "imageUrl": "",
        "Price": 999,
        "Description": "",
    }
  const [updatedData, setUpdatedData] = useState(data);
  const { users, loading } = useSelector((state) => state.product);
  useEffect(() => {
    //retrieving single data from user list
    if (id) {
      const singleData = users.find((user) => user.id === id);
      console.log("singledata preload on edit page...", singleData);
      setUpdatedData({ ...singleData });
    }
  }, []);
    // updating state as use changes input field data
    const newData = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
        console.log(updatedData);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("update data..", updatedData);
        dispatch(UpdateData(updatedData));
        setUpdatedData(data);
        nevigate("/");
      };
      if (loading) {
        return <h2>Loading..</h2>;
      }    
  return (
    <React.Fragment>
     <Header />
      <div className='container'>
        <h1>Update Your Product</h1>
        <form class="row g-3 needs-validation mt-3" novalidate  onSubmit={handleSubmit}>
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Product name</label>
                <input type="text" class="form-control" name='name' id="validationCustom01" defaultValue={updatedData.ProductName}
              onChange={newData} required />
            </div>
            <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Image Url</label>
                <input type="text" class="form-control" name='image' id="validationCustom02" defaultValue={updatedData.imageUrl}
              onChange={newData} required />
            </div>
            <div class="col-md-9">
                <label for="validationCustom03" class="form-label">Product Description</label>
                <input type="text" class="form-control" name='description' id="validationCustom03" defaultValue={updatedData.Description}
              onChange={newData} required />
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">Price</label>
                <input type="number" class="form-control" name='price' id="validationCustom05" defaultValue={updatedData.Price}
              onChange={newData} required />
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
    </React.Fragment>
  )
}

export default UpdateProduct
