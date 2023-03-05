import React from 'react'

import { BarElement, Chart as ChartJS, ChartOptions } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement)

interface Props {
  data: any
  options?: ChartOptions
}

export const BarChart: React.FC<Props> = props => {
  return <Bar {...props} />
}
