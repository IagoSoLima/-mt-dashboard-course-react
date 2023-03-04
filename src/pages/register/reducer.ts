export interface FormState {
  name: string
  course: string
  state: string
  city: string
}

export type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_COURSE'; payload: string }
  | { type: 'SET_STATE'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'CLEAR_FORM' }

export const initialState: FormState = {
  name: '',
  course: '',
  state: '',
  city: ''
}

export function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_COURSE':
      return { ...state, course: action.payload }
    case 'SET_STATE':
      return { ...state, state: action.payload }
    case 'SET_CITY':
      return { ...state, city: action.payload }

    case 'CLEAR_FORM':
      return { ...initialState }
    default:
      return state
  }
}
