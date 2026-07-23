---
id: security
sidebar_label: Security Reports
title: Security Reports
sidebar_position: 10
---

Security issues should be privately disclosed using GitHub's vulnerability reporter in the respective repository. You can also reach out directly through e-mail or Discord to disclose a vulnerability if you are unable to use GitHub.

Security vulnerabilities with the server should be reported [here](https://github.com/advplyr/audiobookshelf/security).

Security vulnerabilities with the apps should be reported [here](https://github.com/advplyr/audiobookshelf-app/security).

It may take some time to review and respond to vulnerabilities due to an increasing number of reports with the increased usage of AI tools.

## Common Vulnerability Reports

The following should not be reported as a vulnerability.

### No authentication on image retrieval

By design, there is no authentication to retrieve images from the Audiobookshelf server. This allows for image assets to be cached by clients and [greatly improves server performance](https://github.com/advplyr/audiobookshelf/discussions/3570). Author and Cover images must be retrieved by UUID, which is randomly generated and not based on the name of the item. 

If other media files are accessible without authentication, that should still be reported.

### Vue2 web client is EOL

The web client was built on Vue 2 and Nuxt 2, both of which have been EOL since 2023. The web client is currently being rewritten and [migrated to React](https://github.com/audiobookshelf/audiobookshelf-client-react). There is no need to report the framework and associated packages are old.
