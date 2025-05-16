import * as React from 'react';
import styles from './MenuPage2.module.scss';
import { IMenuPage2Props } from './IMenuPage2Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class MenuPage2 extends React.Component<IMenuPage2Props, {}> {
  public render(): React.ReactElement<IMenuPage2Props> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.menuPage2} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Welcome to Menu Page 2, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part description: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <p className={styles.description}>Menu Page 2 web part is ready for development.</p>
        </div>
      </section>
    );
  }
}
