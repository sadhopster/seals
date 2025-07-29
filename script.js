// Данные о тюленях из Tokkari Center, Хоккайдо
const seals = [
    {
        id: 'yo-chan',
        name: 'Yo-chan (Йо-чан)',
        species: 'Кольчатая нерпа',
        age: '13 лет',
        weight: 'Отказывается вставать на весы (50-60 кг)',
        features: 'Любит гю и джампу-джампу',
        description: 'Йо-чан - великолепно исполняет команды, в особенности "Гю" и "Джампу-джампу". Она немного ленивая, но когда дело доходит до рыпки, то ее сила равняется 100%.'
    },
    {
        id: 'tsuki-chan',
        name: 'Tsuki-chan (Цуки-тян)',
        species: 'Байкальская нерпа (Pusa sibirica)',
        age: '6 лет',
        weight: '55-60 кг',
        features: 'Любит петь и издавать звуки',
        description: 'Tsuki-chan - настоящая певица среди нерп! Она часто издает различные звуки и "поет" под водой. Её голос можно услышать даже на берегу. Очень общительная и ласковая, любит общаться с другими тюленями и посетителями центра.'
    },
    {
        id: 'katsunori-kun',
        name: 'Katsunori-kun (Кацунори-кун)',
        species: 'Байкальская нерпа (Pusa sibirica)',
        age: '10 лет',
        weight: '75-80 кг',
        features: 'Эксперт по рыбной ловле и навигации',
        description: 'Katsunori-kun - опытный охотник и отличный навигатор. Он научил многих молодых нерп искусству рыбной ловли и ориентации в воде. Любит греться на солнышке и наблюдать за посетителями. Очень мудрый и спокойный тюлень.'
    },
    {
        id: 'mashiro-kun',
        name: 'Mashiro-kun (Масиро-кун)',
        species: 'Байкальская нерпа (Pusa sibirica)',
        age: '4 года',
        weight: '45-50 кг',
        features: 'Очень любопытный и игривый',
        description: 'Mashiro-kun - самый молодой и энергичный обитатель центра. Он постоянно исследует новые территории и любит играть с другими нерпами. Его любопытство не знает границ! Всегда готов к новым приключениям и обучению.'
    },
    {
        id: 'seal-5',
        name: 'Seal-5',
        species: 'Вид нерпы',
        age: '',
        weight: '',
        features: '',
        description: ''
    },
    {
        id: 'seal-6',
        name: 'Seal-6',
        species: 'Вид нерпы',
        age: '',
        weight: '',
        features: '',
        description: ''
    },
    {
        id: 'seal-7',
        name: 'Seal-7',
        species: 'Вид нерпы',
        age: '',
        weight: '',
        features: '',
        description: ''
    }
];

class SealsCarousel {
    constructor() {
        this.currentIndex = 0;
        this.cards = document.querySelectorAll('.seal-card');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        
        this.init();
    }

    init() {
        // Добавляем обработчики событий
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Добавляем обработчики для точек
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });

        // Добавляем поддержку клавиатуры
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });

        // Добавляем поддержку свайпов для мобильных устройств
        this.addTouchSupport();

        // Автоматическое переключение отключено
        // this.startAutoPlay();

        // Показываем первую карточку
        this.showCard(0);
    }

    showCard(index) {
        // Скрываем все карточки
        this.cards.forEach(card => {
            card.classList.remove('active');
        });

        // Убираем активный класс со всех точек
        this.dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Показываем нужную карточку
        this.cards[index].classList.add('active');
        this.dots[index].classList.add('active');

        // Обновляем индекс
        this.currentIndex = index;

        // Добавляем анимацию появления
        this.cards[index].style.animation = 'none';
        setTimeout(() => {
            this.cards[index].style.animation = 'fadeInUp 0.6s ease-out';
        }, 10);
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.showCard(nextIndex);
    }

    prev() {
        const prevIndex = this.currentIndex === 0 ? this.cards.length - 1 : this.currentIndex - 1;
        this.showCard(prevIndex);
    }

    goTo(index) {
        this.showCard(index);
    }

    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        const carousel = document.querySelector('.carousel-container');

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        carousel.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            carousel.addEventListener('mouseup', (e) => {
                endX = e.clientX;
                this.handleSwipe();
                carousel.removeEventListener('mouseup', arguments.callee);
            });
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Свайп влево - следующая карточка
                this.next();
            } else {
                // Свайп вправо - предыдущая карточка
                this.prev();
            }
        }
    }

    startAutoPlay() {
        setInterval(() => {
            this.next();
        }, 5000);
    }
}

// Добавляем дополнительные анимации и эффекты
class SealsAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Анимация появления страницы
        this.animatePageLoad();
        
        // Анимация при наведении на карточки
        this.addHoverEffects();
        
        // Анимация точек навигации
        this.animateDots();
    }

    animatePageLoad() {
        const elements = document.querySelectorAll('.seals-carousel');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    addHoverEffects() {
        const cards = document.querySelectorAll('.seal-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.02)';
                card.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });
    }

    animateDots() {
        const dots = document.querySelectorAll('.dot');
        
        dots.forEach(dot => {
            dot.addEventListener('mouseenter', () => {
                dot.style.transform = 'scale(1.3)';
            });
            
            dot.addEventListener('mouseleave', () => {
                if (!dot.classList.contains('active')) {
                    dot.style.transform = 'scale(1)';
                }
            });
        });
    }
}

// Добавляем интерактивные элементы
class SealsInteractions {
    constructor() {
        this.init();
    }

    init() {
        // Звук и подсказки отключены
        // this.addSealSounds();
        // this.addInfoTooltips();
    }

    addSealSounds() {
        const avatars = document.querySelectorAll('.seal-avatar');
        
        avatars.forEach(avatar => {
            avatar.addEventListener('click', () => {
                this.playSealSound();
                this.addClickEffect(avatar);
            });
        });
    }

    playSealSound() {
        // Создаем простой звук тюленя (можно заменить на реальный аудио файл)
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    addClickEffect(element) {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = 'scale(1.05)';
        }, 150);
    }

    addInfoTooltips() {
        const infoElements = document.querySelectorAll('.seal-info p');
        
        infoElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    showTooltip(element) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Нажмите на аватар тюленя, чтобы услышать звук!';
        tooltip.style.cssText = `
            position: absolute;
            background: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - 40) + 'px';
        
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
        
        this.currentTooltip = tooltip;
    }

    hideTooltip() {
        if (this.currentTooltip) {
            this.currentTooltip.remove();
            this.currentTooltip = null;
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new SealsCarousel();
    new SealsAnimations();
    new SealsInteractions();
    
    // Добавляем плавную прокрутку для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Добавляем поддержку темной темы (опционально)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Проверяем сохраненную тему
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
} 