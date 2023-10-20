# Ultra Tic-Tac-Toe

Ultra Tic-Tac-Toe is a (kind of) fun multiplayer game, that replicates the real life Tic-Tac-Toe spin-off "Super Tic-Tac-Toe". It's like the original pen and paper game with the classic 3x3 field, but you have nine of those.

> Basically a big Tic-Tac-Toe field with a bunch of smaller Tic-Tac-Toe fields inside each cell.

### Game Rules

Ultra Tic-Tac-Toe borrows it's ruleset from 'Super Tic-Tac-Toe'. The Gamefield consists of one big Tic-Tac-Toe fields, that has nine smaller games of Tic-Tac-Toe in each of it's cells. The host starts and can place their marker wherever they want. The cell they choose to place their marker, determines, where the other player is allowed to place theirs next. If they choose to place theirs in the middle game on the **top right cell**, the other player **must** place their marker in the **top-right game**. If they now place in the middle, your the other person has to play in the middle game.

This continues until one of the players gets three in a row one of the nine games. When that happens, they mark the **entire cell** for themselves. If a player happens to place his marker, where the game is already won by someone, the other player can choose any place to put his marker, just like in the beginning.

The goal for both players is to win enough small games, to line up three games in a row.

### How to play

- Install the game [here]('itch.io') on itch.io or directly from GitHub
- Install RadminVPN or similar software and Launch
- Connect to the same netword with whoever you want to play against
- If you're the host, start the game, select a name and profile picture and click on _'Host'_
- If your enemy is the host, enter their respective IP-Adress from RadminVPN and click on _'Join'_

### How it works

The Game was made with Flutter, which may seem like a strange choice, if you compare it to libraries, that are purposefully made for Videogames, like [Lumina Engine]('google.com'). Before making this game, I was working on Shop-Up and learning Flutter whilst doing so. One day I heard about Super Tic-Tac-Toe and was instantly fascinated by it. Tic-Tac-Toe has always been a fun, but shallow game for me. Now seeing it with a new layer of depth made me pretty excited, so I tried it in an online whiteboard software and it felt pretty anticlimactic. Then and there, I decided to put Shop-Up on a halt and start this small sideproject for three reasons:

1. The one I just described
2. I never made a multiplayer game before this
3. I wanted to learn more about Flutter

In the beginning my estimate was, that this game was going to take about one weekend. This _could_ have been true, if I hadn't had a bunch of Ideas for new features. Also easy to use multiplayer, even on a level as simple as this, was **way** harder than I anticipated. I'll come to, what I mean with "easy to use" a bit later.

So the basic game structure, with the big field was done in a single day. I didn't use a canvas at all, because I thought just using regular widgets would make this process more streamlined and easier, but a bit more cookie-cutter, which is a compromise I was very willing to accept for a small sideproject like this.

hier gehts weiter
