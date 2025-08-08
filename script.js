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
            photo: 'yo-chan.png',
            photos: [
                'yo-chan1.jpg',
                'yo-chan2.jpg',
                'yo-chan3.jpg'
            ]
        },
        { 
            id: 'tsuki-chan', 
            name: 'Цуки', 
            species: 'Кольчатая нерпа', 
            age: '4 месяца', 
            weight: '17.5 кг', 
            features: 'Любит делать бу-бу', 
            description: 'Цуки - настоящая маленькая дьяволица! Она часто издает звуки бу-бу и драконит всех тюленей.', 
            photo: 'tsuki-chan.png',
            photos: [
                'tsuki1.jpg',
                'tsuki2.jpg',
                'tsuki3.jpg',
                'tsuki4.jpg'
            ]
        },
        { 
            id: 'katsunori-kun', 
            name: 'Кацунори (Кацу)', 
            species: 'Кольчатая нерпа', 
            age: '12-13 лет', 
            weight: 'Нет данных', 
            features: 'Переигрывает, сердечко на лбу', 
            description: 'Кацунори - недооцененная нерпа, на самом деле он очень круто исполняет команды, особенно в паре с Йо.', 
            photo: 'katsunori.png',
            photos: [
                'katsu1.jpg',
                'katsu2.jpg',
                'katsu3.jpg',
                'katsu4.jpg'
            ]
        },
        { 
            id: 'mashiro-kun', 
            name: 'Маширо', 
            species: 'Кольчатая нерпа', 
            age: '1 год', 
            weight: 'Нет данных', 
            features: 'Боится контактировать с другими', 
            description: 'Маширо - очень умный, но пока очень боится контактировать с остальными тюленями.', 
            photo: 'mashiro.png',
            photos: [
                'mahi1.jpg',
                'mahi2.jpg',
                'mahi3.jpg',
                'mahi4.jpg'
            ]
        },
        { 
            id: 'seal-6', 
            name: 'Парочка Йо и Кацунори', 
            species: 'Кольчатые нерпы', 
            age: '', 
            weight: '', 
            features: 'Немного абьюзивные отношения', 
            description: 'Йо и Кацу очень любят друг друга, но Йо, как настоящая нерпа, считает себя главной в этой паре, поэтому ей можно не напрягаться с выполнением команд в паре с Кацу.', 
            photo: 'couple.png',
            photos: [
                'couple1.jpg',
                'couple2.jpg',
                'couple3.jpg'
            ]
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
            photo: 'aru.png',
            photos: [
                'aru1.jpg',
                'aru2.jpg',
                'aru3.jpg'
            ]
        }
    ],
    sasha: [
        { photo: 'sasha1.png', description: 'Рисунок Йо-чан на судоку' },
        { photo: 'sasha2.jpg', description: 'Рисунок Цуки и Йо' },
        { photo: 'sasha3.jpg', description: 'Батон' }
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

function showSeals(center) {
    window.currentCenter = center;
    const centersCard = document.getElementById('centersCard');
    const sealsContainer = document.getElementById('sealsContainer');
    
    centersCard.style.display = 'none';
    sealsContainer.innerHTML = createSealsHTML(center);
    sealsContainer.style.display = 'block';
    
    if (center === 'sasha') {
        initGallery();
    } else {
        initCarousel();
    }
}

function createSealsHTML(center) {
    const seals = centersData[center];
    if (center === 'sasha') {
        return `
            <div class="seal-gallery">
                <h2 class="title">Творения Саши</h2>
                <div class="seal-photos-container">
                    ${seals.map(seal => `
                        <div class="seal-photo-item">
                            <img src="${seal.photo}" alt="${seal.description}">
                            <p>${seal.description}</p>
                        </div>
                    `).join('')}
                </div>
                <button class="back-btn back-to-centers">← Назад к центрам</button>
                
                <!-- Модальное окно -->
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
            <button class="back-btn back-to-centers">← Назад к центрам</button>
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

    // Восстанавливаем индекс тюленя, если он сохранён
    const sealsForCenter = centersData[window.currentCenter] || [];
    if (window.currentSealId) {
        const restoredIndex = sealsForCenter.findIndex(s => s.id === window.currentSealId);
        if (restoredIndex !== -1) {
            currentIndex = restoredIndex;
        }
    }

    initSealGalleries(); 
    // Устанавливаем начальную позицию и активную точку
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    function updateCarousel(newIndex) {
        currentIndex = newIndex;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Обновляем активную точку
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        // Сохраняем выбранного тюленя, чтобы возвращаться на ту же карточку
        window.currentSealId = cards[currentIndex]?.dataset.seal;
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
        track.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px))`;
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
        track.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px))`;
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

    document.querySelector('.back-btn')?.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие события
        // Возврат к центрам — сбрасываем выбранного тюленя
        window.currentSealId = undefined;
        document.getElementById('sealsContainer').style.display = 'none';
        document.getElementById('centersCard').style.display = 'block';
    });

    function updateCardSizes() {
        if (window.innerWidth <= 768) {
            cards.forEach(card => {
                card.style.minWidth = '100%';
            });
            track.style.width = '100%';
        }
    }
    updateCardSizes();
    window.addEventListener('resize', updateCardSizes);
    
    document.querySelector('.back-to-centers')?.addEventListener('click', () => {
        // Возврат к центрам — сбрасываем выбранного тюленя
        window.currentSealId = undefined;
        document.getElementById('sealsContainer').style.display = 'none';
        document.getElementById('centersCard').style.display = 'block';
    });
}

function initGallery() {
    const modal = document.querySelector('.photo-modal');
    const modalImg = modal.querySelector('.modal-photo');
    const modalDesc = modal.querySelector('.modal-description');
    const closeBtn = modal.querySelector('.close-modal');
    
    // Обработчики для фотографий
    document.querySelectorAll('.seal-photo-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const desc = item.querySelector('p').textContent;
            
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalDesc.textContent = desc;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
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

    // Обработчик кнопки "Назад"
    document.querySelector('.back-to-centers').addEventListener('click', () => {
        document.getElementById('sealsContainer').style.display = 'none';
        document.getElementById('centersCard').style.display = 'block';
    });
}

function initSealGalleries() {
    document.querySelectorAll('.seal-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const sealId = card.dataset.seal;
            const center = window.currentCenter;
            const seal = centersData[center].find(s => s.id === sealId);
            // Запоминаем текущего тюленя для возврата на ту же карточку
            window.currentSealId = sealId;
            
            if (seal && seal.photos && seal.photos.length > 0) {
                showSealGallery(seal);
            }
        });
    });
}

function showSealGallery(seal) {
    const galleryHTML = `
        <div class="seal-gallery">
            <div class="gallery-header">
                <img src="${seal.photo}" alt="${seal.name}" class="gallery-avatar">
                <h2>${seal.name}</h2>
            </div>
            <div class="seal-photos-container">
                ${seal.photos.map(photo => `
                    <div class="seal-photo-item">
                        <img src="${photo}" alt="${seal.name}">
                    </div>
                `).join('')}
            </div>
            <button class="back-btn back-to-seal">← Назад к тюленю</button>
        </div>
    `;
    
    document.getElementById('sealsContainer').innerHTML = galleryHTML;
    initPhotoModal();
    
    document.querySelector('.back-to-seal').addEventListener('click', () => {
        showSeals(window.currentCenter);
    });
}

function initPhotoModal() {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img class="modal-photo" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    document.querySelectorAll('.seal-photo-item img').forEach(photo => {
        photo.addEventListener('click', () => {
            modal.querySelector('.modal-photo').src = photo.src;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    modal.querySelector('.close-modal').addEventListener('click', () => {
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