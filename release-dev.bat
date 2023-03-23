git fetch
echo|set /p=Current Time %date% %time% >>release.md
git config user.name >>release.md
git add release.md && git commit -m "Current Time  %date% %time%" && git push
