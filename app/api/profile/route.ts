/**
 * API Route Handler for /api/profile
 *
 * This file handles requests to the /api/profile endpoint
 */

// Sample profile data - in a real application, this would come from a database
const profileData = {
  id: 1,
  name: "Utilisateur Test",
  age: 25,
  cognitiveProfile: {
    verbalComprehension: 110,
    perceptualReasoning: 115,
    workingMemory: 105,
    processingSpeed: 108,
    fullScaleIQ: 112,
  },
  strengths: [
    "Raisonnement logique",
    "Compréhension verbale",
    "Résolution de problèmes",
  ],
  areasForImprovement: [
    "Vitesse de traitement sous pression",
    "Mémoire de travail auditive",
  ],
  recommendations: [
    "Exercices de mémoire de travail quotidiens",
    "Pratique de la lecture active",
    "Jeux de logique et de stratégie",
  ],
  lastUpdated: "2023-11-15",
};

/**
 * GET handler for /api/profile
 */
export async function GET() {
  // In a real application, you would fetch this data from a database
  // and apply proper authentication/authorization

  // Simulate a slight delay as would happen with a real database query
  await new Promise((resolve) => setTimeout(resolve, 300));

  return new Response(JSON.stringify(profileData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * PUT handler for /api/profile
 */
export async function PUT(request: Request) {

  try {
    const updatedData = await request.json();

    // In a real application, you would validate and save this data to a database
    // For now, we'll just return the data that was sent

    return new Response(
      JSON.stringify({
        ...profileData,
        ...updatedData,
        lastUpdated: new Date().toISOString().split("T")[0],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request data" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
