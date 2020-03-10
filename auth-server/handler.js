'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=ldc9mb8idsbqe85fu26gf8e5va'
    + '&client_secret=hvqm3mb2l830d5v2q3v3r4a57t'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://ssymonds17.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'X-OAuth-Scopes': 'basic, reporting, ageless',
      'X-Accepted-OAuth-Scopes': 'basic, reporting, ageless'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=ldc9mb8idsbqe85fu26gf8e5va'
    + '&client_secret=hvqm3mb2l830d5v2q3v3r4a57t'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'X-OAuth-Scopes': 'basic, reporting',
      'X-Accepted-OAuth-Scopes': 'basic, reporting'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};