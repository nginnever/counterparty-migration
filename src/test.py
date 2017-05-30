import json
import requests
import sched, time
from requests.auth import HTTPBasicAuth
from bitcoinrpc.authproxy import AuthServiceProxy, JSONRPCException
# from counterpartylib.lib import util

url = "http://public.coindaddy.io:4000/api/"
headers = {'content-type': 'application/json'}
auth = HTTPBasicAuth('rpc', 1234)

# payload = {
#   "method": "get_sends",
#   "params": {"order_by": 'tx_hash',
#              "order_dir": 'asc',
#              "start_block": 280537,
#              "end_block": 320539},
#   "jsonrpc": "2.0",
#   "id": 0,
# }

# payload = {
#   "method": "get_asset_info",
#   "params": {"assets": ["SJCX"]},
#   "jsonrpc": "2.0",
#   "id": 0,
# }

# payload = {
#   "method": "get_asset_names",
#   "params": {},
#   "jsonrpc": "2.0",
#   "id": 0,
# }

# payload = {
#    "method": "get_balances",
#    "params": {
#       "filters": [{"field": "address", "op": "==", "value": "12boxGmEKUkLhHtc9qkxj2QC2MhZcff61A"},
#           			{"field": "asset", "op": "==", "value": "SJCX"}],
#       "filterop": "and"
#      },
#    "jsonrpc": "2.0",
#    "id": 0
#   }

response = requests.post(url, data=json.dumps(payload), headers=headers, auth=auth)
print("Response: ", response.text)

# rpc_user="bitcoinrpcuser"
# rpc_password="bitcoinrpcpass"
# rpc_connection = AuthServiceProxy("http://%s:%s@159.203.107.244:18333"%(rpc_user, rpc_password))
# best_block_hash = rpc_connection.getbestblockhash()
# print(rpc_connection.getblock(best_block_hash))

# s = sched.scheduler(time.time, time.sleep)
# def do_something(sc): 
#     print("Doing stuff...")
#     # do your stuff
#     s.enter(6, 1, do_something, (sc,))

# s.enter(6, 1, do_something, (s,))
# s.run()