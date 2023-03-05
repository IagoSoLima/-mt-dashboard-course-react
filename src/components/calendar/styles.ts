import styled from 'styled-components'
import ReactCalendar from 'moedim'

export const Container = styled.div`
  background-color: var(--white);

  section[aria-label='Calendar Dates'] {
    div: {
      grid-template-columns: repeat(7, minmax(0px, 100%));
    }
  }
`
export const Calendar = styled(ReactCalendar)`
  --moedim-primary: var(--blue-dark);
  --moedim-secondary: var(--blue-light);

  width: 100%;
`
