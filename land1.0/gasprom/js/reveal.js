
document.addEventListener('DOMContentLoaded', function () {

    // Обрабатываем открытие модалки
    document.querySelectorAll('.js_reveal__open')
        .forEach(handlerOpen => {
            handlerOpen
                .addEventListener('click', ({target}) => revealOpen(target))
        })


    // Обрабатываем закрытие
    const handlerClose = document.querySelector('.js_reveal__close')
    const reveal = handlerClose.closest('.js_reveal ')
    handlerClose.addEventListener('click', () => revealClose(reveal))


    // Обрабатываем клик по подложке
    const revealModal = document.querySelector('.js_reveal')
    revealModal.addEventListener('click', ({target}) => {
        const isOpen = isRevealOpen(target);
        if (target.matches('.js_reveal__close, .js_reveal') && isOpen) {
            revealClose(target)
        }
    })

})


// Проверяем откыта ли модалка
function isRevealOpen(element)
{
    if (element.matches('.js_reveal') && element.matches('.open')) {
        return true
    } else {
        return !!element.closest(".reveal").matches('.open');
    }
}


function resizeContainer(dataset, initTarget, reveal)
{
    const maxWidth = initTarget.querySelector(dataset.image)?.naturalWidth
    const revealContainer = reveal.querySelector('.reveal__container')
    const { paddingLeft,  paddingRight} = window.getComputedStyle(revealContainer)
    const width = parseInt(paddingLeft) + parseInt(paddingRight) + maxWidth
    revealContainer.style.maxWidth = `${width}px`
}

// Открываем модалку
function revealOpen(target)
{
    const initTarget = target.closest('.js_reveal__open')
    const dataset = initTarget.dataset


    // Получаем модалку по умолчанию или из дата атрибута
    const reveal = document.querySelector(dataset.tpl || '.js_reveal')
    // Получаем контейнер
    const revealContent = reveal.querySelector('.js_reveal__content')

    // Проверяем нужно ли указывать макс. ширину для контейнера (для сниппета картинка)
    if (dataset.type === 'image-snippet') {
        resizeContainer(dataset, initTarget, reveal)
    }

    revealContent.innerHTML = initTarget.outerHTML

    // Выбрасываем событие перед открытием модалки
    throwEvent('reveal:before-open', reveal)

    // Показываем модалку
    reveal.classList.add('open')

    // Выбрасываем событие после открытием модалки
    throwEvent('reveal:open', reveal)

    lockBodyModal(true)
}


// Закрываем модалку
function revealClose(reveal)
{
    reveal.querySelector('.js_reveal__content').innerHTML = ''
    reveal.classList.remove('open')
    reveal.querySelector('.reveal__container').removeAttribute('style')

    // Снимаем блокировку скролла
    lockBodyModal()

    // Выбрасываем событие
    throwEvent('reveal:close', reveal)

}

// Закрываем скролл при открытой модалке
function lockBodyModal(state = false)
{
    if (state) {
        return setPositionFixed()
    }
    restorePositionSetting()
}

// Выбрасываем события
function throwEvent(eventName, reveal)
{
    document.dispatchEvent(new CustomEvent(eventName, {
        detail : {reveal}
    }))
}

let previousBodyPosition;

function setPositionFixed() {
    // Получаем ширину скролла до начала анимации
    const paddingValue = `${window.innerWidth - document.querySelector('main').offsetWidth}px`

    return window.requestAnimationFrame(function () {

        if (previousBodyPosition === undefined) {

            const styles =  getComputedStyle(document.body)

            previousBodyPosition = {
                position: styles.getPropertyValue('position'),
                top: styles.getPropertyValue('top'),
                left:styles.getPropertyValue('left'),
                paddingRight: styles.getPropertyValue('padding-right')
            }


            // Устанавливаем значение скролла
            const { scrollY, scrollX, innerHeight} = window;
            document.body.style.position = 'fixed';
            document.body.style.top =  `-${scrollY}px`;
            document.body.style.left = `-${scrollX}px`;
            document.body.style.paddingRight = paddingValue



            document.body.classList.add('is-locked')
            setTimeout(function () {
                return window.requestAnimationFrame(function () {
                    const bottomBarHeight = innerHeight - window.innerHeight;
                    if (bottomBarHeight && scrollY >= innerHeight) {
                        // Показываем панель
                        document.body.style.top = -(scrollY + bottomBarHeight);
                    }
                });
            }, 300);
        }
    });
}

function restorePositionSetting(){
    if (previousBodyPosition !== undefined) {


        const y = -parseInt(document.body.style.top, 10);
        const x = -parseInt(document.body.style.left, 10);

        // Сбрасываем стили на сохранённые

        // На текущей момент это не нужно так как нет стилей для body если появятся нужно будет раскомментировать
        // document.body.style.position = previousBodyPosition.position;
        // document.body.style.top = previousBodyPosition.top;
        // document.body.style.left = previousBodyPosition.left;
        // document.body.style.paddingRight= previousBodyPosition.paddingRight

        document.body.removeAttribute('style')
        // Удаляем класс
        document.body.classList.remove('is-locked')
        // Сбрасываем скролл
        window.scrollTo(x, y);

        previousBodyPosition = undefined;
    }
}