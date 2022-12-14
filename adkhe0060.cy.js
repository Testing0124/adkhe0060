/// <reference types="cypress"/> 
import login from '../../../pages/login'
import alertas from '../../../pages/alertas'

describe('validar listagem adkhe0060', () => {

  it('acesso sistema', () => {
    login.navigates()
    cy.login()
    login.mensagemSucesso()
    alertas.menuAlertas()
  })

  it('buscar por alertas adkhe0060', () => {
    alertas.buscar()
  })
