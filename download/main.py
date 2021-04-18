import flask
from os import getenv
from rockset import Client

app = flask.Flask(__name__)
collection = Client(api_key=getenv("RS2_TOKEN"), api_server="api.rs2.usw2.rockset.com").Collection.retrieve("schoology-extension-downloads")

@app.route("/")
def main():
    return flask.redirect("https://github.com/Harker-Hackers/schoology-extension/archive/refs/heads/master.zip")

@app.after_request
def hits(response):
    collection.add_docs([{}])
    return(response)

if __name__ == "__main__":
    app.run()