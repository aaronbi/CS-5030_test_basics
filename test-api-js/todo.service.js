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
        return true;
    }

    delete_todo(id){
	//console.log(this.todos["todos"]);
        if(id > -1 && id < this.todos["todo"].length){
            this.todos["todo"].splice(id, 1);
            return true;
        }
        else{
            return false;
        }
        
    }

    update_todo(id, todo){
        this.todos["todo"][id] = todo;
        return true;
    }
}


module.exports= todoservice;
