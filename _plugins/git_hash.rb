module Jekyll

    #
    # Show the hash of current Git HEAD.
    #
    class GitHash < Liquid::Tag
        include Jekyll::LiquidExtensions
		def render(context)
            %x( git rev-parse --short HEAD )
		end
    end
end

Liquid::Template.register_tag('git_hash', Jekyll::GitHash)
