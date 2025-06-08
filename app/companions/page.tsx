import { getAllCompanions } from "@/lib/actions/companions.action";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  console.log("Companions:", companions);

  return <div>Companions</div>;
};

export default CompanionsLibrary;
