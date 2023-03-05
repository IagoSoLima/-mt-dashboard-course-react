import React, { useEffect, useState } from 'react'
import Card from '~/components/card'
import SideBar from '~/components/side-bar'

import { Container, ListIcon, Charts } from './styles'
import theme from '~/styles/theme'
import { BarChart, DoughnutChart, LineChart } from '~/components/chart'
import Calendar from '~/components/calendar'
import {
  datesRegistrationBarChartOptions,
  registrationBarChartOptions,
  percentageRegistrationDoughnutChat
} from './char-options'
import {
  Day,
  getTotalRegistrationByCourseDayInMonth,
  getTotalRegistrationByCourseMonth,
  getTotalRegistrationFake,
  monthsType
} from './fake'
import { ChartData } from 'chart.js'
import { removeDuplicateArrayValue } from '~/utils'
import { getMaxValueInArray } from '~/utils/get-max-value-in-array.util'

interface CoursesByMonths {
  name: string
  data: Array<{
    id: number
    month: monthsType
    total: number
  }>
}
interface CoursesByDayInMonths {
  name: string
  data: Array<{
    id: number
    day: Day
    total: number
  }>
}

interface Registered {
  total: number
  data: Array<{ label: string; total: number }>
}

const Home: React.FC = () => {
  const [registered, setRegistered] = useState<Registered>({} as Registered)
  const [maxValueCoursesByDayInMonth, setMaxValueCoursesByDayInMonth] =
    useState(0)
  const [coursesByMonths, setCourseByMonths] = useState<
    CoursesByMonths[] | null
  >(null)
  const [coursesByDayInMonths, setCourseByDayInMonths] = useState<
    CoursesByDayInMonths[] | null
  >(null)

  const [dataCoursesChart, setDataCoursesChart] = useState<ChartData<'bar'>>()
  const [coursesDataPercentage, setCoursesDataPercentage] =
    useState<ChartData<'doughnut'>>()
  const [dataCoursesInMonthChart, setDataCoursesInMonthChart] =
    useState<ChartData<'line'>>()

  useEffect(() => {
    getTotalRegistrationFake<Registered>().then(registration =>
      setRegistered(registration.data)
    )

    getTotalRegistrationByCourseMonth<CoursesByMonths[]>().then(response => {
      setCourseByMonths(response.data)
    })

    getTotalRegistrationByCourseDayInMonth<CoursesByDayInMonths[]>().then(
      response => setCourseByDayInMonths(response.data)
    )
  })

  useEffect(() => {
    if (!registered?.data) return

    const backgrounds = [theme.colors.blueDark, theme.colors.orange]
    const data = registered.data.flatMap(courseData => courseData.total)
    const labels = registered.data.map(info => info.label)
    setCoursesDataPercentage({
      labels,
      datasets: [
        {
          data,
          backgroundColor: backgrounds
        }
      ]
    })
  }, [registered])

  useEffect(() => {
    if (!coursesByMonths) return

    const backgrounds = [theme.colors.blueDark, theme.colors.orange]
    const months = coursesByMonths
      ?.flatMap(data => data.data)
      .map(data => data.month)
    const monthsRemovedDuplicates = removeDuplicateArrayValue(months)

    setDataCoursesChart({
      labels: monthsRemovedDuplicates,
      datasets: coursesByMonths.map((courseData, index) => ({
        label: courseData.name,
        data: courseData.data.map(data => data.total),
        backgroundColor: backgrounds[index % 2]
      }))
    })
  }, [coursesByMonths])

  useEffect(() => {
    if (!coursesByDayInMonths) return

    const backgrounds = [theme.colors.blueDark, theme.colors.orange]
    const days = coursesByDayInMonths
      ?.flatMap(data => data.data)
      .map(data => data.day)
    const daysRemovedDuplicates = removeDuplicateArrayValue(days)
    const values = coursesByDayInMonths
      ?.flatMap(data => data.data)
      .map(data => data.total)
    const maxValue = getMaxValueInArray(values)

    setMaxValueCoursesByDayInMonth(maxValue)

    setDataCoursesInMonthChart({
      labels: daysRemovedDuplicates,
      datasets: coursesByDayInMonths.map((courseData, index) => ({
        label: courseData.name,
        data: courseData.data.map(data => data.total),
        fill: true,
        tension: 0.4,
        backgroundColor: backgrounds[index % 2]
      }))
    })
  }, [coursesByDayInMonths])

  return (
    <>
      <SideBar />
      <Container>
        <section className='content'>
          <div className='flex'>
            <h1>CONTROLE GERAL</h1>
            <ListIcon />
          </div>
          <div className='grid'>
            <Card fill bgColor='var(--blue-dark)' />
            <Card fill bgColor='var(--blue-dark)' />
            <Card fill bgColor='var(--blue-dark)' />
            <Card bgColor='var(--white)'>
              <div className='content'>
                <strong>Total de Inscritos</strong>
                <p>{registered?.total || 0}</p>
              </div>
            </Card>
          </div>

          <Charts>
            <div className='grid-chart-row-1'>
              <div className='column'>
                <div className='container-chart'>
                  {dataCoursesChart && (
                    <BarChart
                      data={dataCoursesChart}
                      options={registrationBarChartOptions}
                    />
                  )}
                </div>

                <div className='container-chart'>
                  <div className='chart-flex'>
                    <div className='chart'>
                      {dataCoursesInMonthChart &&
                        maxValueCoursesByDayInMonth && (
                          <LineChart
                            data={dataCoursesInMonthChart}
                            options={datesRegistrationBarChartOptions(
                              maxValueCoursesByDayInMonth
                            )}
                          />
                        )}
                    </div>

                    <div className='calendar'>
                      <Calendar />
                    </div>
                  </div>
                </div>
              </div>

              <div className='container-chart'>
                {coursesDataPercentage && (
                  <DoughnutChart
                    data={coursesDataPercentage}
                    options={percentageRegistrationDoughnutChat}
                  />
                )}
              </div>
            </div>
          </Charts>
        </section>
      </Container>
    </>
  )
}

export default Home
