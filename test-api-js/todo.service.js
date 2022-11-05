class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos["todo"].push(todo);
        return True;
    }

    delete_todo(id){

        if(id > -1 && id < this.todos["todos"].length){
            this.todos["todos"].splice(id, 1);
            return True;
        }
        else{
            return False;
        }
        
    }

    update_todo(id, todo){
        this.todos["todos"][id] = todo;
        return True;
    }
}


module.exports= todoservice;
