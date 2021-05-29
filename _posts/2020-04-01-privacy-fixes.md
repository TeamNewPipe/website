---
layout: post
title: "Announcing release 0.19.2, removes YouTube and SoundCloud for privacy reasons"
short: "NewPipe 0.19.2 announcement"
date: 2020-04-01 12:00:00 +0100
categories: [release, pinned]
author: TheAssassin
image: newpipe
excerpt_separator: <!-- more -->
---

The NewPipe project has been informed about privacy concerns with regards to the integration of proprietary services YouTube and SoundCloud. Therefore, until further notice, we decided to remove these from the project. A hotfix release, 0.19.2, is being prepared and planned to be published tomorrow.

**Please beware that the following text was part of this year's April's fools joke. Please see @TheAssassin's reply in the comments for more details on the context of this joke.**

<!-- more -->

We have to make a sad announcement. NewPipe has always been a project that respects and enhances its users' privacy. In order to protect their privacy, many innovations have been included, such as a JavaScript and mostly tracker free way to fetch videos from third-party services, a completely transparent and opt-in crash reporting, etc.
The project started as a clutter-free YouTube interface for Android. NewPipe later received support for multiple services, starting with [SoundCloud](https://github.com/TeamNewPipe/NewPipe/releases/tag/v0.11.6), later adding support for [media.ccc.de]({{ site.url }}/blog/release/pinned/newpipe-0.16.0-released/) and [PeerTube]({{ site.url }}/blog/release/pinned/newpipe-0.18.0-released/).

As you all know, YouTube, SoundCloud etc. aren't quite "privacy-respecting", i.e., they use trackers and other algorithmic surveillance to your disadvantage. Recently, [a user noticed](https://github.com/TeamNewPipe/NewPipe/pull/3205#issuecomment-605742637) that requests to those services aren't covered by our privacy documents. This brought up the topic to our data protection office and board, and after days of intense discussion, we have concluded that under the terms of the EU-GDPR (formally, General Data Protection Regulation (EU) 2016/679) we cannot continue to provide these services in our app without paying for expensive lawyers who could forge a rock solid privacy policy which does no longer provide an attack surface for lawsuits.

We do not want to spend donation money on making the use of such privacy invasive services legally bulletproof. Content creators are recommended to switch to better, federated alternatives such as [PeerTube](https://peertube.org).

Please update NewPipe soon after we publish the new versions. We're covering up our traces in the GitHub repository already, there will be a major force-push later this week to remove any mentions of YouTube, SoundCloud etc. This post and a couple of older ones will also destroy themselves that date, so please print out all blog posts with important information beforehand.


## Where to get the latest version

NewPipe notifies you about new versions, you can download them when you press the notification. An alternative is the [GitHub release page](https://github.com/TeamNewPipe/NewPipe/releases). If you use the [F-Droid app](https://f-droid.org/), it notifies you as well about an update for [NewPipe](https://f-droid.org/packages/org.schabi.newpipe/) - please keep in mind that it can take F-Droid a while to update their repository.

Please let us know what your experience of the latest release is, especially bugs in need of fixing. As usual, you can reach out to us via IRC ([#newpipe on Libera.Chat](https://web.libera.chat/#newpipe)), [open issues on GitHub](https://github.com/TeamNewPipe/NewPipe/issues/new) or ideally use our built-in crash reporter to send us machine-readable issue reports. You can even [send in fixes](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md#bug-fixing) yourself.

