export type Day =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'

interface ResponseData {
  name: string
  data: Array<{
    id: number
    day: Day
    total: number
  }>
}

const courseA = {
  name: 'CURSO A',
  data: [
    { id: 1, day: '01', total: 20 },
    { id: 2, day: '05', total: 27 },
    { id: 3, day: '14', total: 19 },
    { id: 4, day: '16', total: 25 },
    { id: 5, day: '29', total: 29 },
    { id: 5, day: '30', total: 1 }
  ]
}

const courseB = {
  name: 'CURSO B',
  data: [
    { id: 1, day: '01', total: 37 },
    { id: 2, day: '05', total: 42 },
    { id: 3, day: '14', total: 32 },
    { id: 4, day: '16', total: 5 },
    { id: 5, day: '29', total: 30 }
  ]
}

interface Response<T> {
  data: T
}

const mockResult = [courseA, courseB]

export const getTotalRegistrationByCourseDayInMonth = <T = any>(): Promise<
  Response<T>
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockResult as T
      })
    }, 1000)
  })
}
