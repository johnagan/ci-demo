require "normalize.css/normalize"
require.context "images"
require "stylesheets"

content = require("content")
document.body.innerHTML = require("views/index")(content)
