
import express from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
      status: true,
      message: "Gateway service",
    });
  });

app.use('/user', proxy('https://user-service-apis.herokuapp.com'))
app.use('/comment', proxy('https://comment-service-apis.herokuapp.com'))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Gateway is Listening to Port: http://localhost:${PORT}`)
})