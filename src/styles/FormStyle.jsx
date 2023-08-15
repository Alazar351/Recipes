import styled from "styled-components";

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: absolute;
  width: 270px;
  top: 70px;
  left: 480px;
  input {
    font-size: 1rem;
    padding: 0.5rem;
    width: 370px;
    border-radius: 0.5rem;
  }

  input:focus {
    box-shadow: 2px 2px 1px 1px rgb(var(--accent-color2));
  }
`;

export default FormStyle;
