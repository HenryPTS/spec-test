import React, { FC, HTMLAttributes } from 'react'
import { ArticleCategory } from '../../../types'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLElement> {
  activeCategory: ArticleCategory
  setActiveCategory: (category: ArticleCategory) => void 
}

type CategoryHeaderProps = {
  selected: boolean
}

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  background: #ffffff;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CategoryHeader = styled.h3<CategoryHeaderProps>`
  cursor: pointer;
  color: ${props => props.selected ? '#d30d1d' : '#262222'};
  font-weight: 400;
`

const NavBar: FC<Props> = ({
  className = "",
  setActiveCategory,
  activeCategory,
  ...rest
}) => (
  <NavbarContainer>
    <CategoryHeader
      selected={activeCategory === 'general'}
      onClick={() => setActiveCategory('general')}
    >
      General
    </CategoryHeader>
    <CategoryHeader
    selected={activeCategory === 'business'}
      onClick={() => setActiveCategory('business')}
    >
      Business
    </CategoryHeader>
    <CategoryHeader
    selected={activeCategory === 'technology'}
      onClick={() => setActiveCategory('technology')}
    >
      Technology
    </CategoryHeader>
    <CategoryHeader
    selected={activeCategory === 'sports'}
      onClick={() => setActiveCategory('sports')}
    >
      Sports
    </CategoryHeader>
    <CategoryHeader
      selected={activeCategory === 'entertainment'}
      onClick={() => setActiveCategory('entertainment')}
    >
      Entertainment
    </CategoryHeader>
    <CategoryHeader
    selected={activeCategory === 'health'}
      onClick={() => setActiveCategory('health')}
    >
      Health
    </CategoryHeader>
  </NavbarContainer>
)

export default NavBar
