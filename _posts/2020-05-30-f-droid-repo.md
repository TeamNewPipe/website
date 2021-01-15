---
layout: post
title: "Team NewPipe publishes own F-Droid repository"
short: "NewPipe F-Droid repository"
date: 2020-05-30 23:30:00 +0100
categories: [announcement, f-droid, pinned]
author: TheAssassin
image: newpipe
excerpt_separator: <!-- more -->
---

Team NewPipe proudly announces a self-hosted F-Droid repository, providing the official NewPipe app as well as -- in the future -- NewPipe Legacy. The F-Droid repository is a convenient way for users to update more quickly, which is especially useful whenever one of the supported services break.

<!-- more -->

## How to add the repository to F-Droid

Instead of telling you the boring story behind the repository, let's first talk about how you can use it from F-Droid on your device(s).

The easiest way to add the repository is to scan the QR code below or [click this link](fdroidrepos://archive.newpipe.net/fdroid/repo/?fingerprint=E2402C78F9B97C6C89E97DB914A2751FDA1D02FE2039CC0897A462BDB57E7501) if you're viewing this on your device already. F-Droid should pop up on both, prompting you to add the repository. For the paranoid (*which is not a bad idea, especially in this context!*), you can verify the fingerprint F-Droid shows you with the one in the "copy-pastable" URL below.

<center>
    <img src="{{ site.baseurl }}/img/fdroid-repo-qrcode.svg" alt="NewPipe F-Droid repository QR code" class="fdroid-repo-qr-code">
</center>

Alternatively, in F-Droid, open the *Settings*, and choose *Repositories*. Then press the *plus* button, and paste the link if needed.

Once you added the repository, update your package lists. If you had NewPipe installed from the official F-Droid repository before, you will have to uninstall this one before F-Droid will display the packages from our repository. Please make sure to [backup and restore the app data]({{ site.base_url }}/FAQ/tutorials/import-export-data/#export-subscriptions) to avoid losing your subscriptions, history and settings.


The URL you need to copy is below. It includes the key's fingerprint for your convenience.

```
https://archive.newpipe.net/fdroid/repo/?fingerprint=E2402C78F9B97C6C89E97DB914A2751FDA1D02FE2039CC0897A462BDB57E7501
```

*Note: we also provide an archive containing older builds of NewPipe; to use this, just substitute `repo` with `archive` in the URL, the key's fingerprint is the same.)*

We will soon provide a detailed guide including screenshots for our less tech-savvy users.


## History of the F-Droid repository

As you all know, F-Droid can be slow on updates. While this is not a problem for regular releases, it is annoying when e.g., YouTube or any other service in NewPipe breaks, as then the app stops working completely.

A workaround has always been to install the `.apk` files from the [GitHub release page](https://github.com/TeamNewPipe/NewPipe/releases), however, this has some significant drawbacks. As of yet, the builds on GitHub and the official F-Droid repository are signed with different keys, which means the user has to uninstall one app first and then install the other one when switching between both approaches. Also, the GitHub releases had to be updated manually. Even though there now is an update notification (which is done through our servers, to increase your privacy, instead of e.g., using the GitHub API), it's still cumbersome.

So far, we have not been able to fix the different signatures; there is a solution for this, but we have not been able to implement it yet. We could fix the other problem, though. By setting up an F-Droid repository on our servers, we could instruct users to use builds from this repository. This allows them to easily update the app on their devices. We push updates nearly the same minute we make releases on GitHub, allowing users to update as soon as possible.

The F-Droid repository has been in a semi-public beta for a significant amount of time, and in this time, we have automated and improved our processes. The user feedback has been positive so far, so we thought now is a good time to release the repository for public use.


## Disclaimer

Please note that there are no guarantees made from us with regards to the repository and the contained `.apk` files. We work on keeping everything working safely, though. If you spot any issues, please don't hesitate to [contact us]({{ site.url }}/press/contact/).
