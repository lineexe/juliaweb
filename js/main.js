// modal zap
function openModal(modalID) {
    const modal = document.getElementById(modalID);

    if (modal) {
        modal.classList.add('open');

        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'btnclose') {
                modal.classList.remove('open');
            }
        });

    }
}

const zap = document.querySelector('.zapson');
zap.addEventListener('click', function () {
    openModal('modalzap');
});

// modal info
function openInfo(modalInfo) {
    const modali = document.getElementById(modalInfo);

    if (modali) {
        modali.classList.add('openi');

        modali.addEventListener('click', (e) => {
            if (e.target.id == modalInfo || e.target.className == 'btncloseInfo') {
                modali.classList.remove('openi');
            }
        });
        
    }
}

const info = document.querySelector('.btnsheInfo');
info.addEventListener('click', function () {
    openInfo('sheInfo');
});


// modal Art
/*
function openArt(modalArt) {
    const modalA = document.getElementById(modalArt);

    if (modalA) {
        modalA.classList.add('opena');

        modalA.addEventListener('click', (e) => {
            if (e.target.id == modalArt || e.target.className == 'btncloseArt') {
                modalA.classList.remove('opena');
            }
        });
        
    }
}

const art = document.querySelector('.btnArt');
art.addEventListener('click', function () {
    openArt('modart');
});

*/






/* arrow function pro modalzap
    zap.addEventListener('click', () => openModal('modalzap'));
*/

/*
(e.target) captura cada elemento da pag sendo
clicado, teste na linha 5:

modal.addEventListener('click', (e) => {
        console.log(e.target)
    });
*/
