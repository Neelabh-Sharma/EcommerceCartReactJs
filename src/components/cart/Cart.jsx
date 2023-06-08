import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header/Header'
import { Fetchdata  , DeleteData , UpdateData} from '../../features/CartData'
function Cart() {
  const data = useSelector((state) => state.cart.users)
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(Fetchdata());
  },[]);
  const image = {
    height : 300,
    width : '90%'
  }
  const handlePlus = (item) =>{
      const Udata = {
        id : item.id,
        ProductName: item.ProductName,
        Description: item.DeleteData,
        Price: item.Price,
        imageUrl: item.imageUrl,
        Quantity: item.Quantity + 1,
      }
      dispatch(UpdateData(Udata));
  }
  const handleMinus = (item) =>{
    if(item.Quantity > 1){
      const Udata = {
        id : item.id,
        ProductName: item.ProductName,
        Description: item.DeleteData,
        Price: item.Price,
        imageUrl: item.imageUrl,
        Quantity: item.Quantity - 1,
      }
      dispatch(UpdateData(Udata));
    }
  } 
  let Total = 0;
  return (
    <React.Fragment>
    <Header />
    <main className='row container'>
      {
        data.map((item) =>{
          Total = Total + (item.Price * item.Quantity);
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
                    <p className="card-text"><small className="text-body-secondary fs-5">Qty:{item.Quantity}</small></p>

                    <button  className="btn btn-primary me-2" onClick={() => handlePlus(item)}>
                       <i className='fa fa-plus'></i>
                    </button>
                    <button  className="btn btn-warning me-2" onClick={() => handleMinus(item)}>
                    <i className='fa fa-minus'></i>
                    </button>
                    <button  className="btn btn-danger me-2" onClick={() => dispatch(DeleteData(item.id))}>
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
    <div class="fixed-bottom container-fluid bg-danger d-flex justify-content-between">
      <p className='fs-2'>Total :{Total} </p> 
      <button className='btn-warning'>
        <p className='fs-4'>CheckOut
        <i className='fa fa-arrow-right'></i>
        </p>
      </button>
    </div>
  </React.Fragment>
  )
}

export default Cart
