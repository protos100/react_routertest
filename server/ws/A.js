import express from 'express';
import expressWs from 'express-ws';

const router = express.Router();
expressWs(router);

router.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(msg);
  });
});

export default router;
