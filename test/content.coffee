assert = require 'assert'
content = require '../src/content.json'

describe 'Content', ->

  it 'should contain a title', ->
    assert content.title.length > 0, 'The title is blank'

  it 'should contain a subtitle', ->
    assert content.subtitle.length > 0, 'The subtitle is blank'

  it 'should contain a message', ->
    assert content.message.length > 0, 'The message is blank'
