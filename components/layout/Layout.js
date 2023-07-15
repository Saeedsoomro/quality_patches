import React, { useEffect, useState } from "react";
import NavBar from "./Header";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />

      <main className="min-h-screen">{children}</main>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Layout;
