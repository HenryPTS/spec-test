import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';
import articles from '../../../static/dummyArticles'
import humaniseDate from '../../utils/humaniseDate';

test('renders lists of articles', () => {
  const { getByText } = render(<ArticleList articles={articles} />);
  articles.forEach((article) => {
    expect(getByText(article.title)).toBeInTheDocument()
    expect(getByText(article.description)).toBeInTheDocument()
    expect(getByText(humaniseDate(article.publishedAt))).toBeInTheDocument()
  })
})
