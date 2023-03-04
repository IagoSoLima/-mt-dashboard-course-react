import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Form = styled.div`
  width: 400px;
  margin: 70px auto;
  border: 0.15rem solid var(--blue);

  background-color: var(--white);
  color: var(--black);

  border-radius: 0.5rem;

  h1 {
    background-color: #13729e;
    color: #fff;
    font-size: 1.3rem;
    text-align: center;
    padding: 0.2rem;
  }

  section {
    padding: 0rem 1rem 1rem;
  }

  fieldset {
    border: none;
    padding: 0px;
    margin-top: 1.5rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }
`
