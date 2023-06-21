# chrome-cs-bg-stream-example

Example Chrome extension that establishes a connection between a content script and a background script, sends some messages, and disconnects afterwards.

## Content script
* Establishes connection with background script
* Emits message containing random number every 2s
* Logs disconnection events to console

## Background script
* Logs connection events to console
* Logs messages received from content script
* Disconnects when 10th message is received from content script
* Logs disconnection events to console
