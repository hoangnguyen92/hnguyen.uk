---
title: "Blameless Incident Postmortem Template for Notion"
date: 2026-10-24
description: "A free Notion system for engineering teams to run blameless postmortems — and actually finish the action items."
tags: [notion, incident-response, postmortem, reliability, engineering]
---

# Blameless Incident Postmortem Template for Notion

A free Notion system for engineering teams to run blameless postmortems — and actually finish the action items.

[Get the template (free)](https://nguyenhoang053.gumroad.com/l/postmortem)

## Why I built it

Most postmortems get written, filed, and forgotten. The document looks complete, but the action items quietly die: nobody owns them, nobody checks them, and the same incident comes back a few months later.

I built this from my own reliability work. The core idea is simple: a postmortem is not done when the document is written. It is done when the actions are done. So the template tracks actions as first-class citizens, with owners, due dates, and an overdue view that makes unfinished work impossible to ignore.

## What's inside

- **Incidents database** — every incident in one place, with severity, status, timeline, and a duration that computes itself from start and end times.
- **Action Items database** — linked both ways to its incident, so you can see at a glance what each incident still owes you.
- **Progress you can see** — each incident rolls up the percentage of its actions that are done, and an Overdue view flags anything past its due date while still in progress.
- **Views that match the workflow** — incidents by status board, recent incidents, by severity, and calendar; actions by open, overdue, and owner.
- **Blameless page template** — timeline, contributing factors, 5 Whys, and a rule that every contributing factor gets a prevention action, not just a description.
- **Severity guide** — SEV1 (critical, system-wide outage) through SEV4 (low, internal), with when to page and when a postmortem is required.
- **Quick-start guide** — set it up and write your first postmortem in minutes.
- **Worked example** — a full SEV2 postmortem (checkout API p99 latency spike: a deploy added an N+1 query, p99 went from 300ms to 4.2s, mitigated by feature flag), with four action items at 75% done, including one deliberately overdue example so you can see the Overdue view working.

## How to use it

Get it free on Gumroad (pay what you want), duplicate it into your own Notion workspace, and it is yours. No setup beyond that: add an incident, fill in the template, and let the action items carry the follow-through.

Created by a Production Engineer at Meta, working on reliability.
