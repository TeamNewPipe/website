---
layout: post
title: "NewPipe release retrospection: 0.17.1 - 0.17.4"
date: 2019-11-19 00:00:00 +0100
categories: [release, pinned]
author: TheAssassin
image: newpipe
excerpt_separator: <!-- more -->
---

You might have wondered why there haven't been any release announcements since 0.16.2. Unfortunately, writing these blog posts can consume a lot of time which our developers often think is better invested in writing new features or fixing bugs.

However, you, the users, should have the chance to track all the changes made from release to release in such summaries, and we apologize for having had let things slide for a while. In this blog post, I want to provide a really short summary of what has changed in the last months, and what is yet to come in the upcoming 0.18.0 release.

<!-- more -->

## Changes in 0.17.1

In 0.17.1, the team fixed a lot of bugs. There were disappearing buttons, performance issues as well as an unnecessary storage of settings. In the extractor, a bug causing an intermittent issue (*yay, that's the kind of bug developers like most!*) in the YouTube video search within NewPipe as well as a problem with the ever annoying ReCaptcha widgets have been fixed.

There's also been a couple of improvements. For instance, an action regarding long-press menus for the playlists has been restored. Also, a switch has been added to choose between the *Storage Access Framework* (SAF) or legacy file pickers. This is important as some ROMs haven't implemented the SAF completely and are therefore not fully compliant with the so-called CTS. NewPipe now detects whether the SAF is available and if not uses the old picker as a fallback.

The only novelty introduced in this release is a localization for Thai. Thanks to all translators helping make NewPipe available in native languages!

It seems the 0.17.0 release hasn't made it through due to some issues. However, [@TobiGr](https://github.com/TobiGr) has provided a summary of what has changed from 0.17.0 to 0.17.1. New features involved a playback resume feature that allows for resuming streams where you stopped last time after switching to another stream. Furthermore, the downloader received a couple of minor additions, and there also have a few improvements and of course many bug fixes.

For more information, see also the [release page](https://github.com/TeamNewPipe/NewPipe/releases/tag/v0.17.1), which also contains a description of the 0.17.0 release.


## Changes in 0.17.2

0.17.2 was a hotfix release that became necessary due to changes made by YouTube to their website, which broke most alternative YouTube frontends as well, including [youtube-dl](https://ytdl-org.github.io/youtube-dl/).

Big thanks to [@Stypox](https://github.com/Stypox) for providing a fix soon after the issue was reported, allowing us to publish the fix quickly (not even a single day, after all!).

I want to repeat once again that we highly appreciate bug reports by users. They're by far the most important line of feedback we can utilize. However, I ask you not to overuse "same here" in comments following an initial bug report. Please use less spammy methods like GitHub reactions (the small emoticons on the lower left corner) to confirm a bug. If you can contribute more useful information such as links to other repositories affected by the same bug or results of your own investigation, please don't hesitate to comment. Problems arise only when there's too much off-topic such as YouTube bashing or simple confirms, they produce a huge wave of notifications, mails etc., and distract from the *really* useful comments. We've had similar issues lately in other issues and PRs, and this really just binds resources that are better invested in writing fixes.
Please see also  [my comment in the respective issue](https://github.com/TeamNewPipe/NewPipe/issues/2615#issuecomment-530445812).

For more information, see also the [release page](https://github.com/TeamNewPipe/NewPipe/releases/tag/v0.17.2).


## Changes in 0.17.3

In this release, again many improvements have been added to NewPipe. Most notably, a new option has been added to clear all positions in playlists. Until then, you had to clear your entire watch history, however in most cases that's undesirable. Another useful addition is that NewPipe can now show hidden files in the file picker.

Most of you probably know [invidio.us](https://invidio.us), a free/open-source alternative web frontend to YouTube. NewPipe has been able to open links to the central instance for a while already. 0.17.3 now also supports opening URLs pointing to all [publicly listed instances](https://github.com/omarroth/invidious/wiki/invidious-instances), which means you can open links to Invidious in NewPipe just like you can open links to YouTube. Also, links to `music.youtube.com` can now be opened in NewPipe.

The most interesting bugs fixed in this release are an annoying exception caused by a small but important typo in the extractor. Furthermore, a bug in the playback of live streams has been resolved. Also, a bug producing performance problems has been fixed in the extractor.

For more information, see also the [release page](https://github.com/TeamNewPipe/NewPipe/releases/tag/v0.17.3).


## Changes in 0.17.4

In 0.17.4, the accessibility for blind people has been improved a little. Thanks to [@fcnjd](https://github.com/fcnjd) for assisting [@theScrabi](https://github.com/theScrabi) with helpful advice while implementing these changes. Furthermore, the wording of the description of the "video download folder" has been improved grammar wise.

Some bugs have been fixed regarding the download of videos from YouTube. Furthermore, some bugs related to scrolling have been resolved. The "clear search box" is now animated properly, and a lot of issues with the SoundCloud implementation could be fixed in this release, making this provider more reliable than ever before.

A few minor changes involve an upgrade of two dependencies (ExoPlayer and OkHttp) as well as migrating to the Android X APIs (a rather large and notable change that shouldn't go unmentioned). 

For more information, see also the [release page](https://github.com/TeamNewPipe/NewPipe/releases/tag/v0.17.4).


## Upcoming release

Soon Team NewPipe will be able to release version 0.18.0. We will post a release announcement here once ready. A few changes which we can announce already involve using new localization and downloader implementations introduced in the extractor as well as adding support for the Kotlin language, allowing the development of new features in this language. Another noteworthy feature we can announce already is the [overhaul of the "What's new" section](https://github.com/TeamNewPipe/NewPipe/pull/2309), including a properly sorted feed and subscription groups to further improve your user experience.


## Help wanted for website maintenance

We hope you can understand the reasons for the missing release announcements. We'll try to post updates on our work more regularly again. Let us know what you think in the comments. If you like writing blog posts and think you could help us there, please see [this issue](https://github.com/TeamNewPipe/website/issues/125).


## Where to get the latest version

We recommend you to install the [F-Droid app](https://f-droid.org/) as it notifies you as soon as an update for [NewPipe](https://f-droid.org/packages/org.schabi.newpipe/) is available.

Please let us know what your experience of the latest release is, especially bugs in need of fixing. As usual, you can reach out to us via IRC ([#newpipe on Libera.Chat](https://web.libera.chat/#newpipe)), [open issues on GitHub](https://github.com/TeamNewPipe/NewPipe/issues/new) or ideally use our built-in crash reporter to send us machine-readable issue reports, or [send in fixes](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md#bug-fixing) yourself.

