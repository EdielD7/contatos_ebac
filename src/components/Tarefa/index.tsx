import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  email: emailOriginal,
  fone: foneOriginal,
  nome: nomeOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (foneOriginal.length > 0) {
      setFone(foneOriginal)
    }
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [emailOriginal, foneOriginal, nomeOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setFone(foneOriginal)
    setNome(nomeOriginal)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <S.Info
          type="text"
          value={nome}
          id="nome"
          onChange={(evento) => setNome(evento.target.value)}
        />
      ) : (
        <S.Nome>{nome}</S.Nome>
      )}
      <S.Info
        type="email"
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Info
        type="tel"
        disabled={!estaEditando}
        value={fone}
        onChange={(evento) => setFone(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    fone,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
