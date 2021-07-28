import React from 'react'
import './App.css'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { blueGrey } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import data from './data'

const StyledCarousel = withStyles({
  footer: {
    display: 'none', // remove dotted guide footer
  },
})(AutoRotatingCarousel)

const StyledSlide = withStyles({
  root: {
    backgroundColor: blueGrey[900],
    height: 'unset',
  },
  title: {
    margin: 0,
    lineHeight: '1.3em',
    whiteSpace: 'normal',
    letterSpacing: '0.1em',
    fontSize: '1.2em',
    fontWeight: 'bold',
    flex: 1,
  },
  text: {
    padding: '1em 0',
  },
  mediaBackground: {
    flex: 1,
    backgroundColor: blueGrey[900],
    padding: '0 1.5em',
    textAlign: 'left',
  },
  media: {
    color: '#fff',
    alignItems: 'start',
    transform: 'unset',

    '& > p': {
      lineHeight: '1.8em',
      letterSpacing: '0.2em',
    },

    '& > ul': {
      paddingLeft: '1.1em',

      '& > li': {
        lineHeight: '1.8em',
        letterSpacing: '0.2em',
        marginBottom: '1.1em',
        fontSize: '14px',
      },
    },
  },
})(Slide)

type AnswerType = { answer: string | string[] }
/**
 * Create element containing the quiz answer
 * @param {string | string[]} answer -  Text representing the quiz answer
 * @returns {React.ReactElement} if answer is type array return list Element <ul> else return paragraph element <p>
 */
function Answer({ answer }: AnswerType) {
  let content: React.ReactElement
  if (Array.isArray(answer)) {
    content = (
      <ul>
        {answer.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  } else {
    content = <p>{answer}</p>
  }

  return content
}

function App() {
  return (
    <main>
      <StyledCarousel
        open
        autoplay={false}
        mobile={useMediaQuery('(max-width:600px)')}
      >
        {data.map((item) => (
          <StyledSlide
            key={item.question}
            media={<Answer answer={item.answer} />}
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
            title={item.question}
            subtitle=""
          />
        ))}
      </StyledCarousel>
    </main>
  )
}

export default App
