import React from "react";

function Pricing() {
  return (
    <div className="container">
      <header>
        <div className="d-flex align-items-center justify-content-between p-3">
          <a href="#" className="navbar-brand fs-4">
            EasyShop
          </a>
          <nav>
            <a href="#" className="me-3 text-decoration-none">
              Pricing
            </a>
            <a href="#" className="text-decoration-none">
              Contact
            </a>
          </nav>
        </div>

        <div className="text-center w-75 mx-auto ">
          <h1>Pricing</h1>
          <p className="fs-5 text-muted">
            Quick build an effective pricing table for your potential customers
            with this Bootstrap example. It's built with default Bootstrap
            components and utilities with Javascript customization
          </p>
        </div>
      </header>

      <main>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $0 <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled py-3">
                  <li>20 users Included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg btn-success text-white w-100 btn-outline-success">
                  Sign Up Free
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $15 <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled py-3">
                  <li>20 users Included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg w-100 btn-outline-success">
                  Get Start
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h4 className="fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                  $30 <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled py-3">
                  <li>30 users Included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-success text-white btn-lg w-100 btn-outline-success">
                  Get start
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center fw-normal my-5">Compare Plan</h2>
        <div className="">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>free</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Public</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Private</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer className="mt-5 text-center">
          Copyright "Code With Muhiu"
        </footer>
      </main>
    </div>
  );
}

export default Pricing;
