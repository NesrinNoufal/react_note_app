import express from "express"
import connectToMongodb from "./db/connectToMongodb.js";
import AuthRoutes from './routes/auth.routes.js';
import cors from 'cors';



const app = express ();
const PORT = 5000;

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/auth',AuthRoutes);

app.get('/', () =>{
    
    console.log("Server running ");
})

app.listen(PORT, () => {
    connectToMongodb();
    console.log(`Server running at port ${PORT}`);
});