---
layout: post
title: "Schabi contracted to work on NewPipe in the summer"
short: "Schabi will do paid work on NewPipe"
date: 2024-06-23 18:00:00 + 01:00
categories: [pinned, announcement]
author: <a href="https://github.com/Stypox">@Stypox</a>
image: newpipe
excerpt_separator: <!-- more -->
---

TLDR: the NewPipe e.V. will pay Schabi to work on NewPipe during the summer of 2024. He is tasked with rewriting the player, as part of [the refactoring process](https://github.com/TeamNewPipe/NewPipe/discussions/10118) announced a year ago.

<!-- more -->

For those of you who do not know, Schabi ([@theScrabi](https://github.com/theScrabi) on GitHub) is the creator and first maintainer of NewPipe. After laying the project's foundations and reviewing contributions for a few years, he found himself out of time due to his studies, and decided to hand over the maintainership to [@TobiGr](https://github.com/TobiGr) [in 2019](/blog/pinned/state-of-the-pipe-2019/). He remained in contact with the NewPipe team, though, and was happy to contribute to the founding of the NewPipe e.V. in November 2022, even becoming a member of the association board.

As you might know, we founded the e.V. primarily to be able to transparently handle the stream of donations coming from NewPipe (thanks a lot!). Moreover, the association also has the legal means to pay someone to work on the NewPipe project. Well, actually, the association's purpose is more general, and includes promoting and helping out any project related to free and open media streaming clients and platforms, not just NewPipe, but this is a story for another time.

Ever since the e.V. was founded, we have been looking for ways to spend the money from donations in a way that would be beneficial for the NewPipe application, for free streaming projects, or for the community. For example, [we donate 600€/year to Weblate](https://newpipe-ev.de/posts/2024-04-22_weblate_donation.html), the free software service that hosts NewPipe translations.

However, we have not been able to find anyone who would do paid work on the app, since all of the current members of the team are too busy in their offline lives. This is also why the app has received very few updates in recent memory, and is one of the reasons why we want to pay someone in the first place: to have some consistent contributions.

Despite that, we did not go down the road of hiring someone not in the team, because we don't receive enough money through donations to pay a full-time salary, and because an external person would need some time to become familiar with the codebase.

In the end, though, we did find someone who would work on NewPipe: Schabi himself! He proposed this idea to the e.V., and immediately resigned from the association board to avoid conflict of interest.

After consultation between the members of the e.V., we decided to accept his proposal and negotiated a contract with him during [the board meeting of 23/06/2024](https://newpipe-ev.de/posts/2024-06-23_3rd_board_meeting.html). He will work on NewPipe part-time during the summer of 2024, from the beginning of July to the end of September.

Schabi's main job will be to rewrite the player code, one of the most important yet most broken parts of the NewPipe app. The NewPipe team will provide him with specific tasks in a timely manner, which might include reviewing, bugfixing, documenting or releasing, but will mostly revolve around the player, due to the short nature of the contract. All of the code Schabi writes will obviously be published under the GPLv3 free software license, like the rest of the app.

Rewriting the player is an important part of [the refactoring process](https://github.com/TeamNewPipe/NewPipe/discussions/10118) we announced a year ago. After hearing the feedback from many experts in that discussion, we decided not to rewrite the whole app from scratch, since it would just take too much time, and risk the app being abandoned entirely. Rather, it will be done incrementally.

However, the situation with the player is different than the rest of the app: there have already been [too](https://github.com/TeamNewPipe/NewPipe/pull/8170) [many](https://github.com/TeamNewPipe/NewPipe/pull/10578) [failed](https://github.com/TeamNewPipe/NewPipe/pull/8678) [or](https://github.com/TeamNewPipe/NewPipe/pull/2907) [incomplete](https://github.com/TeamNewPipe/NewPipe/pull/7349) [attempts](https://github.com/TeamNewPipe/NewPipe/issues/8616) at refactoring it one piece at a time, so rewriting it from scratch is probably the best idea. Moreover, the ExoPlayer standalone library was deprecated in favour of its integration in the Jetpack Media3 library, which has partially different APIs, so we would need to rethink large parts of the code anyway.

Side note, if you are reading this blog post and would like to contribute to the refactoring process, take a look at the tracking issues [one (Jetpack Compose)](https://github.com/TeamNewPipe/NewPipe/issues/11198) and [two (Kotlin)](https://github.com/TeamNewPipe/NewPipe/issues/11199) that were recently opened. Also, please reach out to us via Matrix [#newpipe:matrix.newpipe-ev.de](https://matrix.to/#/#newpipe:matrix.newpipe-ev.de) or IRC ([#newpipe on Libera.Chat](https://web.libera.chat/#newpipe)).

Let's wish Schabi luck in performing a good job then! And a huge thank you to all of the people that make this possible by donating [on Liberapay](https://liberapay.com/TeamNewPipe/) or through other means!

