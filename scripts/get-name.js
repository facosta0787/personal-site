#!/usr/bin/env node
'use strict'

function main () {
  const args = process.argv
  const deployment = args[9]

  if (!deployment) process.exit(1)

  console.log(deployment)
  process.exit(0)
}

main()