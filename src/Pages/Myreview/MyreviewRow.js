import React, { useState } from 'react';

const MyreviewRow = ({riv, handleDelete, handleUpdate}) => {
    const {title, _id, img, message} = riv
    const [data, setData] = useState()




    return (
        <div className="card w-2/3 mx-auto mb-20 bg-pink-50 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{message}</p>
          <div className="card-actions justify-end">
          <button onClick={()=>handleUpdate(_id)} className="btn btn-primary">Update</button>
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default MyreviewRow;