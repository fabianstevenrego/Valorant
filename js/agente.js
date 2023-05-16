const cardContainer = document.getElementById('card-container');
const urlAgents = "https://valorant-api.com/v1/agents";

function createCard(agent) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = agent.fullPortrait;
    img.alt = `Imagen de ${agent.displayName}`;
    card.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';

    const h3 = document.createElement('h3');
    h3.innerText = agent.displayName;
    overlay.appendChild(h3);

    const p = document.createElement('p');
    p.innerText = agent.description;
    overlay.appendChild(p);

    const ul = document.createElement('ul');

    agent.abilities.forEach(ability => {
        const li = document.createElement('li');
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = ability.displayIcon;
        img.alt = `Icono de ${ability.displayName}`;
        img.width = '50';
        div.appendChild(img);

        const h4 = document.createElement('h4');
        h4.innerText = ability.displayName;
        div.appendChild(h4);

        const desc = document.createElement('p');
        desc.innerText = ability.description;
        div.appendChild(desc);

        li.appendChild(div);

        ul.appendChild(li);
    });

    overlay.appendChild(ul);

    card.appendChild(overlay);

    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    cardWrapper.appendChild(card);

    cardContainer.appendChild(cardWrapper);
}

fetch(urlAgents)
    .then(response => response.json())
    .then(data => {
        const agents = data.data;
        agents.forEach(agent => {
            if (agent.uuid   !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
                createCard(agent);
            }
        });
    });