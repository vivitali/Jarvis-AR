#!/bin/bash
if [ "$TRAVIS_BRANCH" == "publish" ]; then
  node dev/fastlane
  alias mycd='android'
  mycd
  fastlane playstore
fi