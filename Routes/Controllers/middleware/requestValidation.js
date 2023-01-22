//Validate task creation
export const createValidation = (req, res, next) => {
    const {title, description} = req.body ;
    if(title && description){
        next() ;
    }else{
        return res.status(400).json("Incomplete request") ;
    }
}

//validate getting a task
export const getTaskValidation = (req, res, next) => {
    
}