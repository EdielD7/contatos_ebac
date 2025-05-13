import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
}

const FiltroCard = ({ legenda }: Props) => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  const contarTarefas = () => {
    return tarefas.itens.length
  }

  const contador = contarTarefas()

  return (
    <S.Card>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
