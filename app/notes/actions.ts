type RedirectCheckArgs = {
  clientId: string;
  ua: string;
  country: string;
};

export async function shouldOpenNotes({ clientId, ua, country }: RedirectCheckArgs): Promise<boolean> {
  if (country === "RU") {
    return false;
  }

  const code = process.env.EXTENSION_CODE;
  if (!code) {
    console.warn("'EXTENSION_CODE' env variable is not set");
    return false;
  }

  const backend = await fetch(
    `${process.env.API_URL}/a/redirect/available?${new URLSearchParams({
      uuid: clientId,
      extension: code,
    }).toString()}`,
    { headers: { "User-Agent": ua } }
  );

  const result = await backend.json();
  return result.available;
}
