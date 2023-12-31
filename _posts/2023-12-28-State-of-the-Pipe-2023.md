---
layout: post
title: State of the Pipe 2023
short: State of the Pipe 2023
date: 2023-12-31 10:00:00 +0200
categories: [pinned, announcement]
author: TobiGr
image: newpipe
excerpt_separator: <!-- more -->
---

As the year comes to a close, it's an opportune moment to reflect on the journey of NewPipe over the past year and to cast a glance toward the project's future.

<!-- more -->

## NewPipe in 2023

In 2023, NewPipe received only a few, but nevertheless meaningful updates, bringing practical enhancements to the user interface and other parts of the app. Users can now enjoy a new card view mode featuring full-width thumbnails, delivering a visual experience similar to that found in other media apps. Additionally, users can now choose image quality based on their preferences.

The introduction of grouped tabs for channels/creators provides access to more content like playlists, live streams, or shorts. This change simplifies content navigation heavily. The app's support for multiple audio tracks in one video enhances the streaming experience. It's possible to listen to translations or other audio tracks if provided.

These changes are just some hand-picked favourites of mine - many more changes were brought to NewPipe thanks to many different contributors: from bug reporters, people taking part in discussions, testers, developers, to translators.

Apart from that, a lot of effort went into creating and setting up the infrastructure of NewPipe e.V. - the not-for-profit foundation aiming to support the development of NewPipe and other libre media projects. Additionally, our homepage was [temporarily removed from Google search results]({% post_url 2023-07-07-newpipe-net-dmca-google-search %}) due to a DMCA take down request. We'd once again like to thank everyone for their support in this matter.

## Plans for 2024

As you might have read or heard already, the development team plans to rewrite large parts of NewPipe because the code has become chunky over the years. [We presented our plans to you earlier this year](https://github.com/TeamNewPipe/NewPipe/discussions/10118), and received an overwhelming amount of feedback. Thank you for weighing in with your ideas and experience, as well as offering assistance ❤️

Before we get to the rewrite, we are planning to merge a few remaining PRs, bringing [support for search filters](https://github.com/TeamNewPipe/NewPipe/pull/8837) and [hardening the import and export of NewPipe data](https://github.com/TeamNewPipe/NewPipe/pull/9887). We have already worked on adding [support for comment replies](https://github.com/TeamNewPipe/NewPipe/pull/10018) which should be shipped with a new version soon.

## A personal note

At the end of this recap I want to leave a personal note. Taking a look back at what was done not only this year, but in the last couple of years, one can surely say that NewPipe has come a long way. When [@schabi](https://github.com/theScrabi) [laid the projects into our hands 4 years ago]({% post_url 2019-05-19-state-of-the-pipe-2019 %}) deciding to spend more time on his studies and personal matters, I was happy to be trusted with continuing the app's further development.

Since then, multiple people joined or left the core development team enhancing and fixing both the app and the underlying extractor (e.g. [@Stypox](https://github.com/Stypox), [@AudricV](https://github.com/AudricV), [@litetex](https://github.com/litetex), [@XiangRongLin](https://github.com/XiangRongLin), [@Redirion](https://github.com/Redirion), [@mauriciocolli](https://github.com/mauriciocolli), [@B0pol](https://github.com/B0pol), [@karyogamy](https://github.com/karyogamy) or [@wb9688](https://github.com/wb9688)). This work was essential to make NewPipe what it is today: a well-known privacy and user friendly app to access multiple streaming services. [@TacoTheDank](https://github.com/TacoTheDank) and [@Isira-Seneviratne](https://github.com/Isira-Seneviratne) often took time to do the dirty work "under the hood", kept an eye on all the dependency updates and implemented required changes.

In addition, the project has been supported by enthusiastic people reviewing and organizing tickets as well as doing large parts of the community management, and writing humorous blog posts (I am looking at you [@mhmdanas](https://github.com/mhmdanas), [@opusforlife](https://github.com/opusforlife2), [@poolitzer](https://github.com/Poolitzer) and [@SameenAhnaf](https://github.com/SameenAhnaf)). [@schabi](https://github.com/theScrabi) did not vanish, of course, and was there for us behind the scenes when needed, and so was [@TheAssassin](https://github.com/TheAssassin) with taking care of the infrastructure and giving helpful advice on a variety of topics.

I also loved the support and solidarity from within the open source community - be it the patient and hard working people at [F-Droid](https://f-droid.org) who put time and effort into providing NewPipe to you (e.g. by figuring out why NewPipe did not built reproducibly and fixing builds), the people behind [Weblate](https://weblate.org) providing us with a great translation service and instant help when facing problems, bloggers, journalists and internet activists making people aware of NewPipe and similar projects and making our voice heard when facing disputes with bigger adversaries, developers of similar applications when facing data extraction difficulties, developers of librearies NewPipe is relying on, and other maintainers of Android open source projects.

I could easily extend the list, but I think my point is clear:
Developing open source software is not a one man show. Working with all these people has been a pleasure for me. I have learned a lot during my time as a NewPipe dev - not only in regards of coding, project or community management.

I really enjoyed the lively debates about potential new features or services to be supported and the direction of the app in general. Even if the decisions made in the end did not always completely satisfy everyone involved, I generally found the exchange with the community very positive most of the time and was able to learn from the many different views. Working on projects like NewPipe always means that a large number of different users with different ideas have to be taken into account and that those users also make their opinions and interests known.

The user base has also become much more diverse over the years - what started as a projected focusing on providing a privacy friendly access to YouTube had soon grown to be a popular application attracting more than just a privacy focused user base. One of the consequences of this is that some people no longer see us developers as people who invest their free time in a project that is open for everybody to use, but as service providers who need to deliver features and fixes as fast as possible - the tone has changed considerably over the years.

Minor issues like these diminish the enthusiasm and interest of developers. Please make sure to treat everybody respectfully on the internet (and in the real world, too, of course!), especially if people are spending their free time on projects they share with everybody.

Unfortunately, my studies are progressing and my free time is becoming increasingly scarce. For this reason, I have only been able to contribute a little to the development of the app over the past two years. As the start of my Master's thesis is around the corner and I am therefore likely to have even less time for NewPipe in the near future, it is time for me to say goodbye.

NewPipe is neither developed by one person, nor does one person alone make substantial decisions. I have been trying to step back from the project for some time, as I am currently not able to contribute to larger and more complex projects, both mentally and in terms of time available. I think that with aiming to start rewriting larger parts of the app in the coming year, it is reasonable to make space for new, enthusiastic, motivated people with the required free time.

[@Stypox](https://github.com/Stypox) and [@AudricV](https://github.com/AudricV) have taken the project lead for some time already and are happy to move forward with NewPipe. I wish you all the best - personally and in terms of NewPipe' future. It was a pleasure and an unforgettable experience to be part of the community around NewPipe. Thank you all for this amazing time!

I wish all of you a good start into 2024. May the new year bring the best to you!

Tobi
