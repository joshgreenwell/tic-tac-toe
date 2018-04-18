# Tic Tac Toe

[Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) (also known as noughts and crosses or Xs and Os) is a paper-and-pencil
game for two players, X and O, who take turns marking the spaces in a 3×3 grid.
The player who succeeds in placing three of their marks in a horizontal, vertical,
or diagonal row wins the game.

## Install

First, install [nodejs](https://nodejs.org/en/), which in turn, also installs [npm](https://www.npmjs.com/) (node package manager)
Further installation instructions can be found [here](https://nodejs.org/en/download/)
*If you already have nodejs, you can skip this step.* <br />

### Manual Install Serve

Second, install `serve` globally.
*If you already have serve, you can skip this step too.*

```
npm install -g serve
```

[Serve](https://www.npmjs.com/package/serve) is a [module, or package](https://www.w3schools.com/nodejs/nodejs_npm.asp), that is used to serve your static files like a server/cdn
would. You no longer have to use a direct file path from your file system.

Now you are done!

### Use package.json

You can run this command to download serve if you haven't already and automatically start the serve module

```
npm run start
```

Additionally, the `start` script runs a `setup` in the background that just does the serve download

```
npm run setup
```

## Running the Game

Now, to run the game, all you have to do is open a command line or terminal and run a few commands.
First, navigate to the directory your code is in.

```
cd /path/to/dir
```

The path foramt will change depending on your operating system.
Second, run the serve command to start serving from your folder.

```
serve ./src
```

Finally, open your browser and navigate to `localhost:5000/index.html` or `localhost:<your_port>/<your_file_name>.html`.
Serve, by default, sets the port to 5000, so that is likely that port. Additionally your file name will likely be index.html.

## Testing

**For developers:** This repo uses [Jest](https://facebook.github.io/jest/) for testing.

```
npm install && npm run test
```