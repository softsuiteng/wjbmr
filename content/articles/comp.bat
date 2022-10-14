@REM for FILE in *; do echo $FILE; done

for /R %%f in (*.pdf) do cpdf -squeeze -i "%%f" -o %%f