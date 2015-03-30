assert = require 'assert'
content = require '../src/content.json'

describe 'Content', ->

  for field in Object.keys(content)

    it "should contain a #{field}", ->
      assert content[field].length > 0, "The #{field} is blank"
