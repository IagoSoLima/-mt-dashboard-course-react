interface Response<T> {
  data: T
}

const courseA = { label: 'Curso A', total: 565 }
const courseB = { label: 'Curso B', total: 690 }

const mockTotal = {
  total: 1255,
  data: [courseA, courseB]
}

export const getTotalRegistrationFake = <T = any>(): Promise<Response<T>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: mockTotal as T })
    }, 1000)
  })
}
