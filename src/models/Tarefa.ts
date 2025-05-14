class Tarefa {
  nome: string
  email: string
  fone: string
  id: number

  constructor(nome: string, email: string, fone: string, id: number) {
    this.nome = nome
    this.email = email
    this.fone = fone
    this.id = id
  }
}

export default Tarefa
