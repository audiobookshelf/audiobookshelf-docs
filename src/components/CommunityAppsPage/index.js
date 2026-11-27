import React, {useMemo, useState} from 'react';
import {Icon} from '@iconify/react';

import styles from './styles.module.css';
import {communityApps} from './communityAppsData';

const mediaTypes = [
  {label: 'Audiobooks', icon: 'simple-icons:audiobookshelf'},
  {label: 'Podcasts', icon: 'mdi:podcast'},
  {label: 'Ebooks', icon: 'tabler:book-filled'},
];
const mediaTypeIcons = Object.fromEntries(
  mediaTypes.map(({label, icon}) => [label, icon]),
);
const signInMethods = [
  {key: 'oidc', label: 'OIDC', icon: 'simple-icons:openid'},
  {key: 'apiKey', label: 'API Key', icon: 'mdi:key-variant'},
];

function AppCard({app}) {
  const sortedPlatforms = [...app.platforms].sort((a, b) => a.localeCompare(b));
  const sortedTags = app.tags ?? [];

  return (
    <a
      className={styles.card}
      href={app.href}
      target="_blank"
      rel="noreferrer">
      <div className={styles.cardTop}>
        <h2 className={styles.cardTitle}>
          <span>{app.name}</span>
          <span className={styles.titleTagRow} aria-label={`${app.name} media types`}>
            {sortedTags.map((tag) => (
              <span key={tag} className={styles.titleTagIcon} title={tag}>
                <Icon icon={mediaTypeIcons[tag]} aria-hidden="true" />
              </span>
            ))}
          </span>
          <span className={styles.authMethodRow} aria-label={`${app.name} sign-in methods`}>
            {signInMethods
              .filter(({key}) => app.auth?.[key])
              .map(({label, icon}) => (
                <span key={label} className={styles.titleTagIcon} title={`${label} sign-in`}>
                  <Icon icon={icon} aria-hidden="true" />
                </span>
              ))}
          </span>
        </h2>

        <p className={styles.cardDescription}>{app.description}</p>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.platformRow} aria-label={`${app.name} platforms`}>
          {sortedPlatforms.map((platform) => (
            <span className={styles.cardBadge}>{platform}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function CommunityAppsPage() {
  const platformOptions = useMemo(() => {
    const platforms = new Set();

    for (const app of communityApps) {
      for (const platform of app.platforms) {
        platforms.add(platform);
      }
    }

    return Array.from(platforms).sort((a, b) => a.localeCompare(b));
  }, []);

  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSignIn, setSelectedSignIn] = useState([]);

  const visibleApps = [...communityApps]
    .filter((app) =>
      selectedPlatforms.length === 0
        ? true
        : selectedPlatforms.every((platform) => app.platforms.includes(platform)),
    )
    .filter((app) =>
      selectedTags.length === 0
        ? true
        : selectedTags.every((tag) => app.tags?.includes(tag)),
    )
    .filter((app) =>
      selectedSignIn.length === 0
        ? true
        : signInMethods
            .filter(({label}) => selectedSignIn.includes(label))
            .every(({key}) => Boolean(app.auth?.[key])),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className={styles.page}>
      <div className={styles.toolbar}>
        <div className={styles.filterGroup}>
          <div className={styles.filterLabel}>Platform</div>
          <div className={styles.filters} aria-label="Filter by platform">
            <button
              type="button"
              className={
                selectedPlatforms.length === 0
                  ? styles.filterButtonActive
                  : styles.filterButton
              }
              onClick={() => setSelectedPlatforms([])}>
              All
            </button>
            {platformOptions.map((platform) => {
              const active = selectedPlatforms.includes(platform);
              return (
                <button
                  key={platform}
                  type="button"
                  className={active ? styles.filterButtonActive : styles.filterButton}
                  onClick={() =>
                    setSelectedPlatforms((current) =>
                      current.includes(platform)
                        ? current.filter((item) => item !== platform)
                        : [...current, platform],
                    )
                  }>
                  {platform}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <div className={styles.filterLabel}>Media Types</div>
          <div className={styles.filters} aria-label="Filter by media type">
            <button
              type="button"
              className={
                selectedTags.length === 0
                  ? styles.filterButtonActive
                  : styles.filterButton
              }
              onClick={() => setSelectedTags([])}>
              All
            </button>
            {mediaTypes.map((mediaType) => {
              const active = selectedTags.includes(mediaType.label);
              return (
                <button
                  key={mediaType.label}
                  type="button"
                  className={active ? styles.filterButtonActive : styles.filterButton}
                  onClick={() =>
                    setSelectedTags((current) =>
                      current.includes(mediaType.label)
                        ? current.filter((item) => item !== mediaType.label)
                        : [...current, mediaType.label],
                    )
                  }>
                  <Icon icon={mediaType.icon} aria-hidden="true" />
                  <span>{mediaType.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <div className={styles.filterLabel}>Authentication</div>
          <div className={styles.filters} aria-label="Filter by authentication method">
            <button
              type="button"
              className={
                selectedSignIn.length === 0
                  ? styles.filterButtonActive
                  : styles.filterButton
              }
              onClick={() => setSelectedSignIn([])}>
              All
            </button>
            {signInMethods.map(({label, icon}) => {
              const active = selectedSignIn.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  className={active ? styles.filterButtonActive : styles.filterButton}
                  onClick={() =>
                    setSelectedSignIn((current) =>
                      current.includes(label)
                        ? current.filter((item) => item !== label)
                        : [...current, label],
                    )
                  }>
                  <Icon icon={icon} aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {visibleApps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}
