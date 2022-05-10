import React from "react";
import { Container } from "./styled";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById("modal");
    modal!.classList.add("hide");
  };

  return (
    <Container id="modal" className="hide">
      <div className='fade'onClick={closeModal}></div>
      <div className='modal'>
        <h2>{title}</h2>
        {children}
      </div>
    </Container>
  );
};

export default Modal;
