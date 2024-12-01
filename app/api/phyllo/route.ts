import axios from 'axios';

export async function POST() {
  const phylloBaseUrl = process.env.NEXT_PHYLLO_BASE_URL;
  const clientId = process.env.NEXT_PUBLIC_PHYLLO_CLIENT_ID;
  const clientSecret = process.env.NEXT_PHYLLO_CLIENT_SECRET;

  try {
    const { data } = await axios.post(
      `${phylloBaseUrl}/v1/auth/token`,
      {
        client_id: clientId,
        client_secret: clientSecret,
      }
    );

    return new Response(JSON.stringify({ token: data.access_token }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching token:', error);
    return new Response(
      JSON.stringify({ message: 'Error fetching token' }),
      { status: 500 }
    );
  }
}
