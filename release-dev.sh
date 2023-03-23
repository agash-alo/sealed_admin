# Grant execute permission for sh file with below command
# chmod u+r+x staging-release.sh


echo|set /p=Current Time %date% %time% >>release.md
git config user.name >>release.md
git add release.md && git commit -m "Current Time  %date% %time%" && git push
