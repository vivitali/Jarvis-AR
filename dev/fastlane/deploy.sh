#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  node dev/fastlane
fi