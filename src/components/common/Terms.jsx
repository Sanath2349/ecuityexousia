import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>

      <section className="terms-section">
        <h2 className="section-title">ASSESSMENT POLICY</h2>
        <p className="section-text">
          All the employee’s have assessment in training for monitor the trainee
          skills. If the employee get below 85% score in the assessment The
          company will give one more chance to prove themselves. Why because
          when the company Handover the revenue generating project to the
          employees they need to submit the project in time with Min 85%
          accuracy.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">SANDWICHING OF WEEKLY OFF</h2>
        <p className="section-text">
          In case a fixed official off is getting sandwiched in between the
          authorized leaves or UL Absents, the official off will also be marked
          as Leave or UL Absents respectively. For example, if leave is proposed
          for Saturday and Monday, then Sunday (Weekly Off) will also be marked
          as Leave.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">UNAUTHORIZED/ UNAPPROVED LEAVE (UL)</h2>
        <p className="section-text">
          After joining Exousia Software Services, the employee is required to
          inform (well in advance) his/her immediate supervisor/Manager/TL's
          about the likely absence from work. In the absence of information to
          the mentioned officials, the availed leave shall be termed & marked as
          unauthorized leave (UL). For every single unauthorized leave (UL), 2
          days' salary would be deducted.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">EXIT POLICIES</h2>

        <h3 className="subsection-title">1. Termination</h3>
        <p className="section-text">
          The management, at its discretion, can terminate the services of an
          employee(s) without any notice in the event of the following:
        </p>

        <ul className="terms-list">
          <li className="list-item">
            Insubordination, Indiscipline, dishonesty, negligence of duty,
            integrity issues.
          </li>
          <li className="list-item">Misconduct</li>

          <ul className="nested-list">
            <li className="nested-list-item">Theft</li>
            <li className="nested-list-item">
              Leaking out confidential information
            </li>
            <li className="nested-list-item">
              Carrying company goods outside without prior approval
            </li>
            <li className="nested-list-item">Bad mouthing the organization</li>
            <li className="nested-list-item">
              Threatening colleagues/using senior using obnoxious language
            </li>
            <li className="nested-list-item">
              Found in possession of illegal arms/liquors/drugs, etc.
            </li>
            <li className="nested-list-item">Sleeping while on duty</li>
            <li className="nested-list-item">
              Habitual late attendance of regular absenteeism
            </li>
            <li className="nested-list-item">
              Absent for 3 consecutive days without information treated as
              absconder.
            </li>
            <li className="nested-list-item">Others</li>
          </ul>
        </ul>

        <p className="section-text">
          Note: "Others" refer to any other kind of misconduct other than
          mentioned above. In all the above-mentioned cases, employees are not
          eligible for any dues whatsoever with Exousia Software Services.
        </p>

        <h3 className="subsection-title">2. Resignation</h3>
        <p className="section-text">
          The employee desiring to resign from his/her services with Exousia
          Software Services needs to furnish 30 days prior notice.
        </p>
        <p className="section-text">
          In case of resignation, the employee needs to get approval from the
          concerned Departmental Head and should fill the Dues Clearance Form on
          his/her Last Working Day (LWD) without which his/her full and final
          settlement would not be processed. The Dues Clearance Form is
          available with HR\Department. The employee needs to submit the I-Card
          to the HR Department on the LWD else Rs.500/- as Security will be
          deducted from the Full and Final amount.
        </p>
      </section>
    </div>
  );
};

export default Terms;
