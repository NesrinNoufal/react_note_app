import express from "express"
import connectToMongodb from "./db/connectToMongodb.js";
import AuthRoutes from './routes/auth.routes.js';
import cors from 'cors';
import path from "path";


const app = express ();
const PORT = 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/auth',AuthRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get('/', () =>{
    
//     console.log("Server running ");
// })

app.listen(PORT, () => {
    connectToMongodb();
    console.log(`Server running at port ${PORT}`);
});