import request from 'superagent'

const rootUrl = '/api/v1/challenges'

export function  fetchAllMyChallenges() {
  return request.get(rootUrl + '/mychallenges')
    .then(res =>  res.body)
}

export function postMyChallenge(selectedChallengeId) {
  return request.post(rootUrl + '/mychallenges')
  .send(selectedChallengeId)
  .then(res => res.body)
}