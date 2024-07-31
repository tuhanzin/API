const config = require("../../../knexfile")
const knex = require("knex")

const connection = require(config.development)

module.exports = connection