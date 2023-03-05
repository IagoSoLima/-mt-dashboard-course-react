import React from 'react'

import {
  BarElement,
  Chart as ChartJS,
  ChartData,
  ChartOptions
} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement)

interface Props {
  data: ChartData<'bar'>
  options?: ChartOptions<'bar'>
}

export const BarChart: React.FC<Props> = props => {
  return <Bar {...props} />
}
