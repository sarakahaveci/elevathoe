#!/bin/python3
"""
network module of thin-client and unit-tests
"""
import os
import requests
import json
import hashlib

import config as config
import common as common

CONFIG = common.read_json(config.CONFIG_FILE)

def get_base_url(CONFIG):
    if CONFIG["LOCAL"] == 0:
        return CONFIG["BASE_URL"]
    else:
        return CONFIG["LOCAL_BASE_URL"]

def __download_with_headers(path, data, token):
    """
    """
    output = None
    url = os.path.join(get_base_url(CONFIG), path)
    headers = {'Authorization': 'Bearer {}'.format(token)}
    r = requests.get(url, json=data, headers=headers, verify=True, cert=ssl_context)

    output = r.json()
    url_storage = output["data"]["url"]
    headers = output["data"]["headers"]

    print(output)

    r2 = requests.get(url_storage, headers=headers, verify=True, cert=ssl_context)
    with open(CONFIG["OUTPUT_PDF"], "wb") as binary_file:
        binary_file.write(r2.content)

    return r2.status_code

def __upload_with_headers(path, data, token):
    """
    """
    output = None
    url = os.path.join(get_base_url(CONFIG), path)
    headers = {'Authorization': 'Bearer {}'.format(token)}

    data["md5sum"] = hashlib.md5(open(data["fpath"], "rb").read()).hexdigest()

    r = requests.get(url, json=data, headers=headers, verify=True, cert=ssl_context)
    output = r.json()

    url = output["data"]["url"]
    headers = output["data"]["headers"]

    with open(data["fpath"], "rb") as f:
        response = requests.put(url, data=f, headers=headers, cert=ssl_context)

    return r2.status_code

def __send_get_request(path, data, token):
    """
    """
    url = os.path.join(get_base_url(CONFIG), path)
    headers = {'Authorization': 'Bearer {}'.format(token)}
    r = requests.get(url, json=data, headers=headers, verify=True, cert=ssl_context)
    try:
        output = r.json()
        common.write_json(CONFIG["OUTPUT_FILE"], output)
    except:
        with open(CONFIG["OUTPUT_PDF"], "wb") as binary_file:
            binary_file.write(r.content)

    return r.status_code

def __send_post_request(path, data, token):
    """
    """
    url = os.path.join(get_base_url(CONFIG), path)
    headers = {'Authorization': 'Bearer {}'.format(token)}
    r = requests.post(url, json=data, headers=headers, verify=False)
    try:
        output = r.json()
        common.write_json(CONFIG["OUTPUT_FILE"], output)
    except:
        with open(CONFIG["OUTPUT_PDF"], "wb") as binary_file:
            binary_file.write(r.content)
    return r.status_code

def __send_file(path, data, token):
    """
    """
    url = os.path.join(get_base_url(CONFIG), path)
    r, files = None, None

    headers = {'Authorization': 'Bearer {}'.format(token)}
    if 'fpath' in data.keys():
        fpath = data['fpath']
        files = {'file': open(fpath, 'rb')}

    if files is not None:
        r = requests.post(url, headers=headers, files=files, params=data, verify=False)
    else:
        r = requests.post(url, headers=headers, params=data, verify=False)

    try:
        output = r.json()
        common.write_json(CONFIG["OUTPUT_FILE"], output)
    except:
        with open(CONFIG["OUTPUT_PDF"], "wb") as binary_file:
            binary_file.write(r.content)

    return r.status_code

def dispatch_request(rtype, path, data, token):
    """
    """
    if rtype == 'POST':
        return __send_post_request(path, data, token)
    elif rtype == 'GET':
        return __send_get_request(path, data, token)
    elif rtype == 'FPOST':
        return __send_file(path, data, token)
    elif rtype == 'DOWNLOAD':
        return __download_with_headers(path, data, token)
    elif rtype == 'UPLOAD':
        return __upload_with_headers(path, data, token)
    else:
        return -1

def get_token(url, username, password):
    """
    """
    headers = {}
    data = {"email": username, "password": password}
    r = requests.post(url, json=data, verify=False)
    output = r.json()
    return output['signInResponse']['data']['session']['access_token']
