

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });
    
    
    test("add_todos", () => {
        let todo_service = new todoservice();
        todo_service.add_todo("test element");
        
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });
    
    test("delete_todos", () => {
        let todo_service = new todoservice();
        let out = todo_service.remove_todo(0);
        expect(todo_service.get_todos().todo.length).toEqual(2);
        expect(out).toBe(true);
    });
    
    
    test("update_todos", () => {
        let todo_service = new todoservice();
        todo_service.add_todo("test element");
        
        expect(todo_service.get_todos().todo[3]).toEqual("test element");
        todo_service.update_todo(3, "new");
        
        expect(todo_service.get_todos().todo[3]).toEqual("new");
    });

    

    // Write all your test cases here that corresponds to software requirements


});
