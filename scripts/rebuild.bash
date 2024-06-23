#!/bin/bash

yarn build
cp docs/CNAME /tmp/
rm -rf ./docs
mv dist docs
mv /tmp/CNAME ./docs/
