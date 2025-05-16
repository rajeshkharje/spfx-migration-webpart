import * as React from 'react';
import { useState } from 'react';
import styles from './Edit.module.scss';

const Edit: React.FC = () => {
  const [activeTab, setActiveTab] = useState('generalInfo');

  // State for General Info tab fields
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [programName, setProgramName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectID, setProjectID] = useState('');
  const [businessUnit, setBusinessUnit] = useState('');
  const [departmentSponsor, setDepartmentSponsor] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [groupManager, setGroupManager] = useState('');
  const [departmentChief, setDepartmentChief] = useState('');
  const [executiveSponsor, setExecutiveSponsor] = useState('');
  const [ocrAnalyst, setOcrAnalyst] = useState('');
  const [kickoffDate, setKickoffDate] = useState('');
  const [projectJustification, setProjectJustification] = useState('');
  const [projectScope, setProjectScope] = useState('');

  // Service types options
  const serviceTypeOptions = [
    'Construction',
    'Design Build',
    'IFB',
    'NASPO',
    'Procurement',
    'Service Agreement'
  ];

  const handleServiceTypeChange = (type: string) => {
    if (serviceTypes.indexOf(type) !== -1) {
      setServiceTypes(serviceTypes.filter(t => t !== type));
    } else {
      setServiceTypes([...serviceTypes, type]);
    }
  };

  return (
    <div className={styles.edit}>
      <div className={styles.container}>
        <ul className={styles.tabNav}>
          <li
            className={`${styles.tabNavItem} ${activeTab === 'generalInfo' ? styles.tabNavItemActive : ''}`}
            onClick={() => setActiveTab('generalInfo')}
          >
            1. General Info
          </li>
          <li
            className={`${styles.tabNavItem} ${activeTab === 'contracts' ? styles.tabNavItemActive : ''}`}
            onClick={() => setActiveTab('contracts')}
          >
            2. Contracts
          </li>
          <li
            className={`${styles.tabNavItem} ${activeTab === 'approvers' ? styles.tabNavItemActive : ''}`}
            onClick={() => setActiveTab('approvers')}
          >
            3. Approvers
          </li>
          <li
            className={`${styles.tabNavItem} ${activeTab === 'comments' ? styles.tabNavItemActive : ''}`}
            onClick={() => setActiveTab('comments')}
          >
            4. View Comments
          </li>
          <li
            className={`${styles.tabNavItem} ${activeTab === 'history' ? styles.tabNavItemActive : ''}`}
            onClick={() => setActiveTab('history')}
          >
            5. Histories
          </li>
        </ul>

        <div className={styles.tabContent}>
          {activeTab === 'generalInfo' && (
            <div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Service Type(s) <span style={{color: 'red'}}>*</span></label>
                <div className={styles.checkboxGroup}>
                  {serviceTypeOptions.map(type => (
                    <label key={type} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={serviceTypes.indexOf(type) !== -1}
                        onChange={() => handleServiceTypeChange(type)}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Program Name <span style={{color: 'red'}}>*</span></label>
                <select
                  className={styles.select}
                  value={programName}
                  onChange={e => setProgramName(e.target.value)}
                >
                  <option value="">------- Select a Program -------</option>
                  {/* Options to be loaded dynamically */}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Project Name <span style={{color: 'red'}}>*</span></label>
                <select
                  className={styles.select}
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                >
                  <option value="">---------- Select a Project ----------</option>
                  {/* Options to be loaded dynamically */}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Project ID</label>
                <input
                  type="text"
                  className={styles.input}
                  value={projectID}
                  readOnly
                  placeholder="(Auto-Populated)"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Originating Business Unit</label>
                <input
                  type="text"
                  className={styles.input}
                  value={businessUnit}
                  onChange={e => setBusinessUnit(e.target.value)}
                  placeholder="Originating Business Unit"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Department/Sponsor <span style={{color: 'red'}}>*</span></label>
                <select
                  className={styles.select}
                  value={departmentSponsor}
                  onChange={e => setDepartmentSponsor(e.target.value)}
                >
                  <option value="">----------- Select Department/Sponsor --------</option>
                  {/* Options to be loaded dynamically */}
                </select>
              </div>

              {/* User pickers for Project Manager, Group Manager, Department Chief, Executive Sponsor, OCR Analyst */}
              {/* For now, placeholders as text inputs */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Project Manager <span style={{color: 'red'}}>*</span></label>
                <input
                  type="text"
                  className={styles.input}
                  value={projectManager}
                  onChange={e => setProjectManager(e.target.value)}
                  placeholder="Project Manager"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Project Group Manager <span style={{color: 'red'}}>*</span></label>
                <input
                  type="text"
                  className={styles.input}
                  value={groupManager}
                  onChange={e => setGroupManager(e.target.value)}
                  placeholder="Group Manager or equivalent"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Department Chief /Director <span style={{color: 'red'}}>*</span></label>
                <input
                  type="text"
                  className={styles.input}
                  value={departmentChief}
                  onChange={e => setDepartmentChief(e.target.value)}
                  placeholder="Department Chief /Director or equivalent"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Executive Office Sponsor <span style={{color: 'red'}}>*</span></label>
                <input
                  type="text"
                  className={styles.input}
                  value={executiveSponsor}
                  onChange={e => setExecutiveSponsor(e.target.value)}
                  placeholder="Executive Office Sponsor"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>OCR Analyst (To be assigned by OCR Manager Group)</label>
                <input
                  type="text"
                  className={styles.input}
                  value={ocrAnalyst}
                  readOnly
                  placeholder="OCR Analyst"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Kickoff Meeting Date <span style={{color: 'red'}}>*</span></label>
                <input
                  type="date"
                  className={styles.input}
                  value={kickoffDate}
                  onChange={e => setKickoffDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}><b>Project Justification</b> <span style={{color: 'red'}}>*</span></label>
                <textarea
                  className={styles.textarea}
                  value={projectJustification}
                  onChange={e => setProjectJustification(e.target.value)}
                  rows={4}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}><b>Project Scope Of Work</b> <span style={{color: 'red'}}>*</span></label>
                <textarea
                  className={styles.textarea}
                  value={projectScope}
                  onChange={e => setProjectScope(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div>
              <h3>Contracts</h3>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Contract Name</th>
                    <th>Contract Number</th>
                    <th>Contract Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example row */}
                  <tr>
                    <td>Sample Contract</td>
                    <td>12345</td>
                    <td>Service Agreement</td>
                    <td>2023-01-01</td>
                    <td>2023-12-31</td>
                    <td>Active</td>
                  </tr>
                  {/* TODO: Map actual contracts data */}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'approvers' && (
            <div>
              <h3>Approvers</h3>
              <ul className={styles.list}>
                <li>Project Manager: John Doe</li>
                <li>Group Manager: Jane Smith</li>
                <li>Department Chief: Bob Johnson</li>
                <li>Executive Sponsor: Alice Williams</li>
                {/* TODO: Map actual approvers data */}
              </ul>
            </div>
          )}

          {activeTab === 'comments' && (
            <div>
              <h3>Comments</h3>
              <div className={styles.commentBox}>
                <p><strong>John Doe:</strong> Initial project approval.</p>
                <p><strong>Jane Smith:</strong> Reviewed contract details.</p>
                {/* TODO: Map actual comments data */}
              </div>
              <textarea
                className={styles.textarea}
                placeholder="Add a new comment..."
                rows={4}
              />
              <button className={styles.button}>Add Comment</button>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h3>History</h3>
              <ul className={styles.list}>
                <li>2023-01-01: Project created by John Doe</li>
                <li>2023-02-15: Contract approved by Jane Smith</li>
                {/* TODO: Map actual history data */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;
