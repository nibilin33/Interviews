import styled from "styled-components";
import {
  Fragment
} from "react";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;
  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  return (
    <Fragment>
      <Header>
        <img src="/public/vite.svg" alt="Prolog logo" />
        <a href="">Dashboard</a>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        <img src="/public/vite.svg" alt="Contact" />
      </ContactButton>
    </Fragment>
  );
};

export default IssuesPage;