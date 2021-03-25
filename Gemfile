source "https://rubygems.org"
ruby RUBY_VERSION

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "4.2.0"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5", ">= 2.5.1"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.15", ">= 0.15.1"
   gem "jekyll-paginate"
end


########################################################################
############################### WINDOWS ################################
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# Uncomment the line below and run `bundler install` after that
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]


########################################################################
################################ TESTING ###############################
# Check for dead links.
# 1. uncommenting the lines below
# 2. $ bundle install
# 3. $ jekyll build
# 4. $ htmlproofer ./_site --allow-hash-href true  --empty_alt_ignore --url_ignore "/legal/privacy/,/js/embed.min.js" --http_status_ignore 429
# For detailed htmlproofer options see https://github.com/gjtorikian/html-proofer#configuration
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# gem "rake"
# gem "html-proofer"
