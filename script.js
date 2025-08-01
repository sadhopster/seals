const centersData = { 
    tokkari: [
        { 
            id: 'yo-chan', 
            name: 'Йо-чан', 
            species: 'Кольчатая нерпа', 
            age: '13-14 лет', 
            weight: '50-60 кг', 
            features: 'Любит гю и джампу-джампу', 
            description: 'Йо-чан - великолепно исполняет команды, в особенности "Гю" и "Джампу-джампу". Она немного ленивая, но когда дело доходит до рыпки, то ее сила равняется 100%.', 
            photo: 'yo-chan.png' 
        },
        { 
            id: 'tsuki-chan', 
            name: 'Цуки', 
            species: 'Кольчатая нерпа', 
            age: '4 месяца', 
            weight: '17.5 кг', 
            features: 'Любит делать бу-бу', 
            description: 'Цуки - настоящая маленькая дьяволица! Она часто издает звуки бу-бу и драконит всех тюленей.', 
            photo: 'tsuki-chan.png' 
        },
        { 
            id: 'katsunori-kun', 
            name: 'Кацунори (Кацу)', 
            species: 'Кольчатая нерпа', 
            age: '12-13 лет', 
            weight: 'Нет данных', 
            features: 'Переигрывает, сердечко на лбу', 
            description: 'Кацунори - недооцененная нерпа, на самом деле он очень круто исполняет команды, особенно в паре с Йо.', 
            photo: 'katsunori.png' 
        },
        { 
            id: 'mashiro-kun', 
            name: 'Маширо', 
            species: 'Кольчатая нерпа', 
            age: '1 год', 
            weight: 'Нет данных', 
            features: 'Боится контактировать с другими', 
            description: 'Маширо - очень умный, но пока очень боится контактировать с остальными тюленями.', 
            photo: 'mashiro.png' 
        },
        { 
            id: 'seal-6', 
            name: 'Парочка Йо и Кацунори', 
            species: 'Кольчатые нерпы', 
            age: '', 
            weight: '', 
            features: 'Немного абьюзивные отношения', 
            description: 'Йо и Кацу очень любят друг друга, но Йо, как настоящая нерпа, считает себя главной в этой паре, поэтому ей можно не напрягаться с выполнением команд в паре с Кацу.', 
            photo: 'couple.png' 
        }
    ], 
    kamogawa: [
        { 
            id: 'aru', 
            name: 'Ару', 
            species: 'Кольчатая нерпа', 
            age: '21 год', 
            weight: 'Нет данных', 
            features: 'Злюка, старушка', 
            description: 'Ару всем всегда недовольна. Разбудили? Ару злится. Покормили? Ару злится. Рядом другой тюлень проплыл? Ару злится. Ару - злюка.', 
            photo: 'aru.png' 
        }
    ],
    sasha: [
        { photo: 'sasha1.png', description: 'Рисунок Йо-чан на судоку' },
        { photo: 'sasha2.jpg', description: 'Рисунок Цуки и Йо' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const centerCards = document.querySelectorAll('.center-card');
    centerCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const center = e.currentTarget.dataset.center;
            showSeals(center);
        });
    });
});

// В функции showSeals в script.js
// Обновленная функция showSeals
function showSeals(center) {
    const centersCard = document.getElementById('centersCard');
    const sealsContainer = document.getElementById('sealsContainer');
    
    centersCard.style.display = 'none';
    sealsContainer.innerHTML = createSealsHTML(center);
    sealsContainer.style.display = 'block';
    
    document.querySelector('.back-btn')?.addEventListener('click', () => {
        sealsContainer.style.display = 'none';
        centersCard.style.display = 'block';
    });
    
    if (center === 'sasha') {
        initGallery(); // Инициализируем галерею для Саши
    } else {
        initCarousel();
    }
}
function createSealsHTML(center) {
    const seals = centersData[center];
    if (center === 'sasha') {
        return `
            <div class="sasha-gallery">
                <h2 class="title">Творения Саши</h2>
                <div class="gallery-row">
                    ${seals.map(seal => `
                        <div class="gallery-item" data-photo="${seal.photo}">
                            <img src="${seal.photo}" alt="${seal.description}">
                            <p>${seal.description}</p>
                        </div>
                    `).join('')}
                </div>
                <button class="back-btn">← Назад к центрам</button>
                
                <!-- Модальное окно для увеличенного фото -->
                <div class="photo-modal" style="display:none">
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <img class="modal-photo" src="" alt="">
                        <p class="modal-description"></p>
                    </div>
                </div>
            </div>
        `;
    }
    return `
        <div class="seals-carousel">
            <h2 class="title">Тюлени ${center === 'tokkari' ? 'Tokkari' : 'Kamogawa'} Center</h2>
            <div class="carousel-container">
                <div class="carousel-track">
                    ${seals.map((seal, index) => `
                        <div class="seal-card ${index === 0 ? 'active' : ''}" data-seal="${seal.id}">
                            <div class="card-image">
                                <div class="seal-avatar">
                                    <img src="${seal.photo}" alt="${seal.name}">
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="seal-name">${seal.name}</h2>
                                <p class="seal-species">${seal.species}</p>
                                <div class="seal-info">
                                    ${seal.age ? `<p><strong>Возраст:</strong> ${seal.age}</p>` : ''}
                                    ${seal.weight ? `<p><strong>Вес:</strong> ${seal.weight}</p>` : ''}
                                    ${seal.features ? `<p><strong>Особенности:</strong> ${seal.features}</p>` : ''}
                                </div>
                                <p class="seal-description">${seal.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="carousel-nav">
                <button class="nav-btn prev-btn">←</button>
                <div class="nav-dots">
                    ${seals.map((seal, index) => `
                        <button class="dot ${index === 0 ? 'active' : ''}" data-seal="${seal.id}"></button>
                    `).join('')}
                </div>
                <button class="nav-btn next-btn">→</button>
            </div>
            <button class="back-btn">← Назад к центрам</button>
        </div>
    `;
}

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.seal-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Устанавливаем начальную позицию
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    function updateCarousel(newIndex) {
        currentIndex = newIndex;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Обновляем активную точку
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
        updateCarousel(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
        updateCarousel(newIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // Добавляем поддержку свайпа
    let startX = 0;
    let isDragging = false;

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.clientX;
        const diff = startX - x;
        track.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px)`;
    });

    track.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const x = e.clientX;
        const diff = startX - x;
        
        if (diff > 50 && currentIndex < cards.length - 1) {
            // Свайп влево - следующая карточка
            updateCarousel(currentIndex + 1);
        } else if (diff < -50 && currentIndex > 0) {
            // Свайп вправо - предыдущая карточка
            updateCarousel(currentIndex - 1);
        } else {
            // Возвращаем на место
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    track.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    // Для мобильных устройств (тач-события)
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        const diff = startX - x;
        track.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px)`;
    });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const x = e.changedTouches[0].clientX;
        const diff = startX - x;
        
        if (diff > 50 && currentIndex < cards.length - 1) {
            updateCarousel(currentIndex + 1);
        } else if (diff < -50 && currentIndex > 0) {
            updateCarousel(currentIndex - 1);
        } else {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    // Поддержка клавиатуры
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
            updateCarousel(newIndex);
        } else if (e.key === 'ArrowRight') {
            const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
            updateCarousel(newIndex);
        }
    });
}

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.photo-modal');
    const modalImg = document.querySelector('.modal-photo');
    const modalDesc = document.querySelector('.modal-description');
    const closeBtn = document.querySelector('.close-modal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const description = item.querySelector('p').textContent;
            
            modalImg.src = imgSrc;
            modalDesc.textContent = description;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
