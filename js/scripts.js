document.addEventListener("DOMContentLoaded", function() {
    const raidProgressContainer = document.getElementById('raid-progress-container');
    const apiKey = '9e280e66-71b9-4100-a45d-b26e0690c98b'; // Replace with your Warcraft Logs API key
    const guildName = 'Babes';
    const serverName = 'Babes Website'; // Replace with your server name
    const region = 'EU'; // Replace with your region (e.g., 'EU', 'US')
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    fetch(`${corsProxy}https://www.warcraftlogs.com:443/v1/guilds/${guildName}/${serverName}/${region}/progression?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data); // Debugging line
            let html = '<ul>';
            data.raidProgression.forEach(raid => {
                html += `<li>${raid.name}: ${raid.normalKills}/${raid.totalBosses} Normal, ${raid.heroicKills}/${raid.totalBosses} Heroic, ${raid.mythicKills}/${raid.totalBosses} Mythic</li>`;
            });
            html += '</ul>';
            raidProgressContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching raid progress:', error);
            raidProgressContainer.innerHTML = '<p>Failed to load raid progress.</p>';
        });
});