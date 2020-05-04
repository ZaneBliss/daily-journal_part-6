import entries from "./entriesDOM.js"
import API from "./data.js"

API.getJournalEntries().then(entries.renderJournalEntries)