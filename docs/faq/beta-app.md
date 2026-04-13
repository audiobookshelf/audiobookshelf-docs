---
id: app-beta
sidebar_label: App Beta
title: App Beta
sidebar_position: 1.4
---

This page answers common questions about the mobile app beta. This is a separate page to help distinguish between normal app questions and beta-specific questions.

## Why are the apps in beta/When will the apps be out of beta?

The apps are still very much a work-in-progress.
The current main focus is on improving the server and standardizing/updating the API using the web client because the web client ships with the server (but apps have a different release/update cadence).

There is not an exact date as to when the apps will be out of beta.
A number of 3rd party apps are also available, some free and some paid, for both Android and iOS.
The apps will likely leave beta before all originally planned features are realized to allow more users to use the app, but there is no estimate on when this will happen.

Android has more features than iOS, but all features are planned for both Android and iOS.

There is an outdated checklist tracking the main remaining bugs for the iOS app located [here](https://github.com/advplyr/audiobookshelf-app/issues/541), but it also depends on the ongoing API and data model updates from the server.
_Please do not_ leave additional comments on this issue that are just requests to release the app, this has already been communicated in various GitHub and Discord discussions (see [General FAQ](/docs/faq/general#i-have-a-feature-request-how-should-i-bring-this-up)).

## Why are there limited iOS beta seats? Why is there no limit for Android?

This is a limitaion set by Apple.
TestFlight is limited to 10k beta testers and requires testers to also install the TestFlight app.
Google Play betas are not limited and do not require a separate app to be installed on the device.

## When will spots be cleared in TestFlight to make room for new users?

Users who do not update to the new verison of the TestFlight app are removed from the TestFlight beta.
We cannot remove people from the TestFlight beta until each beta build expires (90 days after release).

The following table includes approximate release and clear dates for each app version.
Note that the exact release and clear time may vary by a few days depending on how long it took the app to complete review on Apple's side and for spots to be released. If the table below is out of date, add 90 days to the releases on the [App release list](https://github.com/advplyr/audiobookshelf-app/releases).

| App Version  | Release Date | Clear Date   |
| ------------ | ------------ | ------------ |
| v0.10.0-beta | Jul 21, 2025 | Oct 19, 2025 |
| v0.10.1-beta | Sep  4, 2025 | Dec  3, 2025 |
| v0.11.0-beta | Nov 24, 2025 | Feb 22, 2026 |
| v0.12.0-beta | Feb 11, 2026 | May 12, 2026 |

## How long do TestFlight spots stay open after being cleared?

It usually takes a few days for the TestFlight to fill up again after spots are cleared.

## How do I get an invite to TestFlight?

If the TestFlight is not full (see 90 days after release table), you can attempt to join the TestFlight.
To do this, [follow the instructions found on the official TestFlight site](https://testflight.apple.com/join/wiic7QIW).
This link is the same one embedded in the "Download on the app store" image located on this website.
If you click on the link and see "This beta is full", you will need to wait until the next time spots are cleared.

## Will I lose access when the TestFlight build expires or a new build is published?

As long as you keep the ABS app up to date in TestFlight, you will not be removed from the TestFlight.
A new build will be published before the current version expires.

## The TestFlight build is about to expire, will there be a new one?

Yes, a new beta build is pushed to TestFlight before each the 90-day beta expires.

## What are my options while the TestFlight is full?

There are several options for Apple users in the meantime:

- Use the web client or save as a Progressive Web App (PWA). Note that this does not support offline use.
- Sideload the official app. You can use something like AltStore or [SideStore](https://sidestore.io/) to sideload the IPA of the [most recent app release](https://github.com/advplyr/audiobookshelf-app/releases). You will need to manually update sideloaded apps.
- Use a 3rd party app which integrates with ABS.
- Download the media files from the web client and use a dedicated audiobook or ebook app. These will not sync your progress with the ABS server.