# Usage
> https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

```sh
# Install
$ npm install

# Run Script with Stdin
$ echo 'world!' | npx ts-node src/hello-world.ts # hello world!
$ echo 'john!' | npx ts-node src/hello-world.ts # hello john!

# Using pbcopy / pbpaste on macOs
$ echo 'bob!' | pbcopy
$ pbpaste | npx ts-node src/hello-world.ts # hello bob!

# Using clip on Windows Git Bash
$ echo 'jane!' | clip
$ powershell -command "Get-Clipboard" | npx ts-node src/hello-world.ts # hello jane!

# Using input file
$ echo 'jack!' > input.txt
$ npx ts-node src/hello-world.ts < input.txt # hello jack!

# Run new script by code-runner
$ code src/your-script.ts
> Run Code # on vscode command palette
```
