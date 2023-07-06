import fs from 'fs'

function main(input: string): void {
  console.log('hello ' + input)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
