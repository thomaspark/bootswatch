#
# BUILD BOOTSWATCH SWATCH
#

OUTPUT_PATH = swatch

bootswatch:
	recess --compile swatchmaker.less > ${OUTPUT_PATH}/bootstrap.css
	recess --compress swatchmaker.less > ${OUTPUT_PATH}/bootstrap.min.css
	recess --compile swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.css
	recess --compress swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.min.css

bootstrap:
	-test -d bootstrap && rm -r bootstrap
	curl --location -o bootstrap-v2.3.2.tar.gz https://github.com/twbs/bootstrap/archive/v2.3.2.tar.gz
	tar -xvzf bootstrap-v2.3.2.tar.gz
	mv bootstrap-2.3.2 bootstrap
	rm bootstrap-v2.3.2.tar.gz

default:
	-test -f ${OUTPUT_PATH}/variables.less && rm ${OUTPUT_PATH}/variables.less
	-test -f ${OUTPUT_PATH}/bootswatch.less && rm ${OUTPUT_PATH}/bootswatch.less
	curl --location -o ${OUTPUT_PATH}/variables.less https://raw.github.com/twbs/bootstrap/v2.3.2/less/variables.less
	curl --location -o ${OUTPUT_PATH}/bootswatch.less https://raw.github.com/thomaspark/bootswatch/gh-pages/swatchmaker/swatch/bootswatch.less
	make bootswatch

watcher:
	ruby watcher.rb

server:
	open http://localhost:8000/test/test.html
	python -m SimpleHTTPServer

.PHONY: bootswatch bootstrap default watcher server

