#!/usr/bin/env node
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import {execSync} from "child_process";

const runCommand = (command) => {
	try {
		execSync(`${command}`, {stdio: "inherit"});
	} catch (e) {
		console.error(`Failed to execute ${command}`, e);
		return false;
	}
	return true;
};

const repoName =
	process.argv[2] == undefined ? "tim-svelte-starter" : process.argv[2];
const gitCheckoutCommand = `npx degit https://github.com/TimFromKrim/tim-svelte-vite-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(
	"Congratulations! You are ready. Follow the following commands to start",
);
console.log(installDepsCommand);
