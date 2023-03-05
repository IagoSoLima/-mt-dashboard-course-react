import { List } from 'phosphor-react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 1400px;
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    margin-top: 50px;

    div.content {
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
    display: grid;
    grid-template-columns: 3fr 0.5fr;
    gap: 40px;
  }

  & > div div.container-chart {
    background-color: var(--white);
  }

  .chart-flex {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    padding: 10px 20px;

    .chart {
      flex: 3.5 0 300px;
    }

    div {
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
