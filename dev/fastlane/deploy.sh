#!/bin/bash
if [ "$TRAVIS_BRANCH" == "publish" ]; then
  node dev/fastlane
fi