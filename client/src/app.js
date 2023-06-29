import React from "react";
import MainPage from "./pages/main/MainPage.container";
import ContentsPage from "./pages/contents/contents.container";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles.js";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/newpage" element={<ContentsPage />} />
            </Routes>
      </BrowserRouter> 
    )
}

export default App