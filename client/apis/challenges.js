import request from 'superagent'

export function fetchAllChallenges () {
  return request.get('/api/v1/challenges')
    .then(res => res.body)
}

export function patchChallenge (challengeData) {
  return request.patch('/api/v1/challenges')
    .send(challengeData)
    .then(res => res.body)
}
