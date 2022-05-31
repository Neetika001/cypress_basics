import 
{
navigate,
addToDo,
validateNumberOfTodosShown,
toggleTodo,
clearCompleted,
validateTodoCompletedState,
validateToggleState,
showOnlyActiveTodos,
showAllTodos,
showOnlyCompletedTodos

} from '../page-objects/todo-page'

describe('filtering', () =>{

    beforeEach(() => { 
        //cy.visit('http://todomvc-app-for-testing.surge.sh/')
        navigate()
        //cy.get('.new-todo').type("clean room{enter}")
        addToDo('Clean room')
        addToDo('Hello world')
        addToDo('Learn JS')
        addToDo('Learn  Cypress')
        //cy.get('.new-todo').type("Learn  JS{enter}")
        //cy.get('.new-todo').type("Learn Cypress{enter}")
        toggleTodo(2)
        //cy.get('.todo-list li:nth-child(2) .toggle').click()
    })
    it('filter Select "Active" for me', () => {
    showOnlyActiveTodos()
        //cy.contains('Active').click()
    })

    it('filter Select "All" for me', () => {
    showAllTodos()
        //cy.contains('All').click()
    })
    it('filter Select "Completed" for me', () => {
        
    showOnlyCompletedTodos()
    })

    it('validate no of Todos Shown', () => {
    validateNumberOfTodosShown(4)

       //cy.get('.todo-list li').should('have.length', 4)
    })
    

})
