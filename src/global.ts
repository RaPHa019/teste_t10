import { createGlobalStyle } from "styled-components";
//import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }
  :root {
      font-size: 1rem;
      font-family: 'Josefin Sans', sans-serif;

      @media (max-width: 768px) {
        font-size: 0.5rem;
      }

      @media (max-width: 1200px) {
        font-size: 0.7rem;
      }
    }

    body{
        font-size: 1rem;
        font-family: 'Josefin Sans', sans-serif;

        @media (max-width: 768px) {
            font-size: 0.5rem;
        }

        @media (max-width: 1200px) {
            font-size: 0.7rem;
        }
    }
`;

export default Global;
