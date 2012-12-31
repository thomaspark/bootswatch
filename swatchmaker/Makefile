#
# BUILD BOOTSWATCH SWATCH
#

OUTPUT_PATH = swatch

bootswatch:
	lessc swatchmaker.less > ${OUTPUT_PATH}/bootstrap.css
	lessc --compress  swatchmaker.less > ${OUTPUT_PATH}/bootstrap.min.css
	lessc swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.css
	lessc --compress  swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.min.css

bootstrap:
	-test -d bootstrap && rm -r bootstrap
	curl --location -o latest_bootstrap.tar.gz https://github.com/twitter/bootstrap/tarball/master
	tar -xvzf latest_bootstrap.tar.gz
	mv twitter-bootstrap* bootstrap
	rm latest_bootstrap.tar.gz

default:
	-test -f swatch/variables.less && rm swatch/variables.less
	-test -f swatch/bootswatch.less && rm swatch/bootswatch.less
	curl --location -o swatch/variables.less https://raw.github.com/twitter/bootstrap/master/less/variables.less
	curl --location -o swatch/bootswatch.less https://raw.github.com/thomaspark/bootswatch/gh-pages/swatchmaker/swatch/bootswatch.less
	make bootswatch

.PHONY: bootswatch bootstrap default

