import flask
from os import getenv
from rockset import Client, Q
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from requests import get

app = flask.Flask(__name__)
rs = Client(api_key=getenv("RS2_TOKEN"), api_server="api.rs2.usw2.rockset.com")
collection = rs.Collection.retrieve("schoology-extension-downloads")
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["30 per day"]
)

@app.route("/")
def main():
    latest_zip = get("https://api.github.com/repos/Harker-Hackers/schoology-extension/releases/latest").json()["zipball_url"]
    return flask.redirect(latest_zip)

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
    app.run()