/// <reference types="Cypress" />

import {
    navigate,
    addToDo,
    validateTodoText,
    validateToggleState,
    toggleTodo,
    validateTodoCompletedState,
    clearCompleted,
    validateNumberOfTodosShown

} from "../page-objects/todo-page"


describe('todo actions', () => {


    beforeEach(() => {

        navigate()
        addToDo('Clean room')

    })

    it("ADD A NEW TODO", () => {

        validateTodoText(0, 'Clean room')
        validateToggleState(0, false)
        cy.percySnapshot();
        //cy.get('.toggle').should('not.be.checked')
    })

    it("MARK A TODO AS COMPLETED", () => {
        toggleTodo(0)
        //cy.get('.toggle').click()
        validateTodoCompletedState(0, true)
        //cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it("CLEAR COMPLETED TODOs", () => {
        toggleTodo(0)
        //cy.get('.toggle').click()

        clearCompleted()
        // cy.contains('Clear').click()

        validateNumberOfTodosShown(0)
        //cy.get('.todo-list').should('not.have.descendants', 'li' )
    })

}
)
