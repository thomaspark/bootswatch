#
# BUILD BOOTSWATCH SWATCH
#

bootswatch:
	lessc ./swatchmaker.less > swatch/bootstrap.css
	lessc --compress  ./swatchmaker.less > swatch/bootstrap.min.css

bootstrap:
	rm -r bootstrap
	wget -O latest_bootstrap.tar.gz https://github.com/twitter/bootstrap/tarball/master		
	tar -xvzf latest_bootstrap.tar.gz
	mv twitter-bootstrap* bootstrap
	rm latest_bootstrap.tar.gz

.PHONY: bootstrap

