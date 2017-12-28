function shout(content) {
  return content.toUpperCase()
}

function whisper(content) {
  return content.toLowerCase()
}

function logShout(content) {
  console.log(shout(content))
}
function logWhisper(content) {
  console.log(whisper(content))
}
function sayHiToGrandma(content) {
  if (content === whisper(content))
    return "I can't hear you!"
}
