"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./CreateNew.module.scss";

interface Contract {
  id: string;
  fundingSource: string;
  targetCompletionDate: string;
  duration: string;
  contractNo: string;
  dollarAmount: string;
  description: string;
  status: string;
  ocrAnalysis: string;
}

const fundingSourceOptions = [
  "FTA",
  "RR",
  "Local/State",
  "DHS",
  "ACTC",
  "TBD",
];

const statusOptions = [
  "Not Started",
  "In Review",
  "Pre-Award",
  "Awarded",
  "Cancelled",
  "Closed",
  "No Bid Received",
  "Deferred",
];

const CreateNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState("step1");
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Load initial data here (mocked for now)
    setContracts([
      {
        id: "1",
        fundingSource: "",
        targetCompletionDate: "",
        duration: "",
        contractNo: "",
        dollarAmount: "",
        description: "",
        status: "Not Started",
        ocrAnalysis: "",
      },
    ]);
  }, []);

  const handleAddContract = () => {
    if (contracts.length >= 10) {
      setErrorMessage("Maximum 10 contracts allowed.");
      return;
    }
    setContracts([
      ...contracts,
      {
        id: (contracts.length + 1).toString(),
        fundingSource: "",
        targetCompletionDate: "",
        duration: "",
        contractNo: "",
        dollarAmount: "",
        description: "",
        status: "Not Started",
        ocrAnalysis: "",
      },
    ]);
    setErrorMessage("");
  };

  const handleRemoveContract = (id: string) => {
    setContracts(contracts.filter((c) => c.id !== id));
  };

  const handleContractChange = (
    id: string,
    field: keyof Contract,
    value: string
  ) => {
    setContracts(
      contracts.map((c) =>
        c.id === id
          ? {
              ...c,
              [field]: value,
            }
          : c
      )
    );
  };

  const renderContracts = () => {
    return contracts.map((contract, index) => (
      <div key={contract.id} className={styles.contractItem}>
        <div className={styles.contractHeader}>
          <span>CONTRACT {index + 1}</span>
          <button
            className={styles.contractDeleteButton}
            onClick={() => handleRemoveContract(contract.id)}
            title="Remove contract"
            aria-label={`Remove contract ${index + 1}`}
          >
            &times;
          </button>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Funding Source *</label>
          <select
            className={styles.select}
            value={contract.fundingSource}
            onChange={(e) =>
              handleContractChange(contract.id, "fundingSource", e.target.value)
            }
          >
            <option value="">----- Select One----</option>
            {fundingSourceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Target Completion Date</label>
          <input
            type="date"
            className={styles.input}
            value={contract.targetCompletionDate}
            onChange={(e) =>
              handleContractChange(contract.id, "targetCompletionDate", e.target.value)
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Duration</label>
          <input
            type="text"
            className={styles.input}
            value={contract.duration}
            onChange={(e) =>
              handleContractChange(contract.id, "duration", e.target.value)
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Contract No *</label>
          <input
            type="text"
            className={styles.input}
            value={contract.contractNo}
            onChange={(e) =>
              handleContractChange(contract.id, "contractNo", e.target.value)
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Dollar Amount *</label>
          <input
            type="text"
            className={styles.input}
            value={contract.dollarAmount}
            onChange={(e) =>
              handleContractChange(contract.id, "dollarAmount", e.target.value)
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description</label>
          <textarea
            className={styles.textarea}
            value={contract.description}
            onChange={(e) =>
              handleContractChange(contract.id, "description", e.target.value)
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Contract Status</label>
          <select
            className={styles.select}
            value={contract.status}
            onChange={(e) =>
              handleContractChange(contract.id, "status", e.target.value)
            }
          >
            {statusOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>OCR analysis for this contract (For OCR Only)</label>
          <textarea
            className={styles.textarea}
            value={contract.ocrAnalysis}
            readOnly
          />
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.createNew}>
      <div className={styles.container}>
        <div className={styles.tabNav}>
          <div
            className={`${styles.tabNavItem} ${
              activeTab === "step1" ? styles.tabNavItemActive : ""
            }`}
            onClick={() => setActiveTab("step1")}
            role="tab"
            tabIndex={0}
          >
            1. General Info
          </div>
          <div
            className={`${styles.tabNavItem} ${
              activeTab === "step2" ? styles.tabNavItemActive : ""
            }`}
            onClick={() => setActiveTab("step2")}
            role="tab"
            tabIndex={0}
          >
            2. Contracts
          </div>
          <div
            className={`${styles.tabNavItem} ${
              activeTab === "step3" ? styles.tabNavItemActive : ""
            }`}
            onClick={() => setActiveTab("step3")}
            role="tab"
            tabIndex={0}
          >
            3. Approvers
          </div>
          <div
            className={`${styles.tabNavItem} ${
              activeTab === "step5" ? styles.tabNavItemActive : ""
            }`}
            onClick={() => setActiveTab("step5")}
            role="tab"
            tabIndex={0}
          >
            5. Other
          </div>
        </div>
        <div className={styles.tabContent}>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
          {activeTab === "step1" && (
            <div>
              {/* TODO: Implement General Info form fields */}
              <p>General Info form fields go here.</p>
            </div>
          )}
          {activeTab === "step2" && (
            <div>
              {renderContracts()}
              <div className={styles.buttonGroup}>
                <button className={styles.button} onClick={handleAddContract}>
                  + Add New Contract
                </button>
              </div>
            </div>
          )}
          {activeTab === "step3" && (
            <div>
              {/* TODO: Implement Approvers form fields */}
              <p>Approvers form fields go here.</p>
            </div>
          )}
          {activeTab === "step5" && (
            <div>
              {/* TODO: Implement Other form fields */}
              <p>Other form fields go here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
