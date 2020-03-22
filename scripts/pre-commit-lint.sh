#!/bin/bash

echo "ESLint running for staged files..."

# from https://eslint.org/docs/user-guide/integrations#source-control - Git pre-commit hook that only lints staged changes
fileList=$(git diff --diff-filter=d --cached --name-only | grep -E '\.js$')
if [ ${#fileList} -lt 1 ]; then
    echo -e "You have no staged files to test\n"
    exit
fi
npx eslint ${fileList[*]} "$@"
if [ $? -ne 0 ]; then
    echo -e "\nPlease fix the above linting issues before committing.\n"
    exit 1
fi
