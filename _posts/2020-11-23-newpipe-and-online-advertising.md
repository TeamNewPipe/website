---
layout: post
title: "NewPipe's position on advertising"
short: "NewPipe's position on advertising"
date: 2020-11-23 19:30:00 +0100
categories: [pinned]
author: TheAssassin
image: newpipe
excerpt_separator: <!-- more -->
---

The NewPipe project recently had a few debates on advertising, its ethics and how Team NewPipe decides whether or not a certain form of advertising is acceptable.

In this article, we present our position on advertising in general, show the difference between ethical and unethical advertising, and explain why we do not intend to support technologies like SponsorBlock.


<!-- more -->

## Why we don't like (conventional) online advertising

Companies which engage in targeted advertising have developed an insane number of techniques to gather as much personal data as possible (or, rather, to guess about the personalities of natural persons in order to predict their actions and influence them), which is nowadays sold in [real-time auctions](https://en.wikipedia.org/wiki/Real-time_bidding#Privacy_and_security) to an indeterminably large number of companies. Users have little to no control over whether their data is sent to any of these companies, and usually have no control over their data once it has been sold. This is not a conspiracy theory; it's the world we live in, unfortunately.

The introduction of the EU General Data Protection Regulation (GDPR) has helped mitigate some of these effects. At least the major websites which operate within the EU offer ways to opt out. The EU data protection agencies have published standards and guidelines, stating that tracking, for the purpose of advertising or for any another reason, is only legally possible if users provide their informed consent. Informed consent means that you must actively opt in, i.e., you must click a button, switch a slider or something like that in order to legally give your consent.

Since the GDPR came into force in 2018, and following some court decisions in the meantime, more and more websites have been trying to comply with those laws, and now offer users a choice through banners. Most of them are not very good yet. More often than not, they employ what UI designers refer to as [dark patterns](https://en.wikipedia.org/wiki/Dark_pattern). For instance, they might have a large, highlighted "Accept all" button, whereas "Reject all" requires additional clicks. Also, even if the websites no longer actively insert tracking code, they often still embed data from advertising companies like Google, such as fonts, which still load data from foreign servers, and thus, allow tracking to take place. If you have ever embedded such files on a website yourself, did you read the privacy policies of these services?

<figure>
   <img src="{{ site.baseurl }}/img/guardian-consent-screenshot.jpg" alt="Jekyll logo" />
   <figcaption>Privacy dialog of The Guardian. It only opens after clicking a less highlighted button next to an "accept all" option. However, there's at least a "reject all" option, and they don't pre-select all options like many other websites do (which would be illegal in the EU anyway).</figcaption>
</figure>

Though less of a concern nowadays, another problem with online advertisements is that even if they don't track you, because of real-time bidding and a lack of proper technological and editorial oversight, malicious (phishing, malware distribution, misinformation), distracting (such as needless animations or videos) and bandwidth-wasting (where the advertising data is significantly larger than the actual content) advertisements are the norm, not the exception.

<!--- NEW SECTION --->
At present, it can still be very hard to exercise your basic digital rights, such as the [right of access by the data subject](https://gdpr-info.eu/art-15-gdpr/), the [right to rectification](https://gdpr-info.eu/art-16-gdpr/) or the [right to erasure (a.k.a. right to be forgotten)](https://gdpr-info.eu/art-17-gdpr/), against advertising companies. Given the sheer number of companies online services work with, and the fact that they just "may" have been given data (due to real-time bidding), it's a lot of work to contact all these data processors, explain who you are, and request information, correction or deletion of your data.

Online services which employ advertising should understand one central point: advertising, per se, is not the issue. Many people realize that advertising is a convenient way to fund a service. Often, it might be the only option to provide content to the public and avoid limiting a service to subscribers only, though alternatives should be preferred if available. In the field of journalism for example, [non-profit journalism](https://en.wikipedia.org/wiki/Non-profit_journalism) is still an exception almost everywhere despite its clear advantages. But does that mean advertisements must be distracting, privacy-invasive, targeted, or not even remotely related to the content?

The answer is "No". Online services have let tracking companies like Google, Facebook and thousands of other, smaller ones do whatever they want. They take advantage of the technical possibilities of having users visit websites, which provide them with a backchannel to collect data, instead of magazines, newspapers or TV, where they must distribute the content without such a backchannel. They sell their users.

But they didn't have to. If only the major news companies had said "we want advertising, but these are our rules", or created their own, privacy-respecting business instead of letting huge corporations take over their websites, companies like the ones mentioned before might never have grown this large, and would not have been handling more money than some small countries today.


## Advertising funds "free" services

We've mentioned it before: advertising is a core component in the funding of many web services. Either there are no alternatives, or those alternatives don't generate the same revenue and thus might not be viable for financial reasons.

As many online platforms, especially journalistic ones, realize now, online advertising doesn't cut it anymore. The giant tech companies from the U.S. dominate the market. Newspapers' own advertising departments have almost no chance to compete with them anymore. Hence, we see a growing dependency on the large oligopoly that online advertising has become.

It remains questionable whether services that employ advertising to finance themselves will be able to retain that model in the future. Instead, it seems like companies demand more and more data from the services' users, but don't increase the revenue for the service operators proportionately, and sometimes even decrease it.

For users, this is a nasty situation: their data is sold, sometimes even in real-time, to large, opaque advertising networks. They have to bear obtrusive, sometimes even malicious ads, which use up bandwidth and are often of little to no relevance to them. On the other hand, operators frivolously sell their users' data to advertising companies, but are not able to sustain their services this way.

There must be better approaches, right?


## Alternative funding methods

There are many alternative mechanisms to fund a service. Let's have a look at some of the most popular ones.


### (Recurring) donations

Donations, nowadays often managed by services like [Liberapay](https://en.wikipedia.org/wiki/Liberapay), [Open Collective](https://opencollective.com/) or [Patreon](https://en.wikipedia.org/wiki/Patreon), are probably the best way for users to help fund their favorite service, content producer, etc., as they usually forward a larger share of the money to the recipient, whereas advertising platforms keep most of the revenue for themselves. (Liberapay don't even demand a transaction fee; they just ask for donations themselves!)


### Affiliate and referral links

Affiliate links direct the user to a website that sells a product or a service. They contain a unique identifier that points to the content creator who generated them. Every time an item is bought, the creator gets a small share of the sales revenue.

Referral links are a similar concept. A creator can link to an entire service (for instance, an online shop, a hosting provider, etc.). If the user signs up using that link, the creator gets some benefits (e.g., a voucher, some credit).

Both systems have major downsides, though. Creators _should_ always disclose that links contain these affiliate or referral links, so that their audience knows that, if they follow these links, the shop knows where they were coming from. Many creators don't do this, putting users' privacy at risk. Only when it is mentioned properly do users have the ability to exercise discretion, and can choose not to click on the links.

Another problem is that affiliate links usually direct viewers to the major shopping platforms. Smaller shops usually don't implement affiliation systems.

In the end, the biggest beneficiaries of affiliate marketing are the shops themselves. They can build even better profiles for their recommendation algorithms: they know in which contexts products are recommended, or they group products by the affiliate partners. So, in the end, there's still a lot of tracking taking place.


### Shop wishlists

Some creators, especially ones who present handicraft, tinker with electronics, etc., provide links to shop wishlists in their videos' descriptions. These lead the viewers to a list of items on some shopping platform which they can then buy for the creators. While this doesn't provide cash, it can still fund a channel by funding tools, equipment or new products.

This method suffers from the same problems as the affiliate and referral links. Big platforms benefit the most, and users are subject to tracking.


### Sponsorship

An increasingly popular approach, being adopted by more and more video producers, is sponsorship. Creators make deals with companies who are interested in advertising inside the videos. They allocate a few seconds in every video where they mention the sponsored product or company or insert a short commercial.

This approach has a few advantages: The advertising company tends to operate in the same or a similar field as the video producer. This means that the advertisements are relevant to the viewers, at least to some extent. Also, such an ad is fair: every viewer sees the same ad; there's no fine-grained targeting. Furthermore, there is no tracking delivered along with the ad itself; at most there may be tracking on the video platform itself. Lastly, the video producers get to choose which companies they'll allow to advertise on their channels. This is something they usually can't do with regular ads, as those are either determined by the hosting platform, or by the advertising networks themselves.

From a privacy point of view, sponsoring in videos is a great approach. Economically, it is advantageous for the creators, as users with third-party clients also see this content. This way, privacy-conscious people who want to avoid tracking still contribute to the funding to some extent, such as when they share the video with their friends, who could be potential customers for that sponsor.

Of course, sponsorship has some downsides, too. As mentioned, it is usually relevant, but that may not always be the case. Also, the sponsored segment may be as obtrusive as conventional online advertisements. However, it is not in the video producer's interest to embed such content, as it'll likely offend their audience (sponsorship is directly related to the creator, whereas a creator usually has little influence on advertisements shown by the platform). Also, creators might have a hard time finding companies willing to sponsor them (larger creators are usually approached by companies themselves about sponsorship deals).

A major problem in sponsorship is what is referred to as "hidden advertising", which many (anti)social media "influencers" use. It is important that any form of advertising is recognized as such. Otherwise, it can be considered malicious. Therefore, it is highly problematic if, e.g., products aren't clearly denoted as having been provided for free by sponsors. If the video producer doesn't disclose this to their audience, it becomes difficult or even impossible for average users to understand that such reviews are biased.

Fortunately, this topic is subject to current legislation. In Germany, for instance, producers must disclose that they're advertising products through methods like displaying the text "Dauerwerbesendung" ("infomercial") in a text overlay. If they don't, regulators can impose severe fines. The only problem now is that many German producers think they must show this overlay for almost all their videos, just to be sure. Let's hope that future legislation will find a way to fix these issues.

In summary, it can be said that sponsoring is a good approach. It is fair and non-discriminating to all users, preserves their privacy, lets creators select their partners themselves, and provides them with a larger share of the revenue. Even though there are some disadvantages, it is more or less beneficial for all sides.


## Ethical advertising

The term "ethical ads" was probably introduced by [Read the Docs](https://docs.readthedocs.io/en/stable/advertising/ethical-advertising.html). They consider ads which respect users' privacy ethical, i.e., those that do not track you or share your information with third parties. They're often compared to ads in newspapers: the ads are based on the content of the page and shown to every visitor. They're static (i.e., no animations), small (certainly smaller than the actual page you want to visit), fair (every visitor sees the same or at least similar advertisements; they're not ["targeted"](https://en.wikipedia.org/wiki/Targeted_advertising#Disadvantages)) and relevant to the visitors (e.g., on a page about a Python project, a Python software firm ad might be shown). They also don't occupy a lot of screen space or require a lot of bandwidth.

Of course, Read the Docs need to find advertising partners for their own network. To be able to show some numbers to them, Read the Docs still employ analytics (unfortunately, it's even Google's dreaded system, as they refuse to self-host by claiming that it'd be too much effort, and alternative services would be more expensive). But aside from that, their system at least sets some ethical standards regarding online advertising. It would, however, still be great to see them drop Google Analytics entirely and use a more privacy-respecting solution.

Some ad blockers for browsers don't block Read the Docs (while still blocking Google's analytics for good reasons), and display those ads, considering them ethical.


## Ethics of video advertising

Video advertising is obviously different from classical advertising on websites. Here, the closest to Read the Docs's advertising approach is sponsorship. Most of the principles apply: fairness, absence of targeting/tracking, and relevance.

Other systems, like affiliate or referral links, are not only unethical (as they allow for tracking), they also require the user to buy something on the linked platform to allow the creator to get a small share of the profit. If a user really wants to help the creators, they should rather donate a few bucks directly instead of buying something that they might not even need.

Donations are, of course, the most ethical funding system. They allow the community to directly support their favorite producers. If the donations are recurring, they allow for long-term sustainability and help creators plan their future better. Unfortunately, most of these donations are handled by proprietary, closed and profit-oriented platforms like Patreon (although there are alternatives like Liberapay and Open Collective).

Upon comparing donations and sponsorship, one can easily spot the key difference: sponsorship doesn't "cost" users anything; they just watch the advertisement. But in the case of donations, users must invest real money, which only a small fraction of the audience ever does. An average creator would need enough people to be able to afford to donate a small amount of money every month to be able to create quality content. Only then can the rest of the world enjoy the videos as well. Alternatively, in the worst case, some or all videos might end up behind a paywall.

Video producers receiving sufficient donations might even be willing to give up entirely on advertising, and sponsorship in particular. This would also satisfy the people annoyed by sponsored sections.

One important fact needs to be stressed: if there's a privacy-friendly, non-discriminating, fair and, overall, ethical system of advertising (and hence funding) in place, bypassing such a system is clearly unethical and morally in the wrong.

Many people do not understand how much money it may cost to produce a video. They just enjoy the content "for free". And that's okay. But it is important to realize that the people on the screen have significant costs in terms of equipment, time, effort, etc. Thus, employing a system to bypass those ads is harmful to those creators.


## SponsorBlock

This year, a developer worked on [implementing support for SponsorBlock](https://github.com/TeamNewPipe/NewPipe/pull/3205) in NewPipe. SponsorBlock is a crowd-sourced database listing sponsored sections in videos, which are automatically skipped by clients such as web browsers, using extensions.

While SponsorBlock's implementation apparently takes care to preserve user privacy (you can, e.g., download the entire database for offline use, and its regular querying system is also well made), it targets an ethical advertising system. Its purpose is to help users, who probably don't realise that sponsorship is one of the most ethical ways to fund their favorite content, automatically skip sponsored sections of videos.

Morally, it's a very questionable system. Of course, *some* sponsoring may be of little relevance to the user, or maybe even intrusive or hidden. But SponsorBlock doesn't differentiate between ethical and unethical advertisements. It just skips all kinds of sponsored sections.


## NewPipe's view on advertising

Our main criticism regarding using YouTube and other services is the lack of privacy. Therefore, our tool doesn't embed such content and minimizes tracking as much as possible.

Ethical advertising, for example through sponsorship, should therefore not be touched by us. This would turn our key selling proposition from being privacy-friendly to being a gatekeeper for advertising. And this is not what NewPipe ever has been or wants to be. We've always stressed that NewPipe's main goal is to protect the users by maintaining their privacy, not to, e.g., provide features a user would otherwise have to pay for, for free.

Regarding SponsorBlock: after a lot of discussion within the team, we decided not to support this system. As stated earlier, we don't consider advertising in general problematic. It's the unethical, privacy-invasive systems that are very common today which we consider evil. Sponsorship provides a mostly ethical way of advertising.


## Summary

In this blog post, we outlined the differences between ethical and unethical advertising. We showed how advertising used to be and still is an important way to fund "free" services, videos etc., and how ethics make a huge difference. Finally, we explained why we don't want to support SponsorBlock in NewPipe.

As a user, you must find your personal trade-off between watching content "for free" and funding video producers so they can keep making the content you love. You should ask yourself if you would rather have content hidden behind paywalls, or instead have short sponsored sections in the videos.

Our closing remark is this: consider donating to your favorite content creators! If you really enjoy their content and you can afford a few bucks every now and then, you should probably give back to them. Once enough users start donating, perhaps they'll even decide to abandon sponsorship entirely.
