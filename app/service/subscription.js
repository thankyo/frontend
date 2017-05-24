import 'whatwg-fetch';

export default function(role) {
    return (email) => {
        let req = new Request(`/api/v1/subscribe/${role}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email),
        });
        let process = fetch(req);
        if (ga !== undefined)
            process.then(() => ga('send', 'event', 'conversion', 'signup'));
        return process;
    }
};