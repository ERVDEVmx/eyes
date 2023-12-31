const balls = document.querySelectorAll('.ball');

document.onmousemove = (event) => {
    const x = `${(event.clientX * 100) / window.innerWidth}%`;
    const y = `${(event.clientY * 100) / window.innerHeight}%`;

    balls.forEach(ball => {
        ball.style.left = x;
        ball.style.top = y;
        ball.style.transform = `translate(-${x}, -${y})`;
    });
};
