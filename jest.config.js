/**
 * 1. You don't need to install the jest/types to use this file
 * 2. Usually the most important use of the config is the path and regex to select the test files
 * 3. Appart from that, 2 most usuful command is the exit: true, to force exit if there is an open handle
 */

// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	verbose: true,
	forceExit: true,
	// configuration for jest-extended
	setupFilesAfterEnv: ['./source/setup.js']
};

module.exports = config;
