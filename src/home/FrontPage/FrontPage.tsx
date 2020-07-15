import React, { FC, HTMLAttributes, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArticleData, Response, ArticleCategory } from '../../types'
import axios from 'axios'
import ArticleList from '../../common/components/ArticleList/ArticleList'
import NavBar from '../../common/components/Navbar/NavBar'

interface Props extends HTMLAttributes<HTMLElement> {}

interface FrontPageState {
  loading: boolean,
  articles: Array<ArticleData>,
  error: string | undefined,
  category: ArticleCategory
}

const FrontPageContainer = styled.div`
  padding: 0 15px;
  margin: auto;
`

const FrontPage: FC<Props> = () => {
  const [state, setState] = useState<FrontPageState>({
    loading: true,
    articles: [],
    error: undefined,
    category: "general"
  })

  useEffect(() => {
    async function fetchHeadlines() {
      try {
        const res = await axios.get<Response>(`https://newsapi.org/v2/top-headlines?country=gb&category=${state.category}&apiKey=54e4d5ccd1b14dcd98c07419abbed7d8`)
        setState({ ...state, loading: false, articles: res.data.articles })  
      } catch (error) {
        setState({ ...state, loading: false, articles: [], error: error.toString() })
      }
    }
    fetchHeadlines();
  }, [state.category])

  return (
  <FrontPageContainer>
    <NavBar
      activeCategory={state.category}
      setActiveCategory={handleChangeCategory}
    />
    <ArticleList articles={state.articles} />
    {state.loading ? (
      <h1>Loading....</h1>
    ) : ''}
    {state.error ? (
      <h1>{state.error}</h1>
    ) : ''}
  </FrontPageContainer>
  )

  function handleChangeCategory(category: ArticleCategory) {
    if (category === state.category) return;
    setState({ ...state, loading: true, articles: [], category })
  }

}

export default FrontPage
