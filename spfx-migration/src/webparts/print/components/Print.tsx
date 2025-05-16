"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Print.module.scss";

export default function Print() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // Simulated data states
  const [contractingPlanTitle, setContractingPlanTitle] = useState("CONTRACTING PLAN");
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [programName, setProgramName] = useState("");
  const [projectID, setProjectID] = useState("");
  const [projectName, setProjectName] = useState("");
  const [businessUnit, setBusinessUnit] = useState("");
  const [sponsorDepartment, setSponsorDepartment] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [groupManager, setGroupManager] = useState("");
  const [departmentChief, setDepartmentChief] = useState("");
  const [executiveOfficeSponsor, setExecutiveOfficeSponsor] = useState("");
  const [ocrAnalyst, setOcrAnalyst] = useState("");
  const [kickoffMeetingDate, setKickoffMeetingDate] = useState("");
  const [contractingPlanStatus, setContractingPlanStatus] = useState("Draft");
  const [dateSubmitted, setDateSubmitted] = useState("N/A");
  const [initiatedBy, setInitiatedBy] = useState("");
  const [projectJustification, setProjectJustification] = useState("");
  const [projectScopeOfWork, setProjectScopeOfWork] = useState("");
  // Additional states for unbundling evaluation, contracts, approval tasks etc. can be added similarly

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      // Populate with example data or fetch from API
      setServiceTypes(["Construction", "Design Build"]);
      setProgramName("Example Program");
      setProjectID("PRJ123");
      setProjectName("Example Project");
      setBusinessUnit("Business Unit A");
      setSponsorDepartment("Department X");
      setProjectManager("John Doe");
      setGroupManager("Jane Smith");
      setDepartmentChief("Chief Officer");
      setExecutiveOfficeSponsor("Executive Sponsor");
      setOcrAnalyst("OCR Analyst Name");
      setKickoffMeetingDate("2024-01-15");
      setContractingPlanStatus("Draft");
      setDateSubmitted("2024-01-10");
      setInitiatedBy("Initiator Name");
      setProjectJustification("This project addresses the need for...");
      setProjectScopeOfWork("Scope of work includes...");
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className={styles.print}>
        <div className={styles.loadingMessage}>
          Loading ....
          <div className={styles.loadingIcon} aria-label="Loading spinner" role="img">
            &#9696;
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.print}>
      {errorMessage && <div className={styles.alertError}>{errorMessage}</div>}
      {successMessage && <div className={styles.alertSuccess}>{successMessage}</div>}

      <div className={styles.title}>{contractingPlanTitle}</div>

      <div className={styles.tabContainer}>
        {/* Tabs and tab content can be implemented here */}
        <div className={styles.tabContent}>
          <div>
            <label className={styles.label}>Service Type(s):</label>
            <div className={styles.value}>{serviceTypes.join(", ")}</div>
          </div>
          <div>
            <label className={styles.label}>Program Name:</label>
            <div className={styles.value}>{programName}</div>
          </div>
          <div>
            <label className={styles.label}>Project ID:</label>
            <div className={styles.value}>{projectID}</div>
          </div>
          <div>
            <label className={styles.label}>Project Name:</label>
            <div className={styles.value}>{projectName}</div>
          </div>
          <div>
            <label className={styles.label}>Originating Business Unit:</label>
            <div className={styles.value}>{businessUnit}</div>
          </div>
          <div>
            <label className={styles.label}>Department/Sponsor:</label>
            <div className={styles.value}>{sponsorDepartment}</div>
          </div>
          <div>
            <label className={styles.label}>Project Manager:</label>
            <div className={styles.value}>{projectManager}</div>
          </div>
          <div>
            <label className={styles.label}>Project Group Manager:</label>
            <div className={styles.value}>{groupManager}</div>
          </div>
          <div>
            <label className={styles.label}>Department Chief /Director:</label>
            <div className={styles.value}>{departmentChief}</div>
          </div>
          <div>
            <label className={styles.label}>Executive Office Sponsor:</label>
            <div className={styles.value}>{executiveOfficeSponsor}</div>
          </div>
          <div>
            <label className={styles.label}>OCR Analyst:</label>
            <div className={styles.value}>{ocrAnalyst}</div>
          </div>
          <div>
            <label className={styles.label}>Kickoff Meeting Date:</label>
            <div className={styles.value}>{kickoffMeetingDate}</div>
          </div>
          <div>
            <label className={styles.label}>Contracting Plan Status:</label>
            <div className={styles.value}>{contractingPlanStatus}</div>
          </div>
          <div>
            <label className={styles.label}>Date Submitted:</label>
            <div className={styles.value}>{dateSubmitted}</div>
          </div>
          <div>
            <label className={styles.label}>Initiated By:</label>
            <div className={styles.value}>{initiatedBy}</div>
          </div>
          <div>
            <label className={styles.label}>Project Justification:</label>
            <div className={styles.value}>{projectJustification}</div>
          </div>
          <div>
            <label className={styles.label}>Project Scope Of Work:</label>
            <div className={styles.value}>{projectScopeOfWork}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
