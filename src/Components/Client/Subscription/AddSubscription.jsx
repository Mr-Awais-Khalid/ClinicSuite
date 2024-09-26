import React from "react";

const AddSubscription = () => {
  return (
    <div className="max-w-[80rem] mx-auto pt-52 pb-9 flex justify-between">
      {/* left hand Side */}
      <div className="w-3/5">
        <div className="flex justify-between ">
          <h1>Product Details</h1>
          <button>Update Product</button>
        </div>
        
          <p>Billing Address:</p>
          <div className="flex justify-around">
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
        </div>

        <div className="flex justify-around">
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
        </div>

        <div className="flex justify-around">
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
        </div>

        <div className="flex justify-around">
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
          <dl className="flex gap-2">
            <dt>Bill To:</dt>
            <dt>smith@kpmg.com</dt>
          </dl>
        </div>
      </div>
      {/* Right hand Side */}
      <div>
        <div>
          <h2>Summary</h2>
          <div className="flex items-center">
            <div>
              <img src="/"/>
            </div>
            <div>
              <p>Sean Bean</p>
              <p>sean@dellito.com</p>
            </div>
          </div>
          <hr/>
          <div>
            <div><h2>Product details</h2></div>
            <div>
              <span>Basic Bundle</span>
              <span>$149.99 / Year</span>
            </div>
          </div>
          <hr/>
          <div>
            <h2>Payment Details</h2>
            <div>
              Mastercard
              Expeires Dec 2024
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubscription;
