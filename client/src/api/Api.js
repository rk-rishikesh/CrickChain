const API_KEY="btCZL1Y9NMWbPbW05Xlmit7NtNk1"

//Get all upcomming matches

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR: ", error));
}