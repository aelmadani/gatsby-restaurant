import React from 'react'
import styled from 'styled-components'
import defImg from '../images/bcg/homeBcg.jpeg'

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

// If we forget to add an "img" in props, then following standard image will be included
HomeHeader.defaultProps = {
  img: defImg,
}

PageHeader.defaultProps = {
  img: defImg,
}

export { HomeHeader, PageHeader }

//style of header
const IndexHeader = styled.header`
  min-height: calc(100vh - 54.781px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`
