import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/dbConnection.mjs';

const PORT=3000;
const app = express();


Connection.connectToServer()
    .then( async () => {
        console.log('Connected to database');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());
        
        const playerRoutes = await import('./routes/playerRoutes.mjs');
        const loginRoutes = await import('./routes/loginRoutes.mjs');
        const registerRoutes = await import('./routes/registerRoutes.mjs');

        app.use('/players', playerRoutes.default);
        app.use('/login', loginRoutes.default);
        app.use('/register', registerRoutes.default);

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        
        app.listen(PORT, () => console.log(`Server running on  http://localhost:${PORT}`));
    })


