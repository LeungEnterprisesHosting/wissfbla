#!/bin/bash

cd /vagrant/www-source
harp compile
rm ./www/deploy.sh
rm ./www/README.html
cp -r ./www/* /vagrant/wissfbla.github.io