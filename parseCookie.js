module.exports = cookieString => {
    const cookies = {};
    if (cookieString) {
        cookieString.split(';').forEach(cookie => {
            const split = cookie.split('=');
            if (split[0].length > 0) {
                cookies[split[0]] = split[1];
            }
        });
    }

    return cookies;
};
