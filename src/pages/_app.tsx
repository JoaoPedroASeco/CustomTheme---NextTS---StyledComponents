import type { AppProps } from 'next/app'
import GlobalStyles from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from "../pages/styles/themes/light"
import dark from "../pages/styles/themes/dark"
import usePersistedState from '../utils/usePersistedState'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
