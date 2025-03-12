# Github Workflow
### Table of contents
- [Work w/ tickets!](#work-w-tickets)
- [Pushing your changes](#pushing-your-changes)
- [Branch behind? do rebase!](#branch-behind-do-rebase)
- [Still in staging branch?](#still-in-staging-branch)
- [Merge to staging (for reviewers)](#merge-to-staging-for-reviewers)

## Work w/ tickets!
```bash
git checkout -b DY-<ticket number> origin/staging
```
1. Go to projects kanban board
2. Locate your ticket
3. Right sidebar scroll down to development
4. Connect your ticket

## Pushing your changes
_Please refer to [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for the format of your commit messages_
```bash
git add .
git commit -m "your message here"
git push origin <current branch name>
```
1. Create a PR (Pull Request)
2. Move the ticket to "For review" column
3. In case of errors:

```bash
git push origin <current branch name> --force
```

## Branch behind? do rebase!
_Do this first before pushing your changes if you are behind!_

```bash
git fetch origin staging
git rebase origin/staging
```
_Stash if you can't rebase_
```bash
git stash
git fetch origin staging
git rebase origin/staging
git stash pop
```
**_Fix possible merge conflicts_**
## Still in staging branch?
_Move to a remote branch_
```bash
git checkout -b DY-<ticket number> origin/staging
```
_If you can't move, stash!_
```bash
git stash
git checkout -b DY-<ticket number> origin/staging
git stash pop
```
## Merge to staging (for reviewers)
1. Do not merge!
2. Press the dropdown beside merge button
3. Click rebase & merge

**_If you have problems with the workflow never hesitate to ask questions_**

**_1 ticket 1 branch rule, make sure to only have 1 branch for each ticket for easier monitoring and reviews_**

_Workflow by Sam Dacara_