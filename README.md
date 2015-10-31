# Wiss FBLA Website
## Source Code
Visit us! [Wissahickon FBLA](http://wissfbla.com)

URL: [WissFBLA.com](http://wissfbla.com)
## How to Run
1. Make sure you have Node.js/NPM installed
2. Run `sudo npm install harp -g`
3. Make changes and then run `harp compile`
4. `git commit` the entire directory to the `www-source` repository
5. `git commit` the `www` directory to the `wissfbla.github.io` repository
6. Within 10 minutes, changes will appear on [WissFBLA.com](http://wissfbla.com)
## Development Workflow
* To update the news, copy `_latest-news.jade` to under `include _latest-news` in `news.jade` and replace it with the newest news.
* Run `./deploy.sh` to compile everything, then `git commit` and `git push` from each repository's respective directory.
