import React from 'react';

import {communityApps} from '../CommunityAppsPage/communityAppsData';

const officialApps = [
  {
    name: 'Audiobookshelf (official app)',
    href: 'https://github.com/advplyr/audiobookshelf-app',
    oidcRedirectUri: 'audiobookshelf://oauth',
  },
];

export default function OidcRedirectUris() {
  const apps = [
    ...officialApps,
    ...communityApps
      .filter((app) => app.auth?.oidc?.redirectUri)
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>App</th>
          <th>Redirect URI</th>
        </tr>
      </thead>
      <tbody>
        {apps.map((app) => (
          <tr key={app.name}>
            <td>
              <a href={app.href} target="_blank" rel="noreferrer">
                {app.name}
              </a>
            </td>
            <td>
              <code>{app.auth?.oidc?.redirectUri ?? app.oidcRedirectUri}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
