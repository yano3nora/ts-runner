import fs from 'fs'

function helloWorld(input: string): void {
  console.log('hello ' + input)
}

helloWorld(fs.readFileSync('/dev/stdin', 'utf8'))
