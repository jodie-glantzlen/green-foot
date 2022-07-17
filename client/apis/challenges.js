import request from 'superagent'

export function fetchAllChallenges() {
  return request.get('/api/v1/challenges')
  .then(res => res.body)
}

