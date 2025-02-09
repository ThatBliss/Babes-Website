document.addEventListener("DOMContentLoaded", function() {
    const guildName = "Babes";
    const realm = "ravencrest";
    const region = "eu";

    fetch(`https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${guildName}&fields=raid_progression`)
        .then(response => response.json())
        .then(data => {
            const progressionData = data.raid_progression;
            const progressionContainer = document.getElementById("progression-data");

            for (const raid in progressionData) {
                const raidInfo = progressionData[raid];
                const raidElement = document.createElement("div");
                raidElement.classList.add("raid");

                raidElement.innerHTML = `
                    <h3>${raid}</h3>
                    <p>Normal: ${raidInfo.summary.normal_bosses_killed}/${raidInfo.total_bosses}</p>
                    <p>Heroic: ${raidInfo.summary.heroic_bosses_killed}/${raidInfo.total_bosses}</p>
                    <p>Mythic: ${raidInfo.summary.mythic_bosses_killed}/${raidInfo.total_bosses}</p>
                `;

                progressionContainer.appendChild(raidElement);
            }
        })
        .catch(error => console.error("Error fetching guild progression data:", error));
});