module.exports = (req, res, next) => {
    const base64json = Object.keys(req.query)[0];

    let clientDetails;

    if (base64json) {
        try {
            clientDetails = JSON.parse(atob(base64json));
        } catch (e) {
        }
    }

    req.clientDetails = clientDetails;
    next();
};