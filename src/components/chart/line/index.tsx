import React from 'react'
import {
  ChartOptions,
  Chart as ChartJS,
  LineController,
  LineElement
} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineController, LineElement)

interface Props {
  data: any
  options?: ChartOptions
}
export const LineChart: React.FC<Props> = props => {
  return <Line {...props} />
}
