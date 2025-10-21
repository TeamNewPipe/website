---
layout: post
title: "Newpipe is turning 10 :O"
short: "10 year anniversary"
date: 2025-10-21 13:37:00 + 01:00
categories: [pinned, announcement]
author: <a href="https://github.com/theScrabi">@theScrabi</a> and <a href="https://github.com/Poolitzer">@Poolitzer</a>
image: birthday-cake
excerpt_separator: <!-- more -->
---

Guess what?
NewPipe just turned 10 ~~this month~~ last month! Time just flew by.
In one moment you hit “new project”, and in the next there is a whole association, a group of maintainers, an uncountable amount of contributors, and millions of users![^1]
This is amazing. Last time we wrote about an important birthday, NewPipe had just turned five years old. Now it's yet another five years later, and we still stand on the ground with both feet, running forward like there is no other direction!

NewPipe is 10 years old \o/, a double-digit digits number. Just... let that settle in for a moment.

<!-- more -->
## Looking back

5 years ago, Schabi wrote a blog post [for NewPipe's birthday](/blog/pinned/announcement/newpipe-turning-5/). We were right in the beginning of the second wave of the COVID-19 pandemic. Back then he wrote that "People keep working on it and organize the project like COVID-19 doesn’t exist". This is exactly what happened to us in the last five years, and we are so proud of ourselves. Since then many things happened. People from the Project founded [NewPipe e.V.](https://newpipe-ev.de/), a German association to support NewPipe and other projects like it. We started our [refactor/rewrite](https://github.com/TeamNewPipe/NewPipe/tree/refactor), with plans for new extractor design and a new player ([NewPlayer](https://github.com/TeamNewPipe/NewPlayer)).

The association on the other hand became a beast on its own. Its goal, to care for the donation money that came in from NewPipe, was far surpassed. In 2024 the association hired [@Profpatsch](https://github.com/Profpatsch) and [Schabi](https://github.com/theScrabi) to work part-time on several topics regarding the NewPipe refactor. For this, the association built out a structure and process for hiring, which turned out successful. What does that mean for you? Well, NewPipe and hopefully other projects gain stability through this, since with paid personnel we can ensure continuous development, even for parts of the project where volunteering maintainers wouldn't have much fun with.

## Looking... now?
Today we are still in the rewrite phase of our app. There are a lot of open issues, which you maybe would like to [take a look at](https://github.com/TeamNewPipe/NewPipe/blob/dev/.github/CONTRIBUTING.md#bug-fixing), we are always happy to have new contributors. So come by, grab a coffee, have a chat with us (even in person if you are at SFSCon, 39C3 or FOSDEM), check out the code, and let's go! :D

Profpatsch has been steadily working on rewriting the app alongside all the people doing it in their free time like Isira Seneviratne, Stypox and many more.

## Looking forward
There are two views on the future. The bright and the dark one.
Let's start with the bright view, because why not:
One day we will be done with the refactor, up to a point where NewPipe can rise out of the ashes once again, with a shiny new look and feel and new code, that should make new and exciting subsequent projects possible. I'm talking Kotlin everywhere, Compose everywhere, and of course nice features without feature creep ;D.
Eventually we also want to talk to video creators about the issue that NewPipe reduces their income, and start talking about a world beyond YouTube and Google.

Now to the topic no one wants to hear. The dark side:
It becomes progressively more complicated to stay afloat. This is not generally bad, because we grow with the tasks we have to accomplish. Take for example the ever-growing and aging code base. A refactor is overdue, but as you know, we are still on it! Or take the fact that we are all step by step growing out of university and now have to face the question of how to keep NewPipe running with mostly post grads. We want to tackle this matter with the association and of course new contributors. So far it's working. The engine keeps burning!
But - there has to be one - lets talk about the elephant in the room: Google
They would like to get rid of projects like ours. No question. In the past few years we had to witness that they try harder and harder to get rid of us. So far without success, neither on a legal base,[^2] or on a [technical base](https://github.com/TeamNewPipe/NewPipe/issues/11255). But it is clear that these challenges will only continue to get harder and more plentiful.
With the latest and biggest challenge being that Google itself wants to get rid of Android projects that maybe get too creative for its taste, [by making it harder to supply software through alternative stores](https://www.heise.de/en/news/Android-Google-bans-anonymous-apps-10617486.html) like [F-Droid](https://f-droid.org). This, to be honest, is a big challenge, and should not be taken lightly. However, I (Schabi) am certain: we will also tackle this one. We have come up with cool and creative solutions in the past to circumvent technical difficulties. To be honest I am even excited to see what people will come up with. But people have to come up with something. So please if you can: [Help!](https://f-droid.org/de/2025/09/29/google-developer-registration-decree.html#what-do-we-propose)
Anyway. As dark as this might sound. We have no intention on stopping. See it from the bright side. There are already solutions in the workings for the challenges we have to face, and we continuously ramp up speed on the refactoring. So I am pretty certain about where NewPipe is going: 

To infinity and beyond!

Sincerely your:

- Aayush Gupta
- absurdlylongusername
- AudricV
- Fynn
- litetex
- Poolitzer
- Profpatsch
- Schabi
- ShareASmile
- Siddhesh Naik
- Stypox
- Taco
- TheAssassin
- TobiGr
- wb9688
- and many more

Better known as Team NewPipe.

----

[^1]: You can check the number of downloads of F-Droid's official repository over at [fdroid-metrics.streamlit.app](https://fdroid-metrics.streamlit.app/), however this does not include downloads from our own F-Droid repository.
[^2]: [See the yt-dl DMCA](https://www.eff.org/deeplinks/2020/11/github-reinstates-youtube-dl-after-riaas-abuse-dmca) or the [DMCA against our website](https://newpipe.net/blog/pinned/announcement/newpipe-net-dmca-google-search/), which are both not directly an issue caused by Google though.
