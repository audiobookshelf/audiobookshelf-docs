import React, {useMemo, useState} from 'react';
import {Icon} from '@iconify/react';

import styles from './styles.module.css';
import {communityApps} from './communityAppsData';

const tagOptions = ['Audiobooks', 'Podcasts', 'Ebooks'];

const platformIcons = {
  Android: 'mdi:android',
  AAOS: 'mdi:car',
  iOS: 'mdi:apple-ios',
  iPadOS: 'mdi:apple-ios',
  HarmonyOS: 'mdi:cellphone-link',
  'Wear OS': 'mdi:watch-variant',
  Windows: 'mdi:microsoft-windows',
  Linux: 'mdi:linux',
  Web: 'mdi:web',
};

const platformOrder = Object.keys(platformIcons);
const tagIcons = {
  Audiobooks: 'mdi:book-open-page-variant',
  Podcasts: 'mdi:podcast',
  Ebooks: 'mdi:book-variant',
};

function sortPlatforms(platforms) {
  return [...platforms].sort((a, b) => {
    const indexA = platformOrder.indexOf(a);
    const indexB = platformOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });
}

function PlatformBadge({label}) {
  const icon = platformIcons[label] ?? 'mdi:tag';

  return (
    <span className={styles.platformBadge}>
      <Icon icon={icon} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function AppCard({app}) {
  const sortedPlatforms = sortPlatforms(app.platforms);
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
                  <Icon icon={tagIcons[tag] ?? 'mdi:tag'} aria-hidden="true" />
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
            <PlatformBadge key={platform} label={platform} />
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

    return sortPlatforms(Array.from(platforms));
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
          {tagOptions.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                className={active ? styles.filterButtonActive : styles.filterButton}
                onClick={() =>
                  setSelectedTags((current) =>
                    current.includes(tag)
                      ? current.filter((item) => item !== tag)
                      : [...current, tag],
                  )
                }>
                {tag}
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
