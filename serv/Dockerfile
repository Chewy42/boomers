FROM python:3.9-slim-buster

WORKDIR /app

COPY . .

COPY requirements.txt .
COPY run_flask.sh .

RUN pip install -r requirements.txt

EXPOSE 5000

# Run app.py when the container launches
# For normal use
#CMD ["python", "app.py"]
# For live debugging
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000", "--debugger", "--reload"]
# keep container running but dont run server