"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./RequesterWaitList.module.scss";

interface RequesterWaitListItem {
  program: string;
  project: string;
  projectName: string;
  submitted: string;
  department: string;
  initiator: string;
  ocrAnalyst: string;
  pm: string;
  status: string;
  finalConcurranceDate: string;
  contractNo: string;
  dollarAmount: string;
  fundingSource: string;
  targetCompletionDate: string;
  contractStatus: string;
  description: string;
}

export default function RequesterWaitList() {
  const [data, setData] = useState<RequesterWaitListItem[]>([]);

  useEffect(() => {
    // Simulate data loading
    const sampleData: RequesterWaitListItem[] = [
      {
        program: "Program A",
        project: "PRJ001",
        projectName: "Project Alpha",
        submitted: "2024-01-10",
        department: "Department X",
        initiator: "Initiator 1",
        ocrAnalyst: "Analyst A",
        pm: "PM A",
        status: "Approved",
        finalConcurranceDate: "2024-02-15",
        contractNo: "CN123",
        dollarAmount: "$100,000",
        fundingSource: "Source A",
        targetCompletionDate: "2024-12-31",
        contractStatus: "Active",
        description: "Description of project Alpha",
      },
      {
        program: "Program B",
        project: "PRJ002",
        projectName: "Project Beta",
        submitted: "2024-02-05",
        department: "Department Y",
        initiator: "Initiator 2",
        ocrAnalyst: "Analyst B",
        pm: "PM B",
        status: "Under Review",
        finalConcurranceDate: "2024-03-20",
        contractNo: "CN456",
        dollarAmount: "$250,000",
        fundingSource: "Source B",
        targetCompletionDate: "2025-01-15",
        contractStatus: "Pending",
        description: "Description of project Beta",
      },
    ];
    setData(sampleData);
  }, []);

  const handleExport = () => {
    // Placeholder for export to Excel functionality
    alert("Export to Excel functionality is not implemented yet.");
  };

  return (
    <div className={styles.requesterWaitList}>
      <button className={styles.exportBtn} onClick={handleExport}>
        Export to Excel
      </button>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Project</th>
              <th>Project Name</th>
              <th>Submitted</th>
              <th>Department</th>
              <th>Initiator</th>
              <th>OCR Analyst</th>
              <th>PM</th>
              <th>Status</th>
              <th>Final Concurrance Date</th>
              <th>Contract No</th>
              <th>Dollar Amount</th>
              <th>Funding Source</th>
              <th>Target Completion Date</th>
              <th>Contract Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={16} style={{ textAlign: "center" }}>
                  No data available.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.program}</td>
                  <td>{item.project}</td>
                  <td>{item.projectName}</td>
                  <td>{item.submitted}</td>
                  <td>{item.department}</td>
                  <td>{item.initiator}</td>
                  <td>{item.ocrAnalyst}</td>
                  <td>{item.pm}</td>
                  <td>{item.status}</td>
                  <td>{item.finalConcurranceDate}</td>
                  <td>{item.contractNo}</td>
                  <td>{item.dollarAmount}</td>
                  <td>{item.fundingSource}</td>
                  <td>{item.targetCompletionDate}</td>
                  <td>{item.contractStatus}</td>
                  <td>{item.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
