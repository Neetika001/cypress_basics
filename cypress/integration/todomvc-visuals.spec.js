/// <reference types="Cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validations', () =>{

    before(() => todoPage.navigate())
    
    /* beforeEach(() =>cy.eyesOpen({
       appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!',
        browser:  [
             { name:'chrome' ,width: 1024, height: 768},
              { name:'firefox' ,width: 1024, height: 768},
                { name:'chrome' ,width: 800, height: 600},
                 { deviceName:'iPhone X '},

                 


        ]
    }))
    afterEach(() => cy.eyesClose())  */

    it('should look good', () => {

        //cy.eyesCheckWindow('empty todo list')

        todoPage.addToDo('clean Room')
        todoPage.addToDo('Learn JS')
        todoPage.addToDo('Learn Cypress')

       // cy.eyesCheckWindow('3 todos')
 
        todoPage.toggleTodo(0)

        //cy.eyesCheckWindow('the first Todo is completed')
        


    })


})


