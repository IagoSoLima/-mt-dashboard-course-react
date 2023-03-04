import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  *, button, input {
    border: 0;
    background: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  button:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container{
    width: 100%;
    float: left;
  }

  .detected-scroll{
    overflow: auto;

    // Sombra para indicar que há mais conteúdo
    background: linear-gradient(white 30%, rgba(255,255,255,0)), linear-gradient(rgba(255,255,255,0), white 70%) 0 100%, radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)), radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
    background: linear-gradient(white 30%, rgba(255,255,255,0)), linear-gradient(rgba(255,255,255,0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)), radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
    background-attachment: local, local, scroll, scroll;
  }

  .pointer {
    cursor: pointer;

  }

  .hiddenDesk{
    @media (min-width: 1280px) {
      display: none;
    }
  }

  :root {
    --container: 1280px;

    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};
    --gray: ${props => props.theme.colors.gray};
    --lightGray: ${props => props.theme.colors.lightGray};
    --darkGray: ${props => props.theme.colors.darkGray};
    --green: ${props => props.theme.colors.green};
    --yellow: ${props => props.theme.colors.yellow};
    --orange: ${props => props.theme.colors.orange};
    --blue: ${props => props.theme.colors.blue};

    --background-light: ${props => props.theme.colors.backgroundLight};
    --background-dark: ${props => props.theme.colors.backgroundDark};
    --disabled-light: ${props => props.theme.colors.disabledLight};
    --disabled-dark: ${props => props.theme.colors.disabledDark};


    --nav-height: 80px;

    color-scheme: light dark;

    


    @media (max-width: 1279px) {
      --container: 608px;
      --nav-height: 74px;
    }

    @media (max-width: 607px) {
      --container: calc(100% - 48px);
      --nav-height: 124px;
    }
  }

  @media (prefers-color-scheme: light) {
      
    }

  a {
    color: #919191
  }
`
