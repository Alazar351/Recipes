import styled from "styled-components";

const GridCards = styled.div`
  position: relative;

  width: calc(100% - 40px);

  max-width: 400px;
  max-height: 400px;

  .quickInfo {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .prepareTime {
    margin-right: 15px;
    opacity: 0.95;
  }

  .likes {
    opacity: 0.95;
  }

  .prepareTimeSvg,
  .likesSvg {
    max-width: 16px;
    max-height: 16px;
    margin-right: 4px;
    opacity: 0.5;
  }

  svg {
    max-width: 25px;
    max-height: 25px;
  }

  img {
    width: 100%;
    object-fit: fit;
    overflow: hidden;
  }
  button {
    background-color: transparent;
    border: none;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-size: 1.3rem;
  }

  .grid-card-container:hover {
    box-shadow: 5px 5px 3px 3px rgb(var(--accent-color2));
    border-radius: 1.5rem;
  }
`;

export default GridCards;
