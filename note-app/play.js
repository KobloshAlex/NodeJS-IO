const noteOperations = require('./nodejs')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'title note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteOperations.addNode(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'remove existing note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteOperations.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'show all notes',
    handler() {
        noteOperations.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    handler() {
        console.log("reading notes")
    }
})

yargs.parse()
