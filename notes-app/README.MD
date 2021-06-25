# notes-app

### development
- dowload node version greater >10
- npm i
- app.js is our goto file head over to app.js file.
- from command line run: node app.js

#### Steps to add, remove, list, read notes.
- Add note: node app.js add --title="your unique title, cannot be duplicated" --body="note body"
- Remove note: node app.js remove --title="value of title to remove"
- List notes: node app.js list
- Read note: node app.js read --title="value of title to read"

### Debugging
- Navigate to file you want to debug
- Add dubugger command in any file and at any line from where you want to debug your app: debugger;
- run app using node with inspect from terminal as usual you do, example: node inspect app.js add title="add title" --body="note body".
- in command line/ terminal you will see debugger opened at some port.
- head over to chrome://inspect
- select the file from remote target where your debugger is.
- move debugger ahead one step it will now stop at debugger point where you have added in your file.
- In console you access any value by typing its name it will be logged in console.
- Thats the way to debug your app or you can debug with console.log in your file.

### Enjoy coding...
