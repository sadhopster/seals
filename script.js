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
            features: 'Злюка, старушка, великая госпожа', 
            description: 'Ару всем всегда недовольна. Разбудили? Ару злится. Покормили? Ару злится. Рядом другой тюлень проплыл? Ару злится. Ару - злюка.', 
            photo: 'aru.png',
            photos: [
                'aru1.jpg',
                'aru2.jpg',
                'aru3.jpg'
            ]
        },
       {
         id: 'Tino', 
            name: 'Тино', 
            species: 'Кольчатая нерпа', 
            age: '22 года', 
            weight: 'Нет данных', 
            features: 'Любит брызгаться, иногда злится', 
            description: 'Ару его жена, этим все сказано.', 
            photo: 'tino.png',
            photos: [
                'tino1.jpg',
                'tino2.jpg',
                'tino3.jpg',
                'tino4.jpg'
            ]
        }
    ],
    kaiyukan: [
        { 
            id: 'uki', 
            name: 'Юки', 
            species: 'Кольчатая нерпа', 
            age: '17 лет', 
            weight: '50-60 кг', 
            features: 'Толстенькая и мягенькая', 
            description: 'По некоторым видео от киперов Кайюкана, можно понять настолько она мягкая', 
            photo: 'uki.png',
            photos: [
                'uki1.jpg',
                'uki2.jpg',
                'uki3.jpg',
                'uki4.jpg'
            ]
        },
        { 
            id: 'Moya', 
            name: 'Мойя', 
            species: 'Кольчатая нерпа', 
            age: '16 лет', 
            weight: '50-60 кг', 
            features: 'Чем-то напоминает Кацунори', 
            description: 'От Мойи веет тайнами, пока не понимаю как к нему относиться', 
            photo: 'moya.png',
            photos: [
                'moya1.jpg',
                'moya2.jpg',
                'moya3.jpg',
                'moya4.jpg'
            ]
        },
        { 
            id: 'Arare', 
            name: 'Араре', 
            species: 'Кольчатая нерпа', 
            age: '20 лет', 
            weight: '50-60 кг', 
            features: 'Идеал среди нерп', 
            description: 'Кто-то говорит что она выглядит слишком идеальной, другие называют её царицей', 
            photo: 'arare.png',
            photos: [
                'arare1.jpg',
                'arare2.jpg',
                'arare3.jpg',
                'arare4.jpg'
            ]
        }
    ],

    sasha: [
        { photo: 'sasha1.png', description: 'Рисунок Йо-чан на судоку' },
        { photo: 'sasha2.jpg', description: 'Рисунок Цуки и Йо' },
        { photo: 'sasha3.jpg', description: 'Батончик' }
    ]
};

const LIKED_KEY = 'likedSealKeys';

function buildSealKey(center, sealId) {
    return `${center}:${sealId}`;
}

