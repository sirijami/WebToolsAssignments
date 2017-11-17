import { host, myapp, mainTopic } from './constants';

export const makeHeaders = (headers={}) => {
  const final = {};
  for( const field of ['Content-Type', 'x-user-token'] ) {
    if(headers[field]) {
      final[field] = headers[field];
    }
  }
  final['Content-Type'] = headers['Content-Type'] || 'application/json';
  return final;
}

export const passErrors = (error) => {
  if(error && error.error) {
    console.warn('Error: ', error);
  } else {
    console.warn(error);
  }
  return Promise.reject(error);
};

export const commonFetch = ( url, options={} ) => {
  const headers = makeHeaders(options.headers || {});
  const request = {
    method: options.method || 'GET',
    headers: new Headers(headers)
  };
  if(options.body) {
    request.body = options.body;
  }
  return fetch( url, request)
  .then( (response) => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( (error) => Promise.reject(error) );
  })
  .catch( passErrors );
};


export const login = ({username, password}) => {
  return commonFetch(`//${host}/users/${myapp}/${username}/session`, {
    method: 'POST',
    body: JSON.stringify( { password })
  });
};

export const logout = ({ username, token }) => {
  return commonFetch(`//${host}/users/${myapp}/${username}/session`, {
    method: 'DELETE',
    headers: { 'x-user-token': token },
  });
};

export const register = ({ username, password }) => {
  return commonFetch(`//${host}/users/${myapp}/${username}`, {
    method: 'POST',
    body: JSON.stringify( { password }),
  });
};

export const addItem = ({token, item}) => {
  return commonFetch(`//${host}/topics/${myapp}/${mainTopic}`, {
    method: 'PUT',
    headers: { 'x-user-token': token },
    body: JSON.stringify(item)
  })
  .catch( passErrors )
  .then( () => loadAll({token}) ) // list may have changed, reload
  .catch( passErrors )
};

export const loadAll = ({token}) => {
  return commonFetch(`//${host}/topics/${myapp}/${mainTopic}`, {
    headers: { 'x-user-token': token },
  })
  .catch( error => {
    if(error === 'no-such-topic') {
      return commonFetch(`//${host}/topics/${myapp}/${mainTopic}`, {
        headers: { 'x-user-token': token },
        method: 'POST',
        body: JSON.stringify({ details: {} }),
      })
      .then( () => [] );
    }
    return passErrors(error);
  });
};
