import React from 'react';
import './DataBackup.css';

const DataBackupSupport = () => {
  return (
    <section className="backup-support-wrapper">
      <div className="backup-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-data-backup-recovery.webp"
          alt="Saffron Guru data backup and recovery: family photos and documents restored from an external drive and cloud backup"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="backup-title">✅ Data Backup & Recovery</h3>
        <p className="backup-description">
          Secure backup and restoration of important files, documents, photos, and other data from computers, external drives, or cloud storage.
          <br /><br />
          Service includes creating scheduled backups, transferring data to new devices, and recovering files lost due to accidental deletion, hardware failure, or system crashes.
          <br /><br />
          Troubleshooting is provided for backup errors or inaccessible files, with every effort made to restore data safely while maintaining privacy and file integrity.
        </p>
      </div>
    </section>
  );
};

export default DataBackupSupport;