function readLikedSet() {
    try {
        const raw = localStorage.getItem(LIKED_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        return new Set(Array.isArray(arr) ? arr : []);
    } catch (e) {
        return new Set();
    }
}

function writeLikedSet(set) {
    try {
        localStorage.setItem(LIKED_KEY, JSON.stringify(Array.from(set)));
    } catch (e) {
    }
}

function isSealLiked(center, sealId) {
    const set = readLikedSet();
    return set.has(buildSealKey(center, sealId));
}

function toggleLike(center, sealId) {
    const set = readLikedSet();
    const key = buildSealKey(center, sealId);
    if (set.has(key)) {
        set.delete(key);
        writeLikedSet(set);
        return false;
    }
    set.add(key);
    writeLikedSet(set);
    return true;
}

function getLikedSealsData() {
    const set = readLikedSet();
    const keys = Array.from(set);
    const liked = [];
    keys.forEach(k => {
        const [center, id] = k.split(':');
        const list = centersData[center];
        if (!list) return;
        const seal = list.find(s => s.id === id);
        if (seal) {
            liked.push({ ...seal, _center: center });
        }
    });
    return liked;
}

const DAILY_SEAL_KEY = 'dailySeal';
const DAILY_SEAL_DATE_KEY = 'dailySealDate';

function getDailySeal() {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem(DAILY_SEAL_DATE_KEY);
    
    if (storedDate === today) {
        const storedSeal = localStorage.getItem(DAILY_SEAL_KEY);
        return storedSeal ? JSON.parse(storedSeal) : null;
    }
    
    const allSeals = [
        ...centersData.tokkari,
        ...centersData.kamogawa,
        ...centersData.kaiyukan
    ];
    
    const randomIndex = Math.floor(Math.random() * allSeals.length);
    const dailySeal = allSeals[randomIndex];
    
    localStorage.setItem(DAILY_SEAL_KEY, JSON.stringify(dailySeal));
    localStorage.setItem(DAILY_SEAL_DATE_KEY, today);
    
    return dailySeal;
}

function getDailySealExplanation(seal) {
    const explanations = [
        `Сегодня вы ${seal.features.toLowerCase()}, прямо как ${seal.name}!`,
        `Ваша энергия сегодня полностью совпадает с энергией ${seal.name}.`,
        `Сегодня вы разделяете с ${seal.name} его особые черты характера.`,
        `Ваше настроение сегодня напоминает настроение ${seal.name}.`,
        `Как и ${seal.name}, сегодня вы проявляете свои уникальные качества.`,
        `Сегодня вы так же очаровательны, как ${seal.name}!`,
        `Ваши сегодняшние планы идеально совпадают с образом жизни ${seal.name}.`
    ];
    
    return explanations[Math.floor(Math.random() * explanations.length)];
}

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
    } else if (center === 'daily-seal') {
        initLikeButtons();
        initSealGalleries();
        initShareButton();
        initBackButton();
    } else {
        initCarousel();
    }
}

