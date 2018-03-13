import auth from "./auth";

export const markMy = (req) => {
  if (Array.isArray(req)) {
    return req.map(markMy)
  } else {
    return {
      ... req,
      isMy: auth.isMy(req.user),
    }
  }

}