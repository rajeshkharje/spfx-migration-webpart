"use client";

import * as React from "react";
import styles from "./Common.module.scss";

export function ProjectHelperComponent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Project Helper</h2>
      <div className={styles.content}>
        {/* Placeholder for ProjectHelper functionality UI */}
        <p>This component will provide UI for ProjectHelper related features.</p>
      </div>
    </section>
  );
}

export function ProjectSettingsComponent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Project Settings</h2>
      <div className={styles.content}>
        {/* Placeholder for ProjectSettings functionality UI */}
        <p>This component will provide UI for ProjectSettings related features.</p>
      </div>
    </section>
  );
}

export function ProjectUtilitiesComponent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Project Utilities</h2>
      <div className={styles.content}>
        {/* Placeholder for ProjectUtilities functionality UI */}
        <p>This component will provide UI for ProjectUtilities related features.</p>
      </div>
    </section>
  );
}

export function SettingsComponent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Settings</h2>
      <div className={styles.content}>
        {/* Placeholder for Settings functionality UI */}
        <p>This component will provide UI for Settings related features.</p>
      </div>
    </section>
  );
}

export function SPHelperComponent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>SP Helper</h2>
      <div className={styles.content}>
        {/* Placeholder for SPHelper functionality UI */}
        <p>This component will provide UI for SPHelper related features.</p>
      </div>
    </section>
  );
}

export default function Common() {
  return (
    <div className={styles.common}>
      <div className={styles.container}>
        <h1 className={styles.header}>Common Webparts</h1>
        <ProjectHelperComponent />
        <ProjectSettingsComponent />
        <ProjectUtilitiesComponent />
        <SettingsComponent />
        <SPHelperComponent />
      </div>
    </div>
  );
}
