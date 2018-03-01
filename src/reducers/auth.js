function initialState() {
  let { host, protocol } = window.location;
  let facebook = `https://graph.facebook.com/v2.9/oauth/authorize?scope=email&client_id=${FACEBOOK_KEY}&redirect_uri=${protocol}//${host}/auth/facebook&response_type=code`;
  let google = `https://accounts.google.com/o/oauth2/auth?scope=profile email https://www.googleapis.com/auth/siteverification&client_id=${GOOGLE_KEY}&redirect_uri=${protocol}//${host}/auth/google&response_type=code&access_type=offline&include_granted_scopes=true&prompt=consent`;
  return {
    url: {
      facebook,
      google
    }
  };
}

export default function authReducer(state = initialState()) {
  return state;
}