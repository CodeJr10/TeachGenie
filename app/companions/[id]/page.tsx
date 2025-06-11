import { currentUser } from "@clerk/nextjs/server";
import { getCompanion } from "@/lib/actions/companions.action";
import { redirect } from "next/navigation";

interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}
const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  if (!user) redirect("/sign-in");
  if (!companion) redirect("/companions");

  return <div>CompanionSession</div>;
};

export default CompanionSession;
