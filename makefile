REPORTER = nyan
MOCHA_OPTS = --recursive

protractor:
	clear
	./node_modules/.bin/protractor  conf/protractor.conf.js 


NG:
	clear
	karma start conf/karma.conf.js --single-run