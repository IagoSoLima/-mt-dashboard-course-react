import { ChartOptions } from 'chart.js/auto'

export const registrationBarChartOptions: ChartOptions<'bar'> = {
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
}
