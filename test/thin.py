#!/bin/python3
import ast
import os
import sys

import network as network
import common as common
import config as config

if not os.path.isfile(config.CONFIG_FILE):
    common.write_json(config.CONFIG_FILE, DEFAULT_CONFIG)

CONFIG = common.read_json(config.CONFIG_FILE)

def dump_invalid_usage(msg):
    """
    """
    report = {
        'failure': 'invalid usage',
        'detail': msg,
        'uasge': 'python3 thin.py username password rtype path data',
    }
    common.write_json(CONFIG["OUTPUT_FILE"], report)

def main():
    """
    """

    if len(sys.argv) != 6:
        dump_invalid_usage("invalid argv number (should be 6)")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    login_url = ""
    rtype = sys.argv[3]
    path = sys.argv[4]
    data = ast.literal_eval(sys.argv[5])

    if CONFIG["LOCAL"] == 0:
        login_url = CONFIG["LOGIN_URL"]
    else:
        login_url = CONFIG["LOCAL_LOGIN_URL"]

    if username == 'free' and password == 'free':
        token = 'deadbeef'
    else:
        token = network.get_token(login_url, username, password)

    network.dispatch_request(rtype, path, data, token)

if __name__ == "__main__":
    main()
