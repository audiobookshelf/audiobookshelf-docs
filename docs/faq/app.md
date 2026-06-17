---
id: app
sidebar_label: App
title: App
sidebar_position: 1.3
---

This section aims to answer common questions related to the app.

## Why can't I do X in the app?

Features are still being added and bugs are still being worked out.

The apps are designed to allow you to use the server, not manage the server.
Some management functionality may eventually be added, but if you want to manage the server from your phone you will need to use a web browser.
Note that the web browser is not optimized for small screens, so some buttons may not show up until you rotate your device to landscape view or select Desktop View in your mobile browser.

## Something stopped working after an app update

Sometimes things behave weirdly after the app or server updates.

First, try clearing the app's cache and data, or uninstalling and reinstalling the app.
Be aware this will require you to sign in to all servers and download media again.

If your issue persists, feel free to ask in Discord or look for an existing issue on GitHub.

## App Beta questions

We get a lot of beta-release questions. Please read the dedicated [App Beta FAQ](/docs/faq/app-beta) to see if your question has already been answered.

## Are there any 3rd-party apps?

We encourage the creation of [3rd-party apps](/docs/documentation/community/community-apps).
Users are advised to exercise caution and discretion when using third-party apps, as their quality and security may vary.
These apps are not affiliated with or supported by Audiobookshelf.
Any issues with the apps should be directed to the app maintainers through appropriate channels.

## I want to build a client app. What are the rules?

You are welcome to build a 3rd-party client for Auidobookshelf or add Audiobookshelf client integration to an existing app.
Third-party clients are not required to be open source or provided for free.

Please adhere to the following:

- Avoid using the Audiobookshelf name or logo in a manner that might suggest affiliation with the Audiobookshelf organization to users without permission from ABS maintainers.
- The name Audiobookshelf should be written in one of the following ways: all lowercase `audiobookshelf`, first letter capitalized `Audiobookshelf`, or abbreviated all capitalized `ABS`.
- Do not use the Audiobookshelf name or logo in any context that promotes or encourages piracy.

## Why do the e-reader settings not apply to my ebook?

ABS support for ebooks still needs work. Additionally, many epub files do not fully conform to spec, so some e-reader settings will not work (such as font size adjustments or font thickness) due to how the epub was created. To fix this, you can perform an epub to epub conversion, and this should fix most render issues. Some good options for this are Calibre or Sigil.
