import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: 'message',
  title: 'title',
}

const TitleWrapper = styled.div`
  text-align: center;
  .message {
    font-family: 'Caveat', cursive;
    letter-spacing: 0.3rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    letter-spacing: 0.3rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`