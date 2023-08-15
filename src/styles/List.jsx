import styled from "styled-components";

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  margin-top: 200px;

  div {
    margin: 0rem 1.5rem;
  }
  h4 {
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    background-color: rgb(var(--secondary-color));
  }

  h4:hover {
    background-color: rgb(var(--accent-color2));
    color: white;
  }
  .active h4 {
    background-color: rgb(var(--accent-color2));
    color: white;
  }

  @media (max-width: 1005px) {
    div {
      margin: 0px;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export default List;
