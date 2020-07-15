import React, { FC } from 'react'
import { ArticleData } from '../../../types'
import styled from 'styled-components'
import humaniseDate from '../../utils/humaniseDate'
import Placeholder from '../../svg/placeholder.svg'

const ArticleContainer = styled.div`
  display: inline-flex;
  max-width: 450px;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
`

const ArticleHeader = styled.h1`
  font-size: 26px;
  font-weight: 400;
  line-height: 30px;
`

const ArticleAuthor = styled.h5`
  color: #d30d1d;
  font-size: 19px;
  line-height: 19px;
  font-weight: 400;
`

const ArticleImg = styled.img`
  max-width: inherit;
  height: auto;
  max-height: 200px;
`
const ArticleContent = styled.p`
  font-size: 14px;
`

const Article: FC<ArticleData> = (props) => (
  <ArticleContainer>
    <ArticleAuthor>{props.author || props.source.name}</ArticleAuthor>
    <span>{humaniseDate(props.publishedAt)}</span>
    <a href={props.url}><ArticleHeader>{props.title}</ArticleHeader></a>
    <ArticleImg src={props.urlToImage || Placeholder} />
    <ArticleContent>{props.description}</ArticleContent>
  </ArticleContainer>
)

export default Article
