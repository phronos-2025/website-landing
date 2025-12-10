import React, { useState } from 'react';
import styles from './styles.module.css';

export default function CitationWidget({ author, year, title, doi, version = '1.0' }) {
  const [format, setFormat] = useState('APA');
  const [copied, setCopied] = useState(false);

  const generateCitation = () => {
    const doiLink = doi ? `https://doi.org/${doi}` : `https://phronos.org/observatory`;
    
    switch (format) {
      case 'APA':
        return `${author} (${year}). ${title} (Version ${version}). P.H.R.O.N.O.S. Observatory. ${doiLink}`;
      
      case 'MLA':
        return `${author}. "${title}." P.H.R.O.N.O.S. Observatory, version ${version}, ${year}, ${doiLink}.`;
      
      case 'BibTeX':
        const bibtexKey = `${author.split(',')[0].toLowerCase()}${year}`;
        return `@article{${bibtexKey},
  author = {${author}},
  title = {${title}},
  year = {${year}},
  version = {${version}},
  organization = {P.H.R.O.N.O.S. Observatory},
  url = {${doiLink}}
}`;
      
      default:
        return '';
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCitation());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.citationWidget}>
      <div className={styles.header}>
        <span className={styles.title}>📎 CITE THIS WORK</span>
        {doi && (
          <a 
            href={`https://doi.org/${doi}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.doiLink}
          >
            DOI: {doi}
          </a>
        )}
      </div>
      
      <div className={styles.formatSelector}>
        {['APA', 'MLA', 'BibTeX'].map((fmt) => (
          <button
            key={fmt}
            className={`${styles.formatButton} ${format === fmt ? styles.active : ''}`}
            onClick={() => setFormat(fmt)}
          >
            {fmt}
          </button>
        ))}
      </div>
      
      <div className={styles.citationText}>
        <pre>{generateCitation()}</pre>
      </div>
      
      <button 
        className={styles.copyButton}
        onClick={copyToClipboard}
      >
        {copied ? '✓ Copied!' : '📋 Copy Citation'}
      </button>
    </div>
  );
}
