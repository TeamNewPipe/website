---
layout: post
title: "NewPipe will drop support for Android 5 in v0.28.7; welcome Aayush and Ida!"
short: "NewPipe drops Android 5 support"
date: 2026-04-29 14:00:00 + 01:00
categories: [pinned, announcement]
author: <a href="https://github.com/Stypox">@Stypox</a>
image: android-bot
excerpt_separator: <!-- more -->
---

TLDR: NewPipe v0.28.7 will stop supporting Android 5 because of some libraries that became incompatible with it; the NewPipe team recently e-met to welcome two contractors and discuss future endeavors.

<!-- more -->

Coinciding with this blogpost, we released a new update to NewPipe (v0.28.6), where we introduced a pop up on Android 5.0 and 5.1 notifying those users that NewPipe will stop being available on their device.

## Why we are dropping Android 5 support

NewPipe internally relies on the AndroidX/Jetpack libraries, that provide common UI components and handle finicky interactions with the system. The last few versions of those libraries, however, are incompatible with Android 5. Thus, unfortunately, NewPipe releases starting from v0.28.7 will only be installable on Android 6 and higher.

### Technical details

Android versions are identified by SDK API levels inside of an app's code. API 21 and 22 correspond to Android 5.0 and 5.1, and until v0.28.6, NewPipe has had `minSdk=21` in its manifest.

Google's [Jetpack/AndroidX libraries](https://developer.android.com/jetpack/androidx/explorer) have been [requiring API 23](https://developer.android.com/jetpack/androidx/versions) (Android 6) since June 2025. For roughly one year the NewPipe team decided to keep using old versions of those libraries, but this stance has become increasingly problematic as those versions miss important fixes and useful features.

As shown in [these charts](https://github.com/TeamNewPipe/NewPipe/issues/13438), less than 1% of Android users are still on Android 5. For reference, Google is only providing security updates for Android 14+, and Android 5 last received a security update in 2018 ([source](https://en.wikipedia.org/wiki/Android_version_history)).

Last time we bumped `minSdk` was in 2022, when we raised the minimum from Android 4.4 to Android 5. You can read more about that [here](https://github.com/TeamNewPipe/NewPipe/issues/7602). Back then the motivation was that, due to the heavy Android 5 API changes, supporting both 4.4 and 5+ required a lot of additional checks that often led to obscure bugs and developer frustruation. Although those motivations would also partially hold for the current case, we would have probabably postponed the bumping for a couple more years if it wasn't for libraries becoming incompatible.

### Conclusion

It is sad for us to have to drop support for old Android 5 devices: we tried postponing this as much as possible to keep them alive and reduce e-waste, but now the time has come. If you know of any legacy fork of NewPipe that intends to keep support for Android 5, please let us know in a comment, so we can add a link here.

## Updates from the team

7 members of the NewPipe team recently met in an 2.5-hour online meeting where many topics were discussed. We welcomed Aayush and Ida, the two contractors that are currently working on NewPipe thanks to your [donations](/donate/), as described in [the blogpost](https://newpipe-ev.de/blog/2026-03-29-two-new-contractors/) on NewPipe e.V.'s website. We also agreed to merge the `refactor` branch into the `dev` branch as quickly as possible, to bring to you the progress that has already been made on the refactor, and unlock the development of further features. Other endeavors we want to tackle in the short term are: implementing the SABR protocol for YouTube to prevent future breakages of the app ([please help out if you can!](https://github.com/TeamNewPipe/NewPipe/issues/12248)), refactoring the way streams are provided to the app by NewPipeExtractor (see [here](https://github.com/TeamNewPipe/NewPipeExtractor/issues/858#issuecomment-3289753673)), and replacing the current player implementation with [NewPlayer](https://github.com/TeamNewPipe/NewPlayer).

## Wanna Contribute?

If you like the app enough to want to make it even better, or you noticed some glaring error that you can't help but want to fix, you can [read our contribution guidelines](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md#bug-fixing) and do a Fix-It Felix.

Or, if you're bilingual (or even multilingual), you could help [translate the app](https://hosted.weblate.org/engage/newpipe/).

**Feature additions** to the old codebase have been put on hold for now. We're pretty swamped as it is, and are working to clear our large (and critical) backlog first. Our next priority is to finish the rewrite of the codebase. We are making progress - slowly, but steadily - and you can help out on that too (and learn modern Android development practices along the way).
