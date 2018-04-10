import { AUTHENTICATION } from "./auth.actions";
import tokenStore from "reducers/util/JWTTokenStore";
import { decodeToken } from "reducers/auth.actions";

function updateAnalytics({ id, email}) {
  try {
    if (Raven) {
      Raven.setUserContext({ id, email });
    }
  } catch (err) {
  }

  try {
    if (ga) {
      ga('set', 'userId', id)
    }
  } catch (err) {
  }

  try {
    $crisp.push(["set", "user:email", [ email ]])
  } catch (err) { }

}

function initialState() {
  let { host, protocol } = window.location;
  let facebook = `https://graph.facebook.com/v2.9/oauth/authorize?scope=email,user_friends,user_birthday&client_id=${FACEBOOK_KEY}&redirect_uri=${protocol}//${host}/auth/facebook&response_type=code`;
  let google = `https://accounts.google.com/o/oauth2/auth?scope=profile email https://www.googleapis.com/auth/siteverification&client_id=${GOOGLE_KEY}&redirect_uri=${protocol}//${host}/auth/google&response_type=code&access_type=offline&include_granted_scopes=true&prompt=consent`;
  let tumblr = `/api/v1/auth/social/tumblr`;

  let token = tokenStore.getToken();
  let isAuthenticated = token != null;
  let details = isAuthenticated ? decodeToken(token) : undefined;

  if (isAuthenticated) {
    updateAnalytics(details);
  }

  return {
    url: {
      facebook,
      google,
      tumblr
    },
    isAuthenticated,
    details
  };
}

export default function authReducer(state = initialState(), { type, payload }) {
  switch (type) {
    case AUTHENTICATION.fulfilled:
      updateAnalytics(payload.details);
      return {
        ... state,
        isAuthenticated: true,
        details: payload.details
      };
    default:
      return state;
  }
}