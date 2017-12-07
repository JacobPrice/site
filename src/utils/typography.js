import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  body: {
    background: '#ebebeb',
  },
  a: {
    color: '#FC0853',
  },
  '.task-list-item input:checked': {
    boxShadow: '0px 0px 0px #00FFD8',
  },
  ul: {
    listStyle: 'none',
  },
  '.gatsby-highlight': {
    padding: '.5em',
    color: '#08FDD8',
  },
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
