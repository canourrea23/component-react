import React from 'react'
import MyApp from './Mycomponent'


describe('<MyApp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyApp />)
    cy.get('button').click()
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyApp />)
  })
})