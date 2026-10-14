@echo off
title PriceWise - One-Click GitHub Login & Push
color 0b
cd /d "C:\Users\papan\Downloads\kishore"

set "PATH=%LOCALAPPDATA%\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd;%LOCALAPPDATA%\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin;%PATH%"

echo ====================================================================
echo             PriceWise - Push to GitHub Repository
echo             Repo: https://github.com/nandhareddy9642-oss/nandha.git
echo ====================================================================
echo.
echo [1/3] Launching GitHub Browser Authorization...
echo       Your browser will open automatically.
echo       Enter the one-time code shown below if prompted.
echo.

gh auth login --hostname github.com --git-protocol https --web

if %errorlevel% neq 0 (
    echo.
    echo GitHub login failed or was cancelled.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] Configuring Git credentials...
gh auth setup-git

echo.
echo [3/3] Pushing PriceWise project to GitHub (branch: main)...
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ====================================================================
    echo [SUCCESS] Your code is now live on GitHub:
    echo           https://github.com/nandhareddy9642-oss/nandha
    echo ====================================================================
) else (
    echo ====================================================================
    echo [ERROR] Push encountered an issue. Please check the message above.
    echo ====================================================================
)
echo.
pause
