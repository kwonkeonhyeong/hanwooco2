import express from "express";
import apiRouter from "./router/apiRouter.js"
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`${PORT} 포트에서 서버 작동!!`))

