import React from 'react';
import styles from './styles.module.css';

export default function StatusBadge({ type = 'Living' }) {
  const getBadgeClass = () => {
    switch (type) {
      case 'Living':
        return styles.living;
      case 'Stable':
        return styles.stable;
      case 'Archived':
        return styles.archived;
      default:
        return styles.living;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'Living':
        return <span className={styles.pulse}>●</span>;
      case 'Stable':
        return '✓';
      case 'Archived':
        return '📦';
      default:
        return '●';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'Living':
        return 'This document is actively maintained and may be updated as new evidence emerges.';
      case 'Stable':
        return 'This document has been peer-reviewed and is considered methodologically sound.';
      case 'Archived':
        return 'This document represents a historical snapshot and is no longer being updated.';
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.statusBadge} ${getBadgeClass()}`}>
      <div className={styles.badgeHeader}>
        <span className={styles.icon}>{getIcon()}</span>
        <span className={styles.label}>{type.toUpperCase()}</span>
      </div>
      <p className={styles.description}>{getDescription()}</p>
    </div>
  );
}
