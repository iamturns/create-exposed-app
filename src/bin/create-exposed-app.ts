#!/usr/bin/env node

import { createApp } from "../create-app/create-app"
import { setupProcess } from "../utils/process"

setupProcess()
createApp()
