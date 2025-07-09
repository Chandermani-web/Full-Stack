import React from 'react'
import UseGetSingleProduct from '../hook/useGetSingleProduct.jsx';

const SingleProductViewer = () => {
    const {
        image,
        title,
        desc,
        user,
        handleNext,
        handlePrevious
    } = UseGetSingleProduct();
  return  (
    <div>
        <main className="imagedetails">
            <section className="imagedetail-title">
                <p><strong>Title: </strong>{title}</p>
            </section>
            <section>
                <p><strong>Desc: </strong>{desc}</p>
            </section>
            <section>
                <p><strong>User: </strong>{user}</p>
            </section>
        </main>
      <main className="container">
        <img src={image} alt="" />
        <div className="btn">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default SingleProductViewer
