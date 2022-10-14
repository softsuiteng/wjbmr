@echo off
for /R %%G in (*pdf) do Echo cpdf -squeeze -i %%G -o %%G