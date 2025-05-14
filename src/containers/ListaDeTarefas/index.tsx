import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    if (termo && termo.trim() !== '') {
      return itens.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )
    }

    return itens
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    return `${quantidade} contato(s) encontrado(s)`
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.nome}>
            <Tarefa id={t.id} email={t.email} nome={t.nome} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
