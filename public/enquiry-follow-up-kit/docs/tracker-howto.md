# Enquiry follow-up tracker — how to use

This kit’s tracker is a **manual spreadsheet / CSV**. Reception logs each enquiry by hand. The clinic owner reviews open items on Mondays. It does **not** capture WhatsApp or calls automatically.

All sample rows in `tracker-template.csv` are **synthetic** (fake clinic names and dates). Do not treat them as real patients or prospects.

## Columns

| Column | Meaning |
|--------|---------|
| `who` | Who enquired (name / clinic label for samples) |
| `channel` | How they reached you: WhatsApp, Phone, or Form |
| `received_at` | When the enquiry arrived |
| `first_reply_at` | When someone first replied (leave blank if still waiting) |
| `owner` | Staff member responsible for the next step |
| `next_action_date` | Date of the next follow-up or review |
| `outcome` | e.g. `open`, `pending`, `booked`, `lost` |
| `notes` | Short free-text context |

## Reception: logging an enquiry

1. Open the sheet (or import `tracker-template.csv` into Google Sheets / Excel / LibreOffice).
2. Add a **new row** as soon as an enquiry lands — do not wait for a reply.
3. Fill `who`, `channel`, `received_at`, and assign an `owner`.
4. Leave `first_reply_at` empty until someone actually replies; then fill it.
5. Set `next_action_date` (usually same day or next working day) and `outcome` to `open` or `pending`.
6. Keep `notes` short (one line is enough).

Tip: if several people share the sheet, agree that **one person owns each row** so chase-ups do not collide.

## Owner: Monday review

Once a week (Monday works well):

1. **Sort or filter** by `next_action_date` ascending — anything due today or overdue floats to the top.
2. **Filter** `outcome` to show `open` and `pending` only (hide `booked` / `lost` for the action list).
3. For each row: check whether `first_reply_at` is blank (no reply yet) or whether a promised follow-up is due.
4. Update `next_action_date`, `outcome`, and `notes` after you act.
5. Spot-check: rows with a late or missing first reply are the ones the free calculator estimates as “revenue at risk.”

You do not need formulas for the free kit. Filters and sort in any spreadsheet app are enough.

## What this free kit is NOT

- **Not** live WhatsApp / call / form capture
- **Not** an API integration, bot, or CRM
- **Not** n8n, NocoDB, Activepieces, or any automation stack
- **Not** a source of GoviStudio-measured clinic statistics — sample rows and calculator defaults are **illustrative / synthetic**

When you outgrow the sheet, the paid upgrade path covers capture, assignment, reminders, and reporting (see the kit `README.md`). Publishing and contacting clinics are separate later gates — this file only documents the free tracker.
