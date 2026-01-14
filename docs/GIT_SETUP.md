# Git Setup for `vakansia`

## Recommended Git Aliases

Run this script to set up useful aliases:

```bash
# Quick setup

curl -fsSL https://raw.githubusercontent.com/mehdiasadli/vakansia/main/scripts/setup-git.sh | bash

# Or Manually
git config --global alias.ac '!git add . && git commit -m'
git config --global alias.ch 'checkout'
# ...etc
```

See full list in [Git Workflow Guide](./GIT_WORKFLOW.md#git-aliases).