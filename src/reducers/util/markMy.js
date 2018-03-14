import auth from "./auth";

export const markMy = (res) => {
  if (Array.isArray(res)) {
    return res.map(markMy)
  } else {
    return {
      ... res,
      isMy: auth.isMy(res.user),
    }
  }
};

export const isMyObj = (obj) => {
  return obj && auth.isMy(obj.user);
};