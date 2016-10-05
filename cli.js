#! /usr/bin/env node
'use strict';

const help = "Usage: fibonacci [index]"

// We need numbers
if (isNaN(+process.argv[2])) {
	console.log(help);
	process.exit(1);
}

// Calculate a fibonacci number
function fibCalc (total, prev = 1, current = 1) {
	if (total <= 1) {
		return current;
	}
	return fibCalc(--total, current, prev + current);
}

// Log the fibonacci number
console.log(process.argv[2] ? fibCalc(+process.argv[2]) : help);
