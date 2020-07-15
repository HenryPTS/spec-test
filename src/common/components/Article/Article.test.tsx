import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';
import humaniseDate from '../../utils/humaniseDate';
const props = {
  source: {
    id: "der-tagesspiegel",
    name: "Der Tagesspiegel"
  },    
  author: "the article author",
  title: "the article title",
  description: "the article description",
  url: "https://www.wsj.com/articles/white-house-weighs-scaling-back-rules-on-foreign-students-studying-online-11594746772",
  urlToImage: "https://images.wsj.net/im-209176/social",
  publishedAt: "2020-07-14T19:36:00Z",
  content: "the article content"
}
test('renders article props', () => {
  const { getByText } = render(<Article {...props} />);
  expect(getByText(props.author)).toBeInTheDocument()
  expect(getByText(props.title)).toBeInTheDocument()
  expect(getByText(props.description)).toBeInTheDocument()
  expect(getByText(humaniseDate(props.publishedAt))).toBeInTheDocument()
})