function createSealsHTML(center) {
    let seals;
    if (center === 'liked') {
        seals = getLikedSealsData();
        if (!seals || seals.length === 0) {
            return `
                <div class="seals-carousel">
                    <h2 class="title">Понравившиеся тюлени</h2>
                    <div class="empty-liked">
                        <p>Вы пока никого не лайкнули.</p>
                        <button class="back-btn back-to-centers">← Назад к центрам</button>
                    </div>
                </div>
            `;
        }
    } else {
        seals = centersData[center];
    }
    
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
    
    if (center === 'daily-seal') {
        const dailySeal = getDailySeal();
        if (!dailySeal) {
            return `
                <div class="seals-carousel">
                    <h2 class="title">Тюлень дня</h2>
                    <div class="empty-liked">
                        <p>Не удалось определить тюленя дня.</p>
                        <button class="back-btn back-to-centers">← Назад к центрам</button>
                    </div>
                </div>
            `;
        }
        
        const sealCenter = centersData.tokkari.includes(dailySeal)
            ? 'tokkari'
            : centersData.kamogawa.includes(dailySeal)
                ? 'kamogawa'
                : 'kaiyukan';
        
        return `
            <div class="seals-carousel">
                <h2 class="title">Ваш тюлень дня</h2>
                <div class="carousel-container" style="min-height: auto;">
                    <div class="carousel-track" style="transform: none; display: block;">
                        <div class="seal-card active" data-seal="${dailySeal.id}" data-center="${sealCenter}">
                            <div class="card-image">
                                <div class="seal-avatar">
                                    <img src="${dailySeal.photo}" alt="${dailySeal.name}">
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="seal-name">${dailySeal.name} 
                                    <span class="daily-seal-badge">Тюлень дня</span>
                                </h2>
                                <p class="seal-species">${dailySeal.species}</p>
                                <div class="seal-info">
                                    ${dailySeal.age ? `<p><strong>Возраст:</strong> ${dailySeal.age}</p>` : ''}
                                    ${dailySeal.weight ? `<p><strong>Вес:</strong> ${dailySeal.weight}</p>` : ''}
                                    ${dailySeal.features ? `<p><strong>Особенности:</strong> ${dailySeal.features}</p>` : ''}
                                </div>
                                <p class="seal-description">${dailySeal.description}</p>
                                <p class="seal-description" style="margin-top: 15px; font-style: italic;">
                                    <strong>Почему это ваш тюлень сегодня?</strong><br>
                                    ${getDailySealExplanation(dailySeal)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="back-btn back-to-centers">← Назад к центрам</button>
                <button class="back-btn" id="share-daily-seal" style="margin-top: 10px;">
                    Поделиться своим тюленем
                </button>
            </div>
        `;
    }
    
    return `
        <div class="seals-carousel">
            <h2 class="title">${center === 'liked' 
                ? 'Понравившиеся тюлени' 
                : `Тюлени ${center === 'tokkari' 
                    ? 'Tokkari' 
                    : center === 'kamogawa' 
                        ? 'Kamogawa' 
                        : 'Osaka Aquarium Kaiyukan'} Center`}
            </h2>
            <div class="carousel-container">
                <div class="carousel-track">
                    ${seals.map((seal, index) => {
                        const sealCenter = center === 'liked' ? seal._center : center;
                        const liked = isSealLiked(sealCenter, seal.id);
                        return `
                        <div class="seal-card ${index === 0 ? 'active' : ''}" data-seal="${seal.id}" data-center="${sealCenter}">
                            <button class="like-btn ${liked ? 'liked' : ''}" aria-label="Нравится" data-center="${sealCenter}" data-seal="${seal.id}">❤</button>
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
                        `;
                    }).join('')}
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

    if (!track || cards.length === 0) {
        document.querySelector('.back-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            window.currentSealId = undefined;
            window.currentSealKey = undefined;
            document.getElementById('sealsContainer').style.display = 'none';
            document.getElementById('centersCard').style.display = 'block';
        });
        return;
    }

    const isLikedCenter = window.currentCenter === 'liked';
    let sealsForCarousel = [];
    if (isLikedCenter) {
        sealsForCarousel = getLikedSealsData();
    } else {
        sealsForCarousel = centersData[window.currentCenter] || [];
    }

    if (window.currentSealKey) {
        const [savedCenter, savedId] = String(window.currentSealKey).split(':');
        const restoredIndex = sealsForCarousel.findIndex(s => {
            const centerOfSeal = isLikedCenter ? s._center : window.currentCenter;
            return centerOfSeal === savedCenter && s.id === savedId;
        });
        if (restoredIndex !== -1) currentIndex = restoredIndex;
    } else if (window.currentSealId) {
        const restoredIndex = sealsForCarousel.findIndex(s => s.id === window.currentSealId);
        if (restoredIndex !== -1) currentIndex = restoredIndex;
    }

    initSealGalleries(); 
    initLikeButtons();
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
    const initialCard = cards[currentIndex];
    if (initialCard) {
        const initSealId = initialCard.dataset.seal;
        const initCenter = initialCard.dataset.center || window.currentCenter;
        window.currentSealId = initSealId;
        window.currentSealKey = `${initCenter}:${initSealId}`;
    }

    function updateCarousel(newIndex) {
        currentIndex = newIndex;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Обновляем активную точку
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        const activeCard = cards[currentIndex];
        window.currentSealId = activeCard?.dataset.seal;
        const activeCenter = activeCard?.dataset.center || window.currentCenter;
        window.currentSealKey = `${activeCenter}:${window.currentSealId}`;
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
            updateCarousel(currentIndex + 1);
        } else if (diff < -50 && currentIndex > 0) {
            updateCarousel(currentIndex - 1);
        } else {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    track.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

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
        e.stopPropagation();
        window.currentSealId = undefined;
        window.currentSealKey = undefined;
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
        window.currentSealId = undefined;
        window.currentSealKey = undefined;
        document.getElementById('sealsContainer').style.display = 'none';
        document.getElementById('centersCard').style.display = 'block';
    });
}

function initGallery() {
    const modal = document.querySelector('.photo-modal');
    const modalImg = modal.querySelector('.modal-photo');
    const modalDesc = modal.querySelector('.modal-description');
    const closeBtn = modal.querySelector('.close-modal');
    
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

    document.querySelector('.back-to-centers').addEventListener('click', () => {
        document.getElementById('sealsContainer').style.display = 'none';
        document.getElementById('centersCard').style.display = 'block';
    });
}

function initSealGalleries() {
    document.querySelectorAll('.seal-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target && e.target.closest('.like-btn')) {
            }
            const sealId = card.dataset.seal;
            const center = card.dataset.center || window.currentCenter;
            const seal = centersData[center]?.find(s => s.id === sealId);
            window.currentSealId = sealId;
            window.currentSealKey = `${center}:${sealId}`;
            
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

function initLikeButtons() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const center = btn.dataset.center;
            const sealId = btn.dataset.seal;
            const nowLiked = toggleLike(center, sealId);
            btn.classList.toggle('liked', nowLiked);
            if (window.currentCenter === 'liked') {
                showSeals('liked');
            }
        });
    });
}

function initShareButton() {
    const shareBtn = document.getElementById('share-daily-seal');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', async () => {
        const card = document.querySelector('.seal-card.active');
        if (!card) {
            alert("Карточка тюленя дня не найдена!");
            return;
        }

        const buttons = card.querySelectorAll('button, .like-btn');
        buttons.forEach(btn => btn.style.display = 'none');

        try {
            function getEffectiveOpaqueBg(element) {
                function compositeOverWhite(r, g, b, a) {
                    const rr = Math.round(r * a + 255 * (1 - a));
                    const gg = Math.round(g * a + 255 * (1 - a));
                    const bb = Math.round(b * a + 255 * (1 - a));
                    return `rgb(${rr}, ${gg}, ${bb})`;
                }

                let current = element;
                while (current) {
                    const bg = window.getComputedStyle(current).backgroundColor;
                    if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
                        const m = bg.match(/rgba?\(([^)]+)\)/);
                        if (m) {
                            const parts = m[1].split(',').map(s => s.trim());
                            const r = parseInt(parts[0], 10);
                            const g = parseInt(parts[1], 10);
                            const b = parseInt(parts[2], 10);
                            const a = parts[3] !== undefined ? parseFloat(parts[3]) : 1;
                            if (isNaN(a) || a >= 1) {
                                return `rgb(${r}, ${g}, ${b})`;
                            }
                            return compositeOverWhite(r, g, b, a);
                        }
                        return bg;
                    }
                    current = current.parentElement;
                }
                return '#ffffff';
            }

            const bgColor = getEffectiveOpaqueBg(card);
            const scale = Math.min(2, (window.devicePixelRatio || 1));
            const canvas = await html2canvas(card, {
                backgroundColor: bgColor,
                useCORS: true,
                scale
            });

            const opaqueCanvas = document.createElement('canvas');
            opaqueCanvas.width = canvas.width;
            opaqueCanvas.height = canvas.height;
            const ctx = opaqueCanvas.getContext('2d');
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, opaqueCanvas.width, opaqueCanvas.height);
            ctx.drawImage(canvas, 0, 0);

            const blob = await new Promise(resolve => opaqueCanvas.toBlob(resolve, 'image/png'));
            if (!blob) {
                alert("Ошибка: не удалось создать изображение (blob пустой).");
                return;
            }

            const file = new File([blob], 'seal.png', { type: 'image/png' });
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (isMobile && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'Мой тюлень дня 🦭',
                    text: 'Посмотри, какой у меня сегодня тюлень!',
                    files: [file]
                });
            } else {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.style.display = 'none';
                link.href = url;
                link.download = 'seal.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                alert('На мобильных устройствах будет меню "Поделиться". На ПК картинка скачана как seal.png.');
            }
        } catch (err) {
            console.error('Ошибка при создании скриншота:', err);
            alert('Не удалось создать скриншот 😢');
        } finally {
            // Возвращаем кнопки обратно
            buttons.forEach(btn => btn.style.display = '');
        }
    });
}

function initBackButton() {
    document.querySelector('.back-to-centers')?.addEventListener('click', (e) => {
        e.stopPropagation();
        window.currentSealId = undefined;
        window.currentSealKey = undefined;
        document.getElementById('sealsContainer').style.display = 'none';
        document.getElementById('centersCard').style.display = 'block';
    });
}