import { createGlobalStyle } from "styled-components";

const MainGlobalStyles = createGlobalStyle`


    body{
        z-index: 1;
    }

    body::after {
        position: fixed;
        width: 100%;
        height: 100%;
        content: "";
        background-image: url('/backgroundimg_1.jpg');
        background-size: cover;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.6;
    }
`;
 
export default MainGlobalStyles;