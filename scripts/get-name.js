#!/usr/bin/env node
'use strict'

const { exec } = require('child_process')

function main () {
  const deployments = process.argv.filter(item => item.includes('.vercel.app'))
  console.log(deployments.pop())
  process.exit(0)
}

main()