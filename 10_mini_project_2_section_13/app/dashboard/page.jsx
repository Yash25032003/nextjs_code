import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid grid-rows-2 gap-3">
        <Link href={`/dashboard/reports`}>View Reports</Link>
        <Link href={`/profile`}>Go to Profile</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
