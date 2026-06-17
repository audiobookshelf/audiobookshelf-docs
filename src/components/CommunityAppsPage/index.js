import React, {useMemo, useState} from 'react';
import {Icon} from '@iconify/react';

import styles from './styles.module.css';
import {communityApps} from './communityAppsData';

const sortOptions = [
  {value: 'name-asc', label: 'Name A-Z'},
  {value: 'name-desc', label: 'Name Z-A'},
  {value: 'platforms-desc', label: 'Most platforms'},
  {value: 'platforms-asc', label: 'Fewest platforms'},
];

const tagOptions = ['Audiobooks', 'Podcasts', 'Ebooks'];

function PlatformBadge({label}) {
  // If you need a new icon, add it to this mapping
  const icons = {
    iOS: 'mdi:apple-ios',
    iPadOS: 'mdi:apple-ios',
    Android: 'mdi:android',
    'Wear OS': 'mdi:watch-variant',
    Windows: 'mdi:microsoft-windows',
    Linux: 'mdi:linux',
    Web: 'mdi:web',
    HarmonyOS: 'mdi:cellphone-link'
  }
  const icon = icons[label] ?? 'mdi:tag'

  return (
    <span className={styles.platformBadge}>
      <Icon icon={icon} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function AppCard({app}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.platformRow}>
          {app.platforms.map((platform) => (
            <PlatformBadge key={platform} label={platform} />
          ))}
        </div>

        <h2 className={styles.cardTitle}>
          <a href={app.href} target="_blank" rel="noreferrer">
            {app.name}
          </a>
        </h2>

        <p className={styles.cardDescription}>{app.description}</p>

        {app.tags?.length ? (
          <div className={styles.tagRow} aria-label={`${app.name} tags`}>
            {app.tags.map((tag) => (
              <span key={tag} className={styles.tagBadge}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
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

    return ['All', ...Array.from(platforms).sort((a, b) => a.localeCompare(b))];
  }, []);

  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('name-asc');

  const visibleApps = [...communityApps]
    .filter((app) =>
      selectedPlatform === 'All' ? true : app.platforms.includes(selectedPlatform),
    )
    .filter((app) =>
      selectedTags.length === 0
        ? true
        : selectedTags.some((tag) => app.tags?.includes(tag)),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'platforms-desc':
          return b.platforms.length - a.platforms.length || a.name.localeCompare(b.name);
        case 'platforms-asc':
          return a.platforms.length - b.platforms.length || a.name.localeCompare(b.name);
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <section className={styles.page}>
      <div className={styles.toolbar}>
        <div className={styles.filterGroup}>
          <div className={styles.filterLabel}>Platform</div>
          <div className={styles.filters} aria-label="Filter by platform">
            {platformOptions.map((platform) => (
              <button
                key={platform}
                type="button"
                className={
                  platform === selectedPlatform
                    ? styles.filterButtonActive
                    : styles.filterButton
                }
                onClick={() => setSelectedPlatform(platform)}>
                {platform}
              </button>
            ))}
          </div>
        </div>

        <label className={styles.sortControl}>
          <span className={styles.sortLabel}>Sort</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className={styles.sortSelect}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
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
