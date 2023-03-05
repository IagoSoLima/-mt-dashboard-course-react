import React from 'react'
import {
  ChartOptions,
  Chart as ChartJS,
  DoughnutController
} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(DoughnutController)

interface Props {
  data: any
  options?: ChartOptions<'doughnut'>
}
export const DoughnutChart: React.FC<Props> = props => {
  return <Doughnut {...props} />
}
