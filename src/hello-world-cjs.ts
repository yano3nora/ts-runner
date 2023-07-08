function helloWorldCjs(input: string): void {
  console.log('hello ' + input)
}

helloWorldCjs(require('fs').readFileSync('/dev/stdin', 'utf8'))
