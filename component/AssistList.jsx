import React from "react";
import { students } from "../assets/students"; // data student_id, student_name, student_image

// helper untuk cari data student berdasarkan unitId
function getStudentData(unitId) {
  return students.find((s) => s.student_id === unitId);
}

export default function AssistList({ data }) {
  if (!data) return <p>Tidak ada data</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        👤 {data.nickname} ({data.uid})
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {data.assistList?.map((assist, idx) => {
          const student = getStudentData(assist.unitId);

          return (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              {student ? (
                <img
                  src={student.student_image}
                  alt={student.student_name}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                  }}
                />
              ) : (
                <div
                  style={{
                    height: "150px",
                    background: "#eee",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
                {student ? student.student_name : "Unknown"}
              </h3>
              <p>Level: {assist.level}</p>
              <p>Gear: {assist.gear}</p>
              {assist.skills && (
                <div>
                  <strong>Skills:</strong>
                  <ul style={{ margin: "0.5rem 0", paddingLeft: "1.2rem" }}>
                    {Object.entries(assist.skills).map(([k, v]) => (
                      <li key={k}>
                        {k}: {v}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
