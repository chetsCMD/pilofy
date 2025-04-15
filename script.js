body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #1e1e1e;
    color: #f0f0f0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Анимация нейронной сети */
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #66d9ef;
    opacity: 0.8;
}

.line {
    position: absolute;
    width: 2px;
    background-color: rgba(102, 217, 239, 0.5);
    transition: all 0.1s ease-out;
}

/* Текст на странице */
h1 {
    font-size: 3em;
    margin-top: 100px;
    color: #66d9ef;
    text-shadow: 0 0 5px #66d9ef, 0 0 10px #66d9ef;
}

h2 {
    font-size: 1.5em;
    color: #888;
}

h3 {
    font-size: 1.2em;
    color: #66d9ef;
}

.content {
    text-align: center;
    z-index: 1;
}
