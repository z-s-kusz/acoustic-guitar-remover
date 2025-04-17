### Utility to remove the video of a guy playing acoustic guitar on Ultimate Guitar's tab pages. // Learning chrome snippets.

This isn't the most user friendly method but I'm running it through chrome snippets.
It's marginally faster than opening dev tools, selecting the element and deleting it :) .

#### To Create a Snippet
1. Copy the contents of `index.js`.
2. Open chrome dev tools.
3. Open snippets: `ctr + p` then type `show snippets` and hit `enter`.
4. Create a new snippet, name it anything. I call it 'acoustic-guitar-remover.'
5. Paste contents you copied from `index.js`.
Or see this page with a video https://developer.chrome.com/docs/devtools/javascript/snippets

#### To Run a Snippet
0. Starting from a freshly loaded tab that has some idiot playing a random song (I've never clicked it to see what he is playing).
1. Open dev tools `Ctrl + Shift + i`.
2. Focus the dev tools by clicking anywhere in it.
3. Press `Ctrl + p` then in the command window that appears type `!acoustic-guitar-remover` and press `enter`.
Don't forget the `!`! You shouldn't have to type the whole name, it autofills. This is currently my only script so I can just hit enter immidiatly after typeing the `!`.
