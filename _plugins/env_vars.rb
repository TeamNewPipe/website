module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['isso_address'] = ENV['ISSO_ADDRESS']
    end

  end

end
