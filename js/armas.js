const cardContainer = document.querySelector('.card-container');

fetch('https://valorant-api.com/v1/weapons')
    .then(response => response.json())
    .then(data => {
        const weapons = data.data;

        weapons.forEach(weapon => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = weapon.displayIcon;
            img.alt = weapon.displayName;
            img.classList.add('card-img');

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const title = document.createElement('h2');
            title.innerText = weapon.displayName;
            title.classList.add('card-title');

            const details = document.createElement('div');
            details.classList.add('card-details');

            const type = document.createElement('p');
            type.innerHTML = `<span>Category:</span> <span class="card-value">${weapon.shopData.category}</span>`;
            details.appendChild(type);

            const fireRate = document.createElement('p');
            fireRate.innerHTML = `<span>Fire rate:</span> <span class="card-value">${weapon.weaponStats.fireRate}</span>`;
            details.appendChild(fireRate);

            const magCapacity = document.createElement('p');
            magCapacity.innerHTML = `<span>Magazine capacity:</span> <span class="card-value">${weapon.weaponStats.magazineSize} balas</span>`;
            details.appendChild(magCapacity);

            const wallPenetration = document.createElement('p');
            wallPenetration.innerHTML = `<span>zoom Óptico:</span> <span class="card-value">${weapon.weaponStats.adsStats.zoomMultiplier}m</span>`;
            details.appendChild(wallPenetration);

            const price = document.createElement('p');
            if (weapon.shopData) {
                price.innerHTML = `<span>Price:</span> <span class="card-value">${weapon.shopData.cost}</span>`;
            } else {
                price.innerHTML = `<span>Price:</span> <span class="card-value">N/A</span>`;
            }
            details.appendChild(price);

            cardContent.appendChild(title);
            cardContent.appendChild(details);

            card.appendChild(img);
            card.appendChild(cardContent);

            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.log(error));
