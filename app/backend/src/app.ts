import express from 'express';
import cors from 'cors';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.cors();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    
    this.app.use(accessControl);

    this.app.use(express.json());
  }

  private cors(): void {
    this.app.use(cors());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT)
  }
}

export { App };