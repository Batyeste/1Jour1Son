// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQABXYUVc3rv6ALHhPo9sQ_TCjM3tDV6d3I-RlCq42ky51_nkJwzbbrO1iFzXxeoUiHa1fqWih7h19oSlHU_MtPmKUdDz3lVj6RtPm-v_CsfWnSxpFam1zTf7CRz3isSZOBiX8NsuXak5Hpifz_TyL21xTpcCSbSWIEQ3TEmZ2aINOmjNsc9HyqJXuTHs9FG5PILWc8yIIhcCrvy0OW5AtZ0SluvQlxrqF3zKsZyyXtyWcXXKYYDoAqAi8ukS4eshA6dxtsQZnCGTqa-7z4a5Ico';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);