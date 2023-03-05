export type monthsType =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'

interface ResponseData {
  name: string
  data: Array<{
    id: number
    month: monthsType
    total: number
  }>
}

interface Response<T> {
  data: T
}

const courseA: ResponseData = {
  name: 'CURSO A',
  data: [
    { id: 1, month: 'Jan', total: 20 },
    { id: 2, month: 'Feb', total: 27 },
    { id: 3, month: 'Mar', total: 19 },
    { id: 4, month: 'Apr', total: 25 },
    { id: 5, month: 'May', total: 35 },
    { id: 6, month: 'Jun', total: 25 },
    { id: 7, month: 'Jul', total: 35 },
    { id: 8, month: 'Aug', total: 28 },
    { id: 9, month: 'Sep', total: 32 }
  ]
}

const courseB: ResponseData = {
  name: 'CURSO B',
  data: [
    { id: 1, month: 'Jan', total: 37 },
    { id: 2, month: 'Feb', total: 42 },
    { id: 3, month: 'Mar', total: 32 },
    { id: 4, month: 'Apr', total: 5 },
    { id: 5, month: 'May', total: 30 },
    { id: 6, month: 'Jun', total: 45 },
    { id: 7, month: 'Jul', total: 20 },
    { id: 8, month: 'Aug', total: 23 },
    { id: 9, month: 'Sep', total: 20 }
  ]
}

const mockResult = [courseA, courseB]

export const getTotalRegistrationByCourseMonth = <T = any>(): Promise<
  Response<T>
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: mockResult as T })
    }, 1000)
  })
}
