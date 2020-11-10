const fs = require('fs');
const chalk = require('chalk')

function func() {
    return 'your nodes'
}

const listNodes = () => {
    console.log(chalk.bold.bgYellow('Your Notes'))
    loadNotes().forEach((note) => console.log(note.title))
}

const addNode = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    debugger

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNode(notes)
        console.log('new note was added')
    } else {
        console.log('title is already exists')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.red('note was removed'))
    } else {
        console.log(chalk.green('no notes to remove'))
    }
    saveNode(notesToKeep)
}

const saveNode = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))


const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    addNode: addNode,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNodes
}