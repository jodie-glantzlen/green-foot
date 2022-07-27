import request from 'superagent'

const rootUrl = '/api/v1/challenges'

export function fetchAllMyChallenges (email) {
  return request.get(rootUrl + '/mychallenges')
    .query('user_email=' + email)
    .then(res => res.body)
}

export function postMyChallenge (challengeData) {
  return request.post(rootUrl + '/mychallenges')
    .send(challengeData)
    .then(res => res.body)
}

export function patchMyChallenge (selectedChallengeId) {
  return request.patch(rootUrl + '/mychallenges')
    .send(selectedChallengeId)
    .then(res => res.body)
}
export function deleteMyChallenge (selectedChallengeId) {
  return request.delete(rootUrl + '/mychallenges/' + selectedChallengeId)
    .then(() => selectedChallengeId)
}
