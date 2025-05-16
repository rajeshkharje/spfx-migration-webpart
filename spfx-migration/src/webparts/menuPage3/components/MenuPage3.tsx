"use client";

import * as React from "react";
import { useState } from "react";
import styles from "./MenuPage3.module.scss";

export default function MenuPage3() {
  const [programName, setProgramName] = useState<string>("");
  const [programID, setProgramID] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectID, setProjectID] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validate = (): boolean => {
    if (
      !programName.trim() ||
      !programID.trim() ||
      !projectName.trim() ||
      !projectID.trim()
    ) {
      setErrorMessage("* Invalid input. Please enter all required fields.");
      setSuccessMessage("");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    // Simulate save operation
    setSuccessMessage("Project added successfully!");
    setErrorMessage("");
    // Reset inputs or keep as is based on requirements
  };

  return (
    <div className={styles.menuPage3}>
      <form onSubmit={handleSubmit} id="formnewproject" noValidate>
        {errorMessage && (
          <div className={styles.errorMessage} role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className={styles.successMessage} role="status">
            {successMessage}
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="txtProgramName" className={styles.label}>
            Program Name
            <span className={styles.markRequired}>*</span>{" "}
            <span>(Type or choose N/A if your project does not belong to any program)</span>
          </label>
          <input
            type="text"
            id="txtProgramName"
            className={styles.input}
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            list="programNames"
            required
          />
          <datalist id="programNames">
            <option value="N/A" />
          </datalist>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="txtProgramID" className={styles.label}>
            Program ID
            <span className={styles.markRequired}>*</span>{" "}
            <span>(Type or choose N/A if there is no program ID)</span>
          </label>
          <input
            type="text"
            id="txtProgramID"
            className={styles.input}
            value={programID}
            onChange={(e) => setProgramID(e.target.value)}
            list="programIDs"
            required
          />
          <datalist id="programIDs">
            <option value="N/A" />
          </datalist>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="txtProjectName" className={styles.label}>
            Project Name
            <span className={styles.markRequired}>*</span>{" "}
            <span>(Type or choose N/A if this project does not have a specific name)</span>
          </label>
          <input
            type="text"
            id="txtProjectName"
            className={styles.input}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            list="projectNames"
            required
          />
          <datalist id="projectNames">
            <option value="N/A" />
          </datalist>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="txtProjectID" className={styles.label}>
            Project ID
            <span className={styles.markRequired}>*</span>{" "}
            <span>(Type or choose N/A if this project does not have a Project ID)</span>
          </label>
          <input
            type="text"
            id="txtProjectID"
            className={styles.input}
            value={projectID}
            onChange={(e) => setProjectID(e.target.value)}
            list="projectIDs"
            required
          />
          <datalist id="projectIDs">
            <option value="N/A" />
          </datalist>
        </div>

        <button type="submit" className={styles.button}>
          Save &amp; Reload Page
        </button>
      </form>
    </div>
  );
}
