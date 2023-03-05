import { ChartOptions } from 'chart.js/auto'

export const percentageRegistrationDoughnutChat: ChartOptions<'doughnut'> = {
  aspectRatio: 1,

  layout: {
    padding: {
      top: 50,
      left: 20,
      right: 20,
      bottom: 10
    }
  },

  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      fullSize: true,
      maxWidth: 10,
      maxHeight: 30,

      labels: {
        padding: 10,
        textAlign: 'center',

        font: {
          size: 14,
          weight: 'bold'
        }
      }
    }
  },
  scales: {
    x: {
      display: false,
      title: {
        display: true
      }
    },
    y: {
      display: false
    }
  }
}
