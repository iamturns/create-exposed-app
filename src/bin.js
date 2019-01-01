#!/usr/bin/env node
const { createApp } = require("./create-app/create-app")
const { setupProcess } = require("./utils/process")

setupProcess()
createApp()
