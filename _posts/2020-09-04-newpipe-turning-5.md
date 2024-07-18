---
layout: post
title: Happy fifth Birthday NewPipe!!!
short: Happy Birthday NewPipe!!!
date: 2020-09-04 05:00:00 +0100
categories: [pinned, announcement]
author: Schabi
image: birthday-cake
---

Dear NewPipers, NewPipe Users, Hello World!

It's a weird time right now. Many things have changed and don't work like they used to before. However, NewPipe and the NewPipe project just continue like nothing happens. NewPipe constantly gets bigger and better. People keep working on it and organize the project like COVID-19 doesn't exist. For example, just a week ago we had the very first developer video call and, just one week before that, NewPipe hit number one trending on Hackernews. Next to all of these things going on one might be tempting to forget: NewPipe is turning five years old today!

Yes, it's true! Our little project that started as a simple tool to solve a simple problem is already this old!
On September 4th, 2015 I uploaded v0.3 as a tag on GitHub. By this date NewPipe was really simple and small and could not do much, but already existed for about a month until I finally decided to push the release. Little did I know this would turn out to be such an amazing project with many amazing people who create such an awesome tool.
I thought for this reason I am telling you how all of this started.

<figure>
<img src="{{ site.baseurl }}/img/all_logos.svg" class="img-responsive">
<figcaption class="text-center">NewPipe's logo over the time</figcaption>
</figure>
<br>

I started NewPipe ... well five years ago. In summer 2015. Back then I had just finished school and had nothing to do until university started. As I was interested in alternative and open software already I joined a group of FSFE fellows that formed back then.  
They initially showed me F-Droid which I thought was unusable at first, however, after some time I wrapped my head around the idea of getting rid of Google and all the non-free software and just do whatever I find nice. So I replaced Google Mail with mailbox.org. For my calendar/contacts/data foo I set up an ownCloud instance on an ODROID c3. I also installed CyanogenMod OS without Google services on my phone I got back then and put F-Droid on it.  
Well, in the beginning not using Google on my phone was all kind of different. Finding the right apps for everything was hard, but eventually things worked out nice and I got used to my new setup.

However, there was one thing I missed: YouTube.

People told me to just use the YouTube mobile website, but have you ever tried it? It's horrible! It's ugly, slow and just weird. On the phones that existed back then this was really no fun, and so I soon looked for an alternative to it. I first tried to find some open source apps. There were none. Then I looked for apps that would just not require Google Play Services, and also I could not find anything. Luckily during my spare time I started to learn Android programming, and so I decided to write my own app. The idea was pretty simple: Take [youtube-dl](https://github.com/ytdl-org/youtube-dl) and port it to Android.

I didn't know how to port Python to Android. Therefore, I simply tried to figure out how youtube-dl does its magic and rewrote the core logic in Java. That code would extract the video stream URL from a simple YouTube URL, and that's it. I wrapped an app around this code. One could use the Android share function to enter a link into the app. It would then extract the stream URL and open the video in VLC player. Later I went on and wrote a simple scraper that would also search videos on the website and display the result. When you tap on the result the app would show you some details about the video, like the description and how much up/down votes it got. From here you could simply launch into VLC and watch the video.

That was it. With this simple and slick app I didn't have to use the YouTube mobile website anymore and my problem was solved. I was done. I wanted to publish my code on GitHub and the app on F-Droid to also let others have the opportunity to use it. So I named the app GnuTube and prepared everything for a release. I also added some features like the ability to download a video. Furthermore, I set myself a goal of about 10 features/functions I wanted to properly implement before the initial release 1.0, however, as I showed the app to my FSFE friends they said they wouldn't want to wait and I should release it as soon as possible. Somehow, I thought,  'Well, v0.3 would pretty much represent my progress.'  
They also told me "GnuTube" could be a problematic name and is a weird idea as the app wasn't and would never be part of the GNU project. Florian Snow, the founding father of that FSFE fellowship group then suggested me some names from which I picked one more or less at random. Guess what, that name was "NewPipe". He would later tell me that I couldn't have picked a worse name, but by then I already liked it. I found it good because it suggested something "New", and well it was not a "Tube" like in YouTube, but a "Pipe" which is funny and prevents name collision. So here we go. on September 4th, 2015 NewPipe came to light, and it was liked pretty much from the beginning on. The way I "measured" popularity was, and still is by today, the stars the project got on GitHub. The stars didn't skyrocket, not like I expected that, but they kept growing and growing ... and growing. They just didn't stop to get more. So I thought maybe I really dug up something here and should keep working on it. I did for the next four years.  

In the beginning I head to learn several things like handling Git right or what to do with contributions from others. I was a beginner to programming and community projects. This is why NewPipe grew together with me and my skills.  
I had great fun working with all the contributors and learning from them. It was new and exciting, and it still is up to this day. However last year I decided it was time to leave my position as leading developer or maintainer as my Bachelor thesis was just about to knock on the door. I also just wanted to try different things. I gave the "keys" of the project to TheAssassin and Tobias Groza. Tobi had already supported the project and was already more or less in charge of the development. So he became the new "Mr. NewPipe", and I think he does an awesome job being that.  

Having said this, I think it's time to say thanks to all of you! All of you developers and contributors that came and went over the years, and all the users that loved (and maybe hated) NewPipe :) I'm very happy about what you made out of NewPipe during the past five years! Let's keep it up for at least the next five years ;)
