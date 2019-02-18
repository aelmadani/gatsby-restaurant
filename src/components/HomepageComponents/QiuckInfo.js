import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QiuckInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QiuckInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fuga molestiae tempore repudiandae temporibus. Sit et, non amet quo
            dolorem quaerat ipsum distinctio ratione fugiat. Quod neque est
            voluptatibus sapiente mollitia magni ratione, saepe pariatur nam
            quis reprehenderit a quae?
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QiuckInfoWrapper>
      </Section>
    )
  }
}

const QiuckInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    word-spacing: 0.2rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
