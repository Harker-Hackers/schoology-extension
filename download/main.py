import flask
from os import getenv
from rockset import Client
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = flask.Flask(__name__)
collection = Client(api_key=getenv("RS2_TOKEN"), api_server="api.rs2.usw2.rockset.com").Collection.retrieve("schoology-extension-downloads")
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["30 per day"]
)

@app.route("/")
def main():
    return flask.redirect("https://github.com/Harker-Hackers/schoology-extension/archive/refs/heads/master.zip")

@app.after_request
def hits(response):
    collection.add_docs([{}])
    return(response)

if __name__ == "__main__":
    app.run()