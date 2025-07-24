import { useDispatch, useSelector } from 'react-redux'
import { setTheme, themeData } from '@src/store'

export const useTheme = () => {
  const { mode } = useSelector(themeData)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(setTheme(mode === 'light' ? 'dark' : 'light'))
  }

  return {
    mode,
    isDark: mode === 'dark',
    toggleTheme,
    setTheme: (newMode: 'light' | 'dark') => dispatch(setTheme(newMode)),
  }
}
