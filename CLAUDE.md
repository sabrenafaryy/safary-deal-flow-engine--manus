# CLAUDE.md — Deal Flow Engine — App

## Read these FIRST, before anything else

1. `/Users/sabrena/Desktop/Safary-Workspace/CLAUDE.md` — the business, the voice, the rules
2. `/Users/sabrena/Desktop/Safary-Workspace/20-Offers/Deal-Flow-Engine/_STATE.md` — where this engagement stands right now

Do not start work until you've read both. They are the source of truth.
Anything you remember from a previous chat is not.

## About this repo

The Deal Flow Engine application. Multi-tenant: client config keys off the GHL Location ID.
Never hardcode a client — the whole point is that client number two costs almost nothing.

Never store credentials in this repo.

## Before you finish

Update `/Users/sabrena/Desktop/Safary-Workspace/20-Offers/Deal-Flow-Engine/_STATE.md`:
- what changed
- a dated line in the decisions log
- anything the next session needs to know

**A session that ends without updating that file has lost its own context.**
Other sessions — Cowork chats, other Claude Code windows — cannot see this one.
That state file is the only handoff there is.

## House rules that apply here

- Never delete, overwrite, rename, or move a file without showing Sabrena exactly what
  changes and getting explicit confirmation
- Name outputs `ClientName-DeliverableType-YYYY-MM-DD`
- List every file created or modified, with full paths, at the end of every task
- Never take an irreversible action without confirmation in that session
