import prisma from "@/app/libs/prismadb";

const getAssigned = async () => {
    try {
        const assignments = await prisma.assigned.findMany({
          include: {
            mentor: true,
            student: true,
          },
        });
    
        return assignments;
      } catch (error) {
        console.error("Error fetching assignments:", error);
        return [];
      }
   
};

export default getAssigned;
