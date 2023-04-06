const notFound = (req, res) => res.status(404).send("Route doesn't exit");

module.exports = notFound;
