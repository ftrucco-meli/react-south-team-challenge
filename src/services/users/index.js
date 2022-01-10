import axios from 'axios';
import camelCase from 'lodash.camelcase';

function transformUserResponse(response) {
  const users = response.results;

  console.log('users', users);

  return users.map((user) => ({
    firstName: camelCase(user.name.first),
    lastName: camelCase(user.name.last),
    email: user.email,
    phoneNumber: user.cell,
    location: user.location,
    picture: user.picture,
  }));
}

async function getUsers({ limit }) {
  let userData;
  console.log('SERVICE RESPONSE', response);

  axios({
    method: 'GET',
    url: 'https://randomuser.me/',
    headers: {
      'cross-origin': true,
    },
    params: {
      results: limit,
    },
    transformResponse: transformUserResponse,
  }).then((response) => {
    userData = response.data?.results;
  });

  return userData;
}

export default getUsers;
