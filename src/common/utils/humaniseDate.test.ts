import humaniseDate from './humaniseDate'

test('renders humanised date formate', () => {
  const humanisedDate = humaniseDate("2020-07-15T12:00:00Z")
  expect(humanisedDate).toEqual('15.07.2020 at 13:00')
})