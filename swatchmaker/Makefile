#
# BUILD BOOTSWATCH SWATCH
#

OUTPUT_PATH = swatch

bootswatch:
	lessc swatchmaker.less > ${OUTPUT_PATH}/bootstrap.css
	lessc --compress  swatchmaker.less > ${OUTPUT_PATH}/bootstrap.min.css
	lessc swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.css
	lessc --compress  swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.min.css

sass-bootswatch:
	sass swatchmaker.scss > ${OUTPUT_PATH}/bootstrap.css
	sass --style compressed  swatchmaker.scss > ${OUTPUT_PATH}/bootstrap.min.css
	sass swatchmaker-responsive.scss > ${OUTPUT_PATH}/bootstrap-responsive.css
	sass --style compressed  swatchmaker-responsive.scss > ${OUTPUT_PATH}/bootstrap-responsive.min.css

theme:
	@echo 
	@echo "-----------------------"
	@echo "#  Building $(name)"
	@echo "-----------------------"
	cp ../$(name)/*.less swatch/
	make bootswatch
	cp swatch/bootstrap* ../$(name)
	@echo "done"

sass-theme:
	@echo 
	@echo "-----------------------"
	@echo "#  Building $(name)"
	@echo "-----------------------"
	cp ../$(name)/*.scss swatch/
	make sass-bootswatch
	cp swatch/bootstrap* ../$(name)
	@echo "done"

all-themes:
	@make theme name=amelia
	@make theme name=cerulean
	@make theme name=cosmo
	@make theme name=cyborg
	@make theme name=journal
	@make theme name=readable
	@make theme name=simplex
	@make theme name=slate
	@make theme name=spacelab
	@make theme name=spruce
	@make theme name=superhero
	@make theme name=united

sass-all-themes:
	@make sass-theme name=amelia
	@make sass-theme name=cerulean
	@make sass-theme name=cosmo
	@make sass-theme name=cyborg
	@make sass-theme name=journal
	@make sass-theme name=readable
	@make sass-theme name=simplex
	@make sass-theme name=slate
	@make sass-theme name=spacelab
	@make sass-theme name=spruce
	@make sass-theme name=superhero
	@make sass-theme name=united

bootstrap:
	-test -d bootstrap && rm -r bootstrap
	curl --location -o latest_bootstrap.tar.gz https://github.com/twitter/bootstrap/tarball/master
	tar -xvzf latest_bootstrap.tar.gz
	mv twitter-bootstrap* bootstrap
	rm latest_bootstrap.tar.gz

sass-bootstrap:
	-test -d sass-bootstrap && rm -r sass-bootstrap
	curl --location -o latest_sass_bootstrap.tar.gz https://github.com/jlong/sass-twitter-bootstrap/tarball/master
	tar -xvzf latest_sass_bootstrap.tar.gz
	mv jlong-sass-twitter-bootstrap* sass-bootstrap
	rm latest_sass_bootstrap.tar.gz

default:
	-test -f swatch/variables.less && rm swatch/variables.less
	-test -f swatch/bootswatch.less && rm swatch/bootswatch.less
	curl --location -o swatch/variables.less https://raw.github.com/twitter/bootstrap/master/less/variables.less
	curl --location -o swatch/bootswatch.less https://raw.github.com/thomaspark/bootswatch/gh-pages/swatchmaker/swatch/bootswatch.less
	make bootswatch

sass-default:
	-test -f swatch/variables.less && rm swatch/variables.scss
	-test -f swatch/bootswatch.less && rm swatch/bootswatch.scss
	curl --location -o swatch/variables.less https://raw.github.com/jlong/sass-twitter-bootstrap/master/lib/_variables.scss
	curl --location -o swatch/bootswatch.less https://raw.github.com/theblacksmith/sass-bootswatch/gh-pages/swatchmaker/swatch/_bootswatch.scss
	make bootswatch

.PHONY: bootswatch bootstrap default

