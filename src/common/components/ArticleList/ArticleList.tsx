import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { ArticleData } from '../../../types'
import Article from '../Article/Article'

const ArticleListContainer = styled.div`
  padding-top: 75px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 60px;
  & > div {
    margin-bottom: 60px;
  }
`

interface Props extends HTMLAttributes<HTMLElement> {
  articles: Array<ArticleData>
}

const ArticleList: FC<Props> = (props) => (
  <ArticleListContainer>
    {props.articles?.map((article) => (
      <Article
        key={article.url}
        {...article}
      />
    ))}
  </ArticleListContainer>
)

export default ArticleList
