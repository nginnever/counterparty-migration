import json
import requests
import sched, time

# from bifocal import utils, models
# from polo import Polo
# from coindesk import Coindesk

# from requests.auth import HTTPBasicAuth
# from bitcoinrpc.authproxy import AuthServiceProxy, JSONRPCException
# from counterpartylib.lib import util

url = "https://counterpartychain.io/api/sends/15R2o71rd6dop78uAJm8Cshg3pbDwD6EsN"
headers = {'content-type': 'application/json'}

payload = {
           "params": {},
           "jsonrpc": "2.0",
           "id": 0
          }

response = requests.post(url, data=json.dumps(payload), headers=headers)
print("Response: ", response.json())
