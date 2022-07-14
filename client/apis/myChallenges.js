import request from 'superagent'

const rootUrl = '/api/v1/challenges'

export function  fetchAllMyChallenges() {
  return request.get(rootUrl + '/mychallenges')
    .then(res => {
     return res.body

    })
}
