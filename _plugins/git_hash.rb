module Jekyll

    #
    # Show the hash of current Git HEAD.
    #
    class GitHash < Liquid::Tag
        include Jekyll::LiquidExtensions
        def getRawHash()
            hash = %x( git rev-parse --short HEAD )
            # remove newlines and other whitespaces at the beginning and end of the hash
            # for some reason one strip is not enough
            return hash.strip
        end
		def render(context)
		    getRawHash()
        end
    end
end

Liquid::Template.register_tag('git_hash', Jekyll::GitHash)
