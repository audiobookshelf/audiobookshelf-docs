import React from 'react';
import {Icon} from '@iconify/react';

import styles from './styles.module.css';
import {
  communityApps,
} from './communityAppsData';

function PlatformBadge({label}) {
  const icon =
    label === 'iOS' || label === 'iPadOS'
      ? 'mdi:apple-ios'
      : label === 'Android'
        ? 'mdi:android'
        : label === 'Wear OS'
          ? 'mdi:watch-variant'
          : label === 'Windows'
            ? 'mdi:microsoft-windows'
            : label === 'Linux'
              ? 'mdi:linux'
              : label === 'Web'
                ? 'mdi:web'
                : label === 'HarmonyOS'
                  ? 'mdi:cellphone-link'
                  : 'mdi:tag';

  return (
    <span className={styles.platformBadge}>
      <Icon icon={icon} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function ExternalLink({href, label, icon}) {
  return (
    <a
      className={styles.actionLink}
      href={href}
      target="_blank"
      rel="noreferrer">
      <Icon icon={icon} aria-hidden="true" />
      <span>{label}</span>
    </a>
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
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.actions}>
          {app.links.map((link) => (
            <ExternalLink
              key={`${app.name}-${link.label}`}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CommunityAppsPage() {
  return (
    <section className={styles.page}>

      <div className={styles.grid}>
        {communityApps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}
