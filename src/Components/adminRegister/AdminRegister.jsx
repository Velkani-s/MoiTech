import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const AdminRegister = () => {
  const [AdminUser, SetAdminUser] = useState({});

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>Earn with us Grow with us</h2>
          </div>
          <div className="col-lg-6">
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminRegister;
