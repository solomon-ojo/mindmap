import React from "react";
import Container from "./Container";

const ContactHero = () => {
  return (
    <section className=" w-full pt-5">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className="text-[52px] font-bold text-center">Contact Us</h1>
          <p className="text-center text-[22px] px-6">
            If you have any questions about MindMap ltd or want to partner with
            us, join the team and community or simply want to share your story,
            drop us a message below and we will be sure to get back to you as
            soon as possible!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
