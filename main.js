var app = new Vue({
    el: '#app',
    data: {
        pagetitle: 'Lion Games',
        something: 'A place for game enthusiasts everywhere.',
        image: 'imgs/legoscrabble.png',
        itemtitle: 'Lego Scrabble'
    }
})

var app2 = new Vue({
    el: '#app2',
    template: `
    <div>
        <div id="textbox">
            <h1 id="paragraphtitle">Featured Game: {{ itemtitle }}</h1>
            <p id="boxtext">{{ description }}</p>
            <div id="picture">
                <img id="pictureimg" :src="image">
            </div>
            <form action="legoscrabble.html">
                <button id="button1" >{{ button }}</button>
            </form>
        </div>
    </div>
    `,
    data: {
        image: 'imgs/legoscrabble.png',
        featuredgame: 'Lego Scrabble',
        description: 'A Lego version of the popular game Scrabble.',
        button: 'Check It Out'
    }
})

var app3 = new Vue({
    el: '#app3',
    template: `
    <div>
        <nav class="navbar">
            <span class="dropdown">
                <button class="dropbutton">Articles</button>
                <span class="dropdown-content">
                    <a id="bgtext" href="boardgames.html">History of Board Games</a>
                    <a id="bgtext" href="legoscrabble.html">Lego Scrabble</a>
                </span>
            </span>
            <span class="dropdown">
                <button class="dropbutton">Games</button>
                <span class="dropdown-content">
                    <a id="bgtext" href="tictactoe.html">Tic Tac Toe Game</a>
                    <a id="bgtext" href="">Chess Game</a>
                </span>
            </span>
            <a id="homemenu" href="index.html">Home</a>
            <a id="aboutbutton" href="about.html">About Lion Games</a>
        </nav>
    </div>
    `

})