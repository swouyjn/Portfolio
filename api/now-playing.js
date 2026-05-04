export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const token = await getAccessToken();
  if (!token) return res.status(500).json({ error: "failed to get token" });

  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 204 || response.status > 400 || !response.ok) {
    return res.status(200).json(await getRecentlyPlayed(token));
  }

  const data = await response.json();

  if (!data.item) return res.status(200).json(await getRecentlyPlayed(token));

  return res.status(200).json({
    isPlaying:  data.is_playing,
    title:      data.item.name,
    artist:     data.item.artists.map(a => a.name).join(", "),
    album:      data.item.album.name,
    albumArt:   data.item.album.images[0]?.url,
    songUrl:    data.item.external_urls.spotify,
  });
}

async function getRecentlyPlayed(token) {
  const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) return { isPlaying: false };
  const data = await response.json();
  const track = data.items?.[0]?.track;
  if (!track) return { isPlaying: false };
  return {
    isPlaying:  false,
    lastPlayed: true,
    title:      track.name,
    artist:     track.artists.map(a => a.name).join(", "),
    album:      track.album.name,
    albumArt:   track.album.images[0]?.url,
    songUrl:    track.external_urls.spotify,
  };
}

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type:    "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  return data.access_token ?? null;
}
