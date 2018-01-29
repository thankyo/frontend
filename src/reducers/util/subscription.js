import 'whatwg-fetch';

export default function (role) {
  return (email) => {
    let req = new Request(`/api/v1/user/subscribe/${role}`, {
      method: "POST",
      body: JSON.stringify(email),
    });
    let process = fetch(req);
    if (ga !== undefined)
      process.then(() => ga('send', 'event', 'conversion', 'signup'));
    return process;
  }
};