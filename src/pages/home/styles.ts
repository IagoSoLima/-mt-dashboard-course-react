import { List } from 'phosphor-react'
import styled from 'styled-components'

export const Container = styled.div`
  width: calc(100% - var(--nav-width));
  height: 100%;
  padding-bottom: 50px;
  color: var(--black);
  margin-left: var(--nav-width);
  section.content {
    padding: 10px 40px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    gap: 100px;

    div.content {
      flex: 1;
      min-width: 300px;
      padding: 24px;
      strong {
        font-size: 24px;
      }

      p {
        font-size: 60px;
        margin-top: 15px;
        font-weight: 600;
        text-align: center;
      }
    }
  }
`

export const ListIcon = styled(List).attrs(() => ({
  size: 40
}))`
  cursor: pointer;
`

export const Charts = styled.div`
  margin-top: 70px;

  .grid-chart-row-1 {
    display: flex;
    justify-content: space-between;

    gap: 90px;

    & .container-chart {
      background-color: var(--white);
    }

    & > .container-chart {
      flex: 1;
    }

    .column {
      flex: 3.5;
    }
  }

  .chart-flex {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    padding: 10px 20px;

    .chart {
      flex: 5 0 300px;
    }

    .calendar {
      max-width: 300px;
      flex: 1 0 100px;
    }
  }

  .column {
    .container-chart {
      &:nth-child(1) {
        margin-bottom: 40px;
      }
    }
  }
`
