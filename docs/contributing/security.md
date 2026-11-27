---
id: security
sidebar_label: Security Reports
title: Security Reports
sidebar_position: 10
---

Please report security issues through GitHub's private vulnerability reporting process for the appropriate repository. If you cannot use GitHub, you can also contact the team by email or private message on Discord. Do not disclose vulnerabilities in public Discord channels.

[Report a server vulnerability](https://github.com/advplyr/audiobookshelf/security).

[Report a mobile-app vulnerability](https://github.com/advplyr/audiobookshelf-app/security).

Response times may vary with report volume.

## Common False Positives

The following are not vulnerabilities on their own.

### No authentication on image retrieval

By design, retrieving author and cover images from the Audiobookshelf server does not require authentication. This [greatly improves server performance](https://github.com/advplyr/audiobookshelf/discussions/3570). Images are addressed by randomly generated UUIDs.

Audio files can be accessed without a separate authentication check while using an open session.

If media other than author or cover images is accessible without authentication outside an open session, please report it.

### Vue2 web client is EOL

The web client was built on Vue 2 and Nuxt 2, both of which have been EOL since 2023. The web client is currently being rewritten and [migrated to React](https://github.com/audiobookshelf/audiobookshelf-client-react). Do not report the EOL status or age of these frameworks and their associated packages by itself, this is already being worked on.

### Outdated libraries

There are a number of old libraries related to the EOL Vue 2 web client. Do not report these packages solely because they are out of date (see above).

### E-reader vulnerabilities

The EOL Vue 2 web client displays [MOBI](https://kdp.amazon.com/en_US/help/topic/GULSQMHU5MNH4EZM) and [AZW3](https://en.wikipedia.org/wiki/Kindle_File_Format) files in an iframe without sanitizing their contents. The React client uses a safer e-reader implementation (see above).
