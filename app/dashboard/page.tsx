import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard | Aisha AI',
  description: 'Manage your Aisha AI workspace',
}

export default function DashboardPage() {
  // Automatically redirect to the conversations dashboard
  redirect('/dashboard/conversations');
}
