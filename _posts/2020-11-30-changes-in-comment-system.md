---
layout: post
title: "Changes in our blog's comment feature"
short: "Changes in comment system"
date: 2020-11-30 21:30:00 +0100
categories: [pinned]
author: TheAssassin
image: newpipe
excerpt_separator: <!-- more -->
---

Starting today, we have changed our blog's comment system. In this post, we explain what we changed, why we did so, and how this affects you as a loyal reader.

**TL;DR:** We introduce a simple set of rules, as well as moderation.

<!-- more -->

## How our blog works technically (*the boring introduction*)

Our blog is basically a set of static HTML pages, some JavaScript and CSS code, all served by an arbitrary webserver. We don't run a backend software; instead, we build the pages beforehand. This kind of setup is commonly called a [static website](https://en.wikipedia.org/wiki/Static_web_page).

Static websites are not new; in fact, this is how the web started decades ago. The concept was rediscovered in the late 2000s, as modern static site generators were published as free software. These allowed for templating, writing content in markup languages less annoying than plain HTML such as [Markdown](https://en.wikipedia.org/wiki/Markdown) or [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText), plugins to extend their functionality, etc. Also, by then, JavaScript was no longer a niche technology, allowing website operators to serve dynamic content by letting the client fetch the data and represent it. This made for more lightweight websites, shifted some of the workload to the client, eliminated the need to run code (other than the webserver) server-side and thus significantly reduced the workload, allowing more clients to be served.

When we started our blog, we jumped on the static website train for multiple reasons: first, we were pretty sure it would suffice our needs with regards to showing dynamic content (JavaScript is sufficient to render the data, and we wrote a tiny little web service in Python to serve the data via API endpoints). Second, most [content management systems](https://en.wikipedia.org/wiki/Content_management_system) out in the wild are rather insecure and hacked regularly. By reducing the amount of code actively run by the server to said API, we greatly reduced the attack surface on our system. The third and most important reason, however, is that using a static site generator allowed us to move the content into a Git repository, allow third parties to contribute more easily to it, have a history of changes for everything, and, last but not least, allow for testing new features easily on any developer workstation.

Our software of choice was [Jekyll](https://en.wikipedia.org/wiki/Jekyll_(software)), a free software written in [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)). Jekyll is very extensible, has a large and active community, and is widely used (for example, GitHub's Pages system supports Jekyll out of the box). Back then, most alternatives were either too limited, or didn't exist yet. Being based on Ruby, it can be tricky to get Jekyll to run on workstations and in automatic build systems. However, with [Docker](https://en.wikipedia.org/wiki/Docker_(software)) and some gaffer tape, it has been working reasonably well for us since then.

Given that our page is static, you may ask, how do we manage to have a comment system? Doesn't that require some server-side software to run? Well, you're absolutely right. Our system of choice is called [Isso](https://posativ.org/isso/), a system clearly inspired by "cloud" solutions like Disqus, which we host on our own infrastructure and embed using some JavaScript code. It is free software as well, and provides all the features we'd expect from a comment system.


## What we changed recently (*the interesting part*)

Our Isso hadn't been updated in a while, mostly because the Docker image we had used was abandoned by the author. Fortunately, Isso nowadays ships with a Dockerfile. Unfortunately (pun intended), they don't publish a pre-built image anywhere.

To fix the issue, we started to have a build server monitor the repository for new tags, build the Docker images and publish them on a registry. This makes hosting Isso a lot easier (automation for the win!). All that was left to do was to transfer the existing configuration (implemented in environment variables) into an actual file, point the container to our existing database, and provide it with the new config file.

While we were at it, we enabled a couple of features in Isso, which were not available in the old Docker setup. The one you, our readers, will actually notice is the new moderation system. All comments are reviewed by us before they're published.

Along with this change, we have put together a few rules which we use as a base for our moderation work. As long as you adhere to these rules, your comments will be published by us.


## Why enable moderation at all?

In all the years since we started the website, we've received around a thousand comments. Luckily, only a few of those were actually spam, since we have always had some mitigations running (and, apparently, systems like Isso are esoteric enough that spammers don't support them).

However, the vast majority of these comments were not related to the content at all. We can sort over 90% of all comments into these categories:

1. complaints of all kinds, such as (non-exhaustive list):
    * complaints about the YouTube service being broken (happens every couple of months)
    * complaints about broken features (which usually have been fixed already)
    * complaints about F-Droid being slow when publishing (kind of fixed since we [introduced our own F-Droid repository]({% post_url 2020-05-30-f-droid-repo %}))
1. feature requests of all kinds
1. fan mail ("you guys are great"), often mixed with either of the other categories

Many commenters use polite, objective language. Only a minority abuses punctuation (e.g., "??!?!!!!???!") or uses offensive language from what we've seen so far. However, with our recently published [position paper]({% post_url 2020-11-23-newpipe-and-online-advertising %}), we had a new experience: while some commenters praised our detailed style of writing (even if they disagreed with some points), there were a few commenters who tried to intimidate or harass the team. We even had to take one of these comments down for legal reasons.

To avoid further off-topic discussions in the future and prevent hatred from being published, we now moderate all incoming comments. And in order to make our moderation as transparent as possible, we put together a simple set of rules which we present in [The Hitchhiker's Guide to Commenting]({{ site.baseurl }}/meta/comment-rules/). This document serves as a manual for our moderation team, and as long as you don't violate it, we will of course publish any comment, (yes, also critical ones). We believe that constructive criticism is an important part of any discourse.

We want to emphasize that we never liked the vast amount of off-topic among the comments. In fact, in the starting days, when the volume was low, we tried to reply to some of them. However, in the end, feature requests as well as bug reports belong [on GitHub](https://github.com/TeamNewPipe/NewPipe/issues), not in our comments system. In fact, those would likely be missed or ignored due to their sheer amount, potentially leaving some commenters disappointed.

Please note that you are still allowed *and* encouraged to express your thoughts about a blog post. All we aim for is to create a more productive and harassment-free environment, focussing on the content of blog posts. Also, we are not going to apply the rules to existing comments (unless they're offensive).

**We're looking forward to seeing your feedback on these changes. As usual, please feel free to post your thoughts below!**






