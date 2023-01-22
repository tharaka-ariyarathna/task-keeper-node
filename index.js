import express from 'express' ;
import TaskRouter from './Routes/taskRoutes.js' ;
import bodyParser from 'body-parser';

const App = express() ;
App.use(bodyParser.json({ limit: "30mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const port = 5000 ;

App.listen(port, () => {
    console.log("Listening to port 5000") ;
})

App.use('/tasks', TaskRouter) ;

