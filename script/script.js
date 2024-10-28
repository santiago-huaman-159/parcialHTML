function App() {}

    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {

        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');

        const carruselWidth = carrusel[0].offsetWidth;

        const TrackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nextAction(leftPosition,TrackWidth, listWidth, carruselWidth, track);


    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {

            track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;

        }
    }

    let nextAction = (leftPosition, TrackWidth, listWidth, carruselWidth, track) => {

        if (leftPosition < (TrackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        }

    }

