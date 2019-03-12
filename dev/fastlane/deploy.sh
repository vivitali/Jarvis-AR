#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  node dev/fastlane
  alias mycd='android'
  mycd
  fastlane playstore
fi