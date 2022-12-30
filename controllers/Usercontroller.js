const Todo = require("../models/userModel");

exports.todo = (req,res)=>{
    res.send("hello everyone");
}




exports.createTodoController= async(req, res)=>{
    //try catch
    try {
        const newTodo = new Todo({
            title: req.body
    });
    //  checking user entering title
    // if title is empty or not
    if(!title){ 
        throw new Error("title is required")
    };
    const createdNewTodo = await newTodo.save()
    res.json(createdNewTodo)
    // there should be status code
    res.status(201).json({
        success:true,
        message:"title created successfully",
        
    });
}
catch (error) {
console.log(error);
}

};



exports.createTaskTodoController= async (req, res)=> {

    const todoId = req.params.todoId
    const todo = await Todo.findById(todoId)
    if(!todo) return res.status(400).send('No todo exists')
    const {text} = req.body
    todo.tasks.push(text)
    await todo.save()
    res.json(todo)
}



exports.deleteTodoController= async (req, res)=> {
    const todoId = req.params.todoId
    const deletedTodo = await Todo.findByIdAndDelete(todoId)
    res.status(201).json(deletedTodo)
}



exports.getTodosController= async (req, res)=>{
    const todos = await Todo.find()
    res.json(todos)
}






exports.getTodoController= async (req, res)=>{
    const {todoId} = req.params
    const alltodos = await Todo.findById(todoId)
    // validate allTodos
    res.json(alltodos)
}
