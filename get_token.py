import urllib.parse
import urllib.request
import http.server
import threading
import webbrowser
import base64
import json

CLIENT_ID     = "5c09d065545f4e4b89ea66ceeea92b74"
CLIENT_SECRET = "587810c055e24268842edaa097991194"
REDIRECT_URI  = "http://127.0.0.1:8888/callback"
SCOPE         = "user-read-currently-playing"

auth_code = None

class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        global auth_code
        parsed = urllib.parse.urlparse(self.path)
        params = urllib.parse.parse_qs(parsed.query)
        if "code" in params:
            auth_code = params["code"][0]
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"<h2>got it! you can close this tab.</h2>")
        else:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"<h2>something went wrong :(</h2>")
        threading.Thread(target=self.server.shutdown).start()

    def log_message(self, *args): pass

# start local server
server = http.server.HTTPServer(("127.0.0.1", 8888), Handler)

# open browser to spotify auth
params = urllib.parse.urlencode({
    "client_id":     CLIENT_ID,
    "response_type": "code",
    "redirect_uri":  REDIRECT_URI,
    "scope":         SCOPE,
})
url = f"https://accounts.spotify.com/authorize?{params}"
print("opening spotify in your browser...")
webbrowser.open(url)

# wait for callback
server.serve_forever()

if not auth_code:
    print("no code received :(")
    exit(1)

# exchange code for tokens
credentials = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
data = urllib.parse.urlencode({
    "grant_type":   "authorization_code",
    "code":         auth_code,
    "redirect_uri": REDIRECT_URI,
}).encode()

req = urllib.request.Request(
    "https://accounts.spotify.com/api/token",
    data=data,
    headers={
        "Authorization": f"Basic {credentials}",
        "Content-Type":  "application/x-www-form-urlencoded",
    }
)

with urllib.request.urlopen(req) as res:
    tokens = json.loads(res.read())

print("\n>> your refresh token (save this somewhere safe):\n")
print(tokens["refresh_token"])
print("\npaste it in Vercel as SPOTIFY_REFRESH_TOKEN when we deploy.")
