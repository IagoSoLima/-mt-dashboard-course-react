import React, { useState } from 'react'
import Card from '~/components/card'
import SideBar from '~/components/side-bar'

import { Container, ListIcon, Charts } from './styles'
import theme from '~/styles/theme'
import { BarChart, DoughnutChart, LineChart } from '~/components/chart'
import Calendar from '~/components/calendar'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

const courseA = [
  { id: 1, month: 'Jan', userGain: 20 },
  { id: 2, month: 'Feb', userGain: 27 },
  { id: 3, month: 'Mar', userGain: 19 },
  { id: 4, month: 'Apr', userGain: 25 },
  { id: 5, month: 'May', userGain: 35 },
  { id: 6, month: 'Jun', userGain: 25 },
  { id: 7, month: 'Jul', userGain: 35 },
  { id: 8, month: 'Aug', userGain: 28 },
  { id: 9, month: 'Sep', userGain: 32 }
]

const courseB = [
  { id: 1, month: 'Jan', userGain: 37 },
  { id: 2, month: 'Feb', userGain: 42 },
  { id: 3, month: 'Mar', userGain: 32 },
  { id: 4, month: 'Apr', userGain: 5 },
  { id: 5, month: 'May', userGain: 30 },
  { id: 6, month: 'Jun', userGain: 45 },
  { id: 7, month: 'Jul', userGain: 20 },
  { id: 8, month: 'Aug', userGain: 23 },
  { id: 9, month: 'Sep', userGain: 20 }
]

const courses = {
  courseA: { label: 'Curso A', total: 565 },
  courseB: { label: 'Curso B', total: 690 }
}

const Home: React.FC = () => {
  const [registered] = useState(1255)
  const [userData] = useState({
    labels: months.map(data => data),
    datasets: [
      {
        label: 'CURSO A',
        data: courseA.map(data => data.userGain),
        backgroundColor: [theme.colors.blueDark, theme.colors.orange]
      },
      {
        label: 'CURSO B',
        data: courseB.map(data => data.userGain),
        backgroundColor: [theme.colors.orange, theme.colors.blueDark]
      }
    ]
  })

  const [coursesData] = useState({
    datasets: [
      {
        label: [courses.courseA.label, courses.courseB.label],
        data: [courses.courseA.total, courses.courseB.total],
        backgroundColor: [theme.colors.orange, theme.colors.blueDark]
      }
    ]
  })

  const [courseDataLine] = useState({
    labels: months.map(data => ''),
    datasets: [
      {
        label: 'CURSO A',
        fill: true,
        data: courseA.map(data => data.userGain),
        backgroundColor: [theme.colors.orange],
        tension: 0.4
      },
      {
        label: 'CURSO B',
        fill: true,
        data: courseB.map(data => data.userGain),
        backgroundColor: [theme.colors.blueDark],
        tension: 0.4
      }
    ]
  })

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
                <p>{registered}</p>
              </div>
            </Card>
          </div>

          <Charts>
            <div className='grid-chart-row-1'>
              <div className='column'>
                <div className='container-chart'>
                  <BarChart
                    data={userData}
                    options={{
                      aspectRatio: 3,
                      layout: {
                        padding: {
                          top: 30,
                          left: 50,
                          right: 20,
                          bottom: 0
                        }
                      },
                      plugins: {
                        title: {
                          display: true,
                          text: 'Inscritos',
                          position: 'top',
                          align: 'start',
                          padding: {
                            top: 0,
                            bottom: 30
                          },
                          font: {
                            size: 20
                          }
                        },
                        legend: {
                          display: true,
                          position: 'right',
                          labels: {
                            boxWidth: 20,
                            boxHeight: 20,
                            textAlign: 'center',
                            font: {
                              size: 14
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>

                <div className='container-chart'>
                  <div className='chart-flex'>
                    <div className='chart'>
                      <LineChart
                        data={courseDataLine}
                        options={{
                          aspectRatio: 3,

                          layout: {
                            padding: {
                              top: 30,
                              left: 10,
                              right: 20,
                              bottom: 0
                            }
                          },
                          plugins: {
                            legend: {
                              display: true,
                              position: 'left',
                              align: 'center',

                              labels: {
                                boxWidth: 25,
                                boxHeight: 25,
                                textAlign: 'center',

                                font: {
                                  size: 14
                                }
                              }
                            }
                          },
                          scales: {
                            x: {
                              display: true,
                              title: {
                                display: true
                              }
                            },
                            y: {
                              display: true,
                              title: {
                                display: true
                              },
                              suggestedMin: 0,
                              suggestedMax: 60
                            }
                          }
                        }}
                      />
                    </div>

                    <div>
                      <Calendar />
                    </div>
                  </div>
                </div>
              </div>

              <div className='container-chart'>
                <DoughnutChart
                  data={coursesData}
                  options={{
                    layout: {
                      padding: {
                        top: 30,
                        left: 20,
                        right: 20,
                        bottom: 0
                      }
                    },
                    plugins: {
                      title: {
                        display: true,
                        text: [courses.courseA.label, courses.courseB.label],
                        position: 'bottom',
                        align: 'center',

                        font: {
                          size: 20
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </Charts>
        </section>
      </Container>
    </>
  )
}

export default Home
