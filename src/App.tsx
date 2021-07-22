import React from 'react'
import './App.css'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { blueGrey } from '@material-ui/core/colors'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import data from './data'

// TODO: fix multiple warnings showing on dev console

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
      <AutoRotatingCarousel
        open
        autoplay={false}
        mobile={useMediaQuery('(max-width:600px)')}
      >
        {data.map((item) => (
          <Slide
            media={<img src="#" alt="null" />}
            key={item.question}
            mediaBackgroundStyle={{ display: 'none' }}
            style={{ background: `${blueGrey[900]}` }}
            title={<h5>{item.question}</h5>}
            subtitle={<Answer answer={item.answer} />}
          />
        ))}
      </AutoRotatingCarousel>
    </main>
  )
}

export default App
