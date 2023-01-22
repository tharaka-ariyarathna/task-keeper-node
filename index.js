import express from 'express' ;
import TaskRouter from './Routes/taskRoutes.js' ;

const App = express() ;
const port = 5000 ;

App.listen(port, () => {
    console.log("Listening to port 5000") ;
})

App.use('/tasks', TaskRouter) ;

