@echo off
cd /d c:\Users\SNEHAL\Desktop\aiphishingdetection\ml
call venv\Scripts\activate
uvicorn app:app --host 0.0.0.0 --port 5000