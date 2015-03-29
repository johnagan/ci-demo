fs = require 'fs'
assert = require 'assert'

describe 'Readme', ->
  readme = fs.readFileSync('README.md', 'utf8')

  # it 'should pass', ->
  #   assert.equal 1, 2

  it 'should have the correct author', ->
    authorRegex = /john agan/ig
    assert authorRegex.test(readme), 'Incorrect Author'
