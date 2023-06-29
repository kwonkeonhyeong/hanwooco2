import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }

    *{  
        font-family: 'Jua', sans-serif;
        box-sizing: border-box;
    }
    
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    /* 아래만 바꾸기 */
/*     
        html, body {
            min-height: 100dvh;
            min-width: 100%;
        } */
        
    `;
 
export default GlobalStyles;