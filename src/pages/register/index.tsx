import React, { useMemo, useReducer } from 'react'
import Button from '~/components/button'
import Input from '~/components/input'
import Select from '~/components/select'
import { initialState, reducer } from './reducer'
import { useNavigate } from '~/routes/router-dom/hooks'

import * as S from './styles'
import SideBar from '~/components/side-bar'

const stateOptions = [
  {
    label: 'São Paulo',
    value: 'SP'
  },
  {
    label: 'Rio de Janeiro',
    value: 'RJ'
  },
  {
    label: 'Minas Gerais',
    value: 'MG'
  }
]

const courseOptions = [
  {
    label: 'Matemática',
    value: 'Matemática'
  },
  {
    label: 'Letras',
    value: 'Letras'
  },
  {
    label: 'Geográfia',
    value: 'Geográfia'
  }
]

const cities: { [key: string]: any } = {
  SP: [
    { label: 'Mogi das Cruzes', value: 'Mogi das Cruzes' },
    { label: 'Suzano', value: 'Suzano' },
    { label: 'Poá', value: 'Poá' },
    { label: 'Guararema', value: 'Guararema' }
  ],
  RJ: [
    { label: 'Angra dos Reis', value: 'Angra dos Reis' },
    { label: 'Niterói', value: 'Niterói' },
    { label: 'Itaboraí', value: 'Itaboraí' }
  ],
  MG: [
    { label: 'Belo Horizonte', value: 'Belo Horizonte' },
    { label: 'Monte Azul', value: 'Monte Azul' },
    { label: 'Muzambinho', value: 'Muzambinho' }
  ]
}

const Register: React.FC = () => {
  const [form, dispatch] = useReducer(reducer, initialState)
  const navigation = useNavigate()
  const citiesOption = useMemo(
    () => (form.state ? cities[form.state] : null),
    [form.state]
  )

  function handleSubmit() {
    if (!form.name || !form.course || !form.state || !form.city) {
      alert('Preencha todos os campos!')
      return
    }

    const stateNameByCode = stateOptions.find(
      state => state.value == form.state
    )?.label
    const confirmMessage = `Ingressante: ${form.name} Registrado para o curso de ${form.course}\n No estado de ${stateNameByCode} na cidade de ${form.city}`
    alert(confirmMessage)
  }

  return (
    <>
      <SideBar />
      <S.Container className='container'>
        <S.Form>
          <h1 className='title'>Cadastro de Ingressantes</h1>
          <section>
            <fieldset>
              <label htmlFor='name'> Nome </label>
              <Input
                type='text'
                id='name'
                name='name'
                onChange={e => {
                  dispatch({ type: 'SET_NAME', payload: e.target.value })
                }}
              />
            </fieldset>
            <fieldset>
              <label htmlFor='course'> Curso </label>
              <Select
                id='course'
                name='course'
                onChange={e => {
                  dispatch({ type: 'SET_COURSE', payload: e.target.value })
                }}
                options={courseOptions}
              />
            </fieldset>
            <fieldset>
              <label htmlFor='state'> Estado </label>
              <Select
                id='state'
                name='state'
                onChange={e => {
                  dispatch({ type: 'SET_STATE', payload: e.target.value })
                }}
                options={stateOptions}
              />
            </fieldset>
            <fieldset>
              <label htmlFor='city'> Cidade </label>
              <Select
                id='city'
                name='city'
                onChange={e => {
                  dispatch({ type: 'SET_CITY', payload: e.target.value })
                }}
                options={citiesOption}
                helperText='Por favor selecione um estado'
              />
            </fieldset>
            <div className='buttons'>
              <Button
                type='button'
                bgColor='var(--yellow)'
                onClick={() => navigation('/')}
              >
                Voltar
              </Button>
              <Button
                type='submit'
                bgColor='var(--green)'
                onClick={handleSubmit}
              >
                Gravar
              </Button>
            </div>
          </section>
        </S.Form>
      </S.Container>
    </>
  )
}

export default Register
