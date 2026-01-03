import Link from "next/link";

export default function DashboardMainLayout({ feed, stats, tab1, tab2 }) {
  return (
    <div className="grid grid-rows-4 gap-8">
      <div style={{ flex: 1 }}>{feed}</div>
      <div style={{ flex: 1 }}>{stats}</div>

      <div>
        <Link href={`/dashboardMain/tab1`}>Tab-1</Link>
        <Link href={`/dashboardMain/tab2`}>Tab-2</Link>
      </div>

      <div>{tab1}</div>
      <div>{tab2}</div>
    </div>
  );
}
