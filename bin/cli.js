#!/usr/bin/env node

import {execSync} from "child_process";
import fs from "node:fs";

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
const gitCheckoutCommand = `npx degit https://github.com/TimFromKrim/tim-svelte-starter.git ${repoName}`;
const installDepsCommand = `\ncd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(
	"Congratulations! You are ready. Follow the following commands to start",
);

fs.rename("../_gitignore", "../.gitignore", (err) => {
	if (err) {
		console.error("Renaming file error");
	} else {
		console.log("Rename done");
	}
});

fs.unlink("../bin", (err) => {
	if (err) {
		console.error("Deleting error");
	} else {
		console.log("Deleting done");
	}
});

console.log(installDepsCommand);
