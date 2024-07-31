import fetch from 'node-fetch'
import { encode_without_async } from '../libs/base64.js'

export const callServiceCheckStatus = async ({ endpoint, username: basicAuthUser, password: basicAuthPassword }) => {
  const basicAuth = encode_without_async(basicAuthUser + ':' + basicAuthPassword)
  const headers = {
    Authorization: `Basic ${basicAuth}`,
    'Accept-Language': 'EN',
    'Content-Type': 'application/json'
  }
  const response = await fetch(`${endpoint}/version`, {
    method: 'GET',
    headers
  })
    .then(async response => {
      const result = await response.json()
      if (result.res_code !== '0000') return { checker: false, result }
      return { checker: true, result }
    })
    .catch(error => {
      return { checker: false, result: error }
    })

  return response
}
