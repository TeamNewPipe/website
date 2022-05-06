---
layout: post
title: "An overdue announcement about NewPipe-Legacy being archived"
short: "NewPipe-Legacy archived, lack of maintainer"
date: 2022-04-30 01:00:00 + 2:00
categories: [pinned]
author: Team NewPipe
image: newpipe
excerpt_separator: <!-- more -->
---

The gist: [NewPipe-Legacy](https://github.com/TeamNewPipe/NewPipe-legacy) isn't maintained anymore (since January 2021, actually). The team is hoping for a developer to step up and become a permanent maintainer for the Legacy version. This means that if you, the user, are unhappy with the app/face any issue while using it, you either need to switch to a device with a newer OS, or to an alternative app that supports your Android version. At least for the time being.

<!-- more -->

## Regarding: users

We're sorry to tell you that the erstwhile maintainer of NewPipe-Legacy, [@friendlyanon](https://github.com/friendlyanon), isn't interested in maintaining it anymore. So those of you that are stuck on devices which run Android versions 4.1 to 4.4 are out of luck for now if anything breaks that you are using. If a developer comes along and updates the Legacy app, great! Until then, you can only shake your fist with anger, sadly.

Anyway, let us all thank [@friendlyanon](https://github.com/friendlyanon) for maintaining NewPipe-Legacy for as long as they did!

## Regarding: developers

Please note that NewPipe will be moving on to a newer, maintained version of OkHttp soon, which unfortunately means letting go of Kitkat (4.4+) support. Lollipop (5.0+) will become the new minimum version we officially support.

What this means for any prospective maintainer is that they will need to look for an alternative to OkHttp that is actively maintained and supports Kitkat (and below?) as well. Using an unmaintained library means a risk of exposing users to any security exploits that get discovered in them, which we are not willing to take.

Moreover, the Extractor has also moved on to using Java 8 fully, instead of just the limited Java 7 features compatible with old Android versions. Fortunately `desugaring` exists, which allows you to down-compile modern features into Java bytecode that is compatible with older versions. Desugaring up to Java 8 is still not fully available on pre-KitKat, but Google is working on this, and a new Android Gradle Plugin version will soon be released with the needed capabilities.

That's it. If you're still up for the challenge after reading all that, then please drop us a message on [#IRC](https://web.libera.chat/#newpipe), or better yet, open an issue on the [NewPipe repo](https://github.com/TeamNewPipe/NewPipe/issues/new) letting us know you're interested in maintaining NewPipe-Legacy!

Team NewPipe out *Mic/App updates drop*.
