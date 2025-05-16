"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./MasterList.module.scss";

interface ProjectItem {
  ProgramDes: string;
  ProjectID: string;
  ProjectName: string;
  DateSubmitted: string;
  SponsorDepartment: string;
  Requester_Assigned: string;
  OCRAnalyst_Assigned: string;
  SponsorProjectManager: string;
  Status: string;
}

const sampleData: ProjectItem[] = [
  {
    ProgramDes: "Program A",
    ProjectID: "P001",
    ProjectName: "Project Alpha",
    DateSubmitted: "2023-01-01",
    SponsorDepartment: "Dept 1",
    Requester_Assigned: "John Doe",
    OCRAnalyst_Assigned: "Analyst 1",
    SponsorProjectManager: "Manager 1",
    Status: "Active",
  },
  {
    ProgramDes: "Program B",
    ProjectID: "P002",
    ProjectName: "Project Beta",
    DateSubmitted: "2023-02-15",
    SponsorDepartment: "Dept 2",
    Requester_Assigned: "Jane Smith",
    OCRAnalyst_Assigned: "Analyst 2",
    SponsorProjectManager: "Manager 2",
    Status: "Completed",
  },
];

export default function MasterList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ProjectItem[]>(sampleData);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(sampleData);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      setFilteredData(
        sampleData.filter(
          (item) =>
            item.ProgramDes.toLowerCase().includes(lowerSearch) ||
            item.ProjectName.toLowerCase().includes(lowerSearch) ||
            item.ProjectID.toLowerCase().includes(lowerSearch) ||
            item.SponsorProjectManager.toLowerCase().includes(lowerSearch) ||
            item.Requester_Assigned.toLowerCase().includes(lowerSearch)
        )
      );
    }
  }, [searchTerm]);

  return (
    <div className={styles.masterList}>
      <div className={styles.container}>
        <div className={styles['searchcontainer']}>
          <input
            type="text"
            className={styles['searchinput']}
            placeholder="Search by Program, Project Name, Project ID, Project Manager or Initiator"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className={styles['table'] || ''}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Submitted</th>
              <th>Department</th>
              <th>Initiator</th>
              <th>OCR Analyst</th>
              <th>PM</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={9} style={{ textAlign: "center" }}>
                  No records found.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.ProgramDes}</td>
                  <td>{item.ProjectID}</td>
                  <td>{item.ProjectName}</td>
                  <td>{item.DateSubmitted}</td>
                  <td>{item.SponsorDepartment}</td>
                  <td>{item.Requester_Assigned}</td>
                  <td>{item.OCRAnalyst_Assigned}</td>
                  <td>{item.SponsorProjectManager}</td>
                  <td>{item.Status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
