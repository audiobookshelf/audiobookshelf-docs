import React, {useMemo, useState} from 'react';
import {Icon} from '@iconify/react';

import styles from './styles.module.css';
import {communityApps} from './communityAppsData';

const mediaTypes = [
  {label: 'Audiobooks', icon: 'mdi:book-open-page-variant'},
  {label: 'Podcasts', icon: 'mdi:podcast'},
  {label: 'Ebooks', icon: 'mdi:book-variant'},
];
const mediaTypeIcons = Object.fromEntries(
  mediaTypes.map(({label, icon}) => [label, icon]),
);

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
          {sortedTags.length ? (
            <span
              className={styles.titleTagRow}
              aria-label={`${app.name} media types`}>
              {sortedTags.map((tag) => (
                <span key={tag} className={styles.titleTagIcon} title={tag}>
                  <Icon icon={mediaTypeIcons[tag]} aria-hidden="true" />
                </span>
              ))}
            </span>
          ) : null}
        </h2>

        <p className={styles.cardDescription}>{app.description}</p>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.platformRow} aria-label={`${app.name} platforms`}>
          {sortedPlatforms.map((platform) => (
            <span className={styles.platformBadge}>{platform}</span>
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

      <div className={styles.grid}>
        {visibleApps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}
