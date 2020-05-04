const component = {
    makeJournalEntryComponent: (journalEntry) => {
        return `
        <h1>${journalEntry.concepts}</h1>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
        <p>${journalEntry.mood}</p>
        `
    }
}

export default component