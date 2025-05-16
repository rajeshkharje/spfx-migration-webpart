"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Proxies.module.scss";

interface Proxy {
  id: number;
  primaryUser: string;
  proxyUser: string;
  startDate: string;
  endDate: string;
  status: string;
}

export default function Proxies() {
  const [proxies, setProxies] = useState<Proxy[]>([]);
  const [primaryUserFilter, setPrimaryUserFilter] = useState<string>("");
  const [proxyUserFilter, setProxyUserFilter] = useState<string>("");
  const [newProxyUser, setNewProxyUser] = useState<string>("");
  const [newStartDate, setNewStartDate] = useState<string>("");
  const [newEndDate, setNewEndDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    // Simulate loading proxies data
    const initialProxies: Proxy[] = [
      { id: 1, primaryUser: "User A", proxyUser: "Proxy 1", startDate: "2024-01-01", endDate: "2024-12-31", status: "Active" },
      { id: 2, primaryUser: "User B", proxyUser: "Proxy 2", startDate: "2024-02-01", endDate: "2024-11-30", status: "Active" },
    ];
    setProxies(initialProxies);
  }, []);

  const filteredProxies = proxies.filter(p => {
    return (
      (primaryUserFilter === "" || p.primaryUser.toLowerCase().includes(primaryUserFilter.toLowerCase())) &&
      (proxyUserFilter === "" || p.proxyUser.toLowerCase().includes(proxyUserFilter.toLowerCase()))
    );
  });

  const handleAddProxy = () => {
    if (!newProxyUser || !newStartDate || !newEndDate) {
      setMessage("Please fill all fields to add a proxy.");
      setMessageType("error");
      return;
    }
    const newId = proxies.length > 0 ? Math.max(...proxies.map(p => p.id)) + 1 : 1;
    const newProxy: Proxy = {
      id: newId,
      primaryUser: "Current User",
      proxyUser: newProxyUser,
      startDate: newStartDate,
      endDate: newEndDate,
      status: "Active",
    };
    setProxies([...proxies, newProxy]);
    setMessage("Delegation added successfully!");
    setMessageType("success");
    setNewProxyUser("");
    setNewStartDate("");
    setNewEndDate("");
  };

  const handleDeleteProxy = (id: number) => {
    setProxies(proxies.filter(p => p.id !== id));
    setMessage("Proxy deleted successfully!");
    setMessageType("success");
  };

  return (
    <div className={styles.proxies}>
      <div className={styles.header}>ADD YOUR PROXY</div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Proxy User"
          className={styles.inputField}
          value={newProxyUser}
          onChange={(e) => setNewProxyUser(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="date"
          className={styles.inputField}
          value={newStartDate}
          onChange={(e) => setNewStartDate(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="date"
          className={styles.inputField}
          value={newEndDate}
          onChange={(e) => setNewEndDate(e.target.value)}
        />
      </div>
      <button className={styles.buttonPrimary} onClick={handleAddProxy}>Add Proxy</button>
      {message && (
        <div className={messageType === "success" ? styles.messageSuccess : styles.messageError}>
          {message}
        </div>
      )}

      <div className={styles.header}>PROXIES LIST</div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Filter by Primary User"
          className={styles.inputField}
          value={primaryUserFilter}
          onChange={(e) => setPrimaryUserFilter(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Filter by Proxy User"
          className={styles.inputField}
          value={proxyUserFilter}
          onChange={(e) => setProxyUserFilter(e.target.value)}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Requestor</th>
            <th>Proxy</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredProxies.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>No proxies found.</td>
            </tr>
          ) : (
            filteredProxies.map(proxy => (
              <tr key={proxy.id}>
                <td>{proxy.primaryUser}</td>
                <td>{proxy.proxyUser}</td>
                <td>{proxy.startDate}</td>
                <td>{proxy.endDate}</td>
                <td>{proxy.status}</td>
                <td>
                  <button className={styles.deleteButton} onClick={() => handleDeleteProxy(proxy.id)} title="Delete Proxy">
                    &#128465;
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
