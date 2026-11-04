@echo off
setlocal

rem === Pfade anpassen ===
set REPO=C:\Projekte\wlm-demo
set SHAREPOINT=C:\Users\%USERNAME%\Muster\WLM - Dokumente\WLM-Reports
set LOG=%REPO%\reports\lauf-log.txt

rem === Datum im Format JJJJ-MM-TT ===
for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd"') do set HEUTE=%%i

cd /d "%REPO%"
if not exist reports mkdir reports
echo [%HEUTE% %TIME%] Start >> "%LOG%"

rem === Neuesten Code-Stand holen ===
git pull --quiet >> "%LOG%" 2>&1

rem === Tagescheck mit Copilot CLI ===
copilot -p "Fuehre den Tagescheck laut .github/prompts/tagescheck.prompt.md aus. Speichere den Report als reports/%HEUTE%.md. Lege keine Jira-Stories an." -s --allow-tool="write" --allow-tool="github" --allow-tool="atlassian" >> "%LOG%" 2>&1

rem === Report nach SharePoint kopieren ===
if exist "reports\%HEUTE%.md" (
  copy /Y "reports\%HEUTE%.md" "%SHAREPOINT%\" >nul
  echo [%HEUTE% %TIME%] OK, Report nach SharePoint kopiert >> "%LOG%"
) else (
  echo [%HEUTE% %TIME%] FEHLER: kein Report erzeugt >> "%LOG%"
)
endlocal
