import flask
from os import getenv
from rockset import Client, Q
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = flask.Flask(__name__)
rs = Client(api_key=getenv("RS2_TOKEN"), api_server="api.rs2.usw2.rockset.com")
collection = rs.Collection.retrieve("schoology-extension-downloads")
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["30 per day"]
)

class ServerException(Exception):
    def __init__(self, message, status_code, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

@app.route("/")
def main():
    return flask.redirect("https://github.com/Harker-Hackers/schoology-extension/archive/refs/heads/master.zip")

@app.route("/dashboard")
def dashboard():
    if flask.request.args.get("token") == getenv("DASHBOARD_TOKEN"):
        return {"data": list(rs.sql(Q("select _event_time from \"schoology-extension-downloads\"")))}
    else:
        return main()

@app.after_request
def log(response):
    if response._status_code == 302:
        collection.add_docs([{}])
    print(response._status)
    return(response)

if __name__ == "__main__":
    app.run(debug=True)