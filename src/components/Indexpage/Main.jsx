import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchData ,DeleteData } from '../../features/Product';
import Header from '../header/Header';
import { AddtoCart } from '../../features/CartData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Main() {
  const nevigate = useNavigate();
  const data = useSelector((state) => state.product.users);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData());
  },[])
  // console.log(data);
  const image = {
    height : 300,
    width : '90%'
  }
  const handleEdit = (id) =>{
    nevigate(`/updateproduct/${id}`);
  }
  const handleCart = (item) => {
    dispatch(AddtoCart(item));
    toast.success('Add to cart', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  const handleDelete = (id) => {
    dispatch(DeleteData(id));
    toast.error('Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  } 
  return (
    <React.Fragment>
      <Header />
      <div className='row mt-2'>
        <div className='col-11' >
        </div>
        <div className='col-1 lg'>
            <button className='btn btn-outline-warning'>
              sort
            </button>
        </div>
      </div>
      <main className='row container'>
        {
          data.map((item) =>{
            return (
              <div className='col-12 mt-4 '>
               <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.imageUrl} className="img-fluid rounded-start" alt='product-Image' style={image} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.ProductName}</h5>
                      <p className="card-text">{item.Description}</p>
                      <p className="card-text"><small className="text-body-secondary fs-2">${item.Price}</small></p>
                      <button  className="btn btn-primary me-2" onClick={() => handleCart(item)}>Add to cart</button>
                      <button  className="btn btn-warning me-2" onClick={() => handleEdit(item.id)}><i className='fa fa-pencil'></i></button>
                      <button  className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>
                      <i className='fa fa-trash'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )
          })
        }
      </main>
      <ToastContainer />
    </React.Fragment>
  )
}

export default Main
