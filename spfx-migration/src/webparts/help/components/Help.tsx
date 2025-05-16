import * as React from 'react';
import styles from './Help.module.scss';
import { IHelpProps } from './IHelpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Help extends React.Component<IHelpProps, {}> {
  public render(): React.ReactElement<IHelpProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.help} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Welcome, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part description: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <p className={styles.description}>Help web part is ready for development.</p>
        </div>
      </section>
    );
  }
}
