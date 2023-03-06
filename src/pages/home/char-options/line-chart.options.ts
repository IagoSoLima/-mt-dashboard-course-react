import { ChartOptions } from 'chart.js/auto'

export const datesRegistrationBarChartOptions = (
  maxValue: number
): ChartOptions<'line'> => ({
  aspectRatio: 3,

  layout: {
    padding: {
      top: 30,
      left: 10,
      right: 20,
      bottom: 30
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'chartArea',
      align: 'start',
      fullSize: true,
      labels: {
        boxWidth: 25,
        boxHeight: 25,
        textAlign: 'left',
        font: {
          size: 14
        }
      }
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false,

      suggestedMin: 0,
      suggestedMax: maxValue + 10
    }
  }
})
