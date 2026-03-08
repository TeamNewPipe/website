---
layout: post
title: "Google will lock-down Android in September 2026 and NewPipe 0.28.4 release"
short: "Google will lock-down Android"
date: 2026-02-23 21:00:00 + 01:00
categories: [pinned, announcement]
author: <a href="https://github.com/poolitzer">@poolitzer</a>
image: altered_deal
excerpt_separator: <!-- more -->
---

As you have no doubt noticed, we have a banner with an ominous countdown now prominent on our website: Google will lock-down Android, and we need to raise awareness.
 <!-- more -->
Coinciding with this blog posts, we released a new update to NewPipe, where we introduced a pop up also notifying users there that they will need to take steps in order to keep using NewPipe.

## About Google
This is not a fun blog post to write, believe me. Androids future is dear to our heart, and we believe that one of its main aspects was its openness, clearly separating it from Apple's iOS as the better choice for every tinkerer and developer. For the past few years Google has continuously taken steps to remove this openness, and now it hit us. Google plans to force developers to become registered developers and submit their personal data during the registration process. By doing so, Google does no only collect data, but more importantly can decide who is allowed to create and publish apps for "registered" devices or not.

We will not enroll in this privacy violating program and give up the anonymity of our developers. We do not want to be at the mercy of Google to allow our app to work. And you should not be content with this restriction either. Follow the steps outlined at [keepandroidopen.com](https://keepandroidopen.org/) and resist this further lock-down of your device.

## Highlights of the new release
Getting back to the fun part of having a new NewPipe version, we have on our hand, lets have a look at the highlights of this release. In order to improve the loading of the subscription feed, the order in which they are fetched is now randomized. That should also help against fingerprinting users. Comment pages which could be stacked infinitely via reopening videos from channels, not anymore. And in certain parts of the app, e.g. the _content unavailable_ screen, click throughs could happen through that screen in whatever lies underneath. This was done by [@jpds](https://github.com/jpds), [@aivelon](https://github.com/aivelon) and [@dustdfg](https://github.com/dustdfg) respectively thank you very much. 

## Wanna Contribute?

If you like the app enough to want to make it even better, or you noticed some glaring error that you can't help but want to fix, you can [read our contribution guidelines](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md#bug-fixing) and do a Fix-It Felix.

Or, if you're bilingual (or even multilingual), you could help [translate the app](https://hosted.weblate.org/engage/newpipe/).

**Feature additions** to the old codebase have been put on hold for now. We're pretty swamped as it is, and are working to clear our large (and critical) backlog first. Our next priority is to finish the rewrite of the codebase. We are making progress - slowly, but steadily - and you can help out on that too (and learn modern Android development practices along the way).
