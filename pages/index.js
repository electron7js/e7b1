import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
     <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lets Cook</title>
    <link href="CSS/style.css" rel="stylesheet">
    <script src="JS/script.js"></script>
    <style>
        .middle {
            top: 88px;
            height: 1300px;
        }

        footer {
            bottom: -650px;
        }

        h1 {
            position: relative;
            top: 10px;
            margin-left: 20px;
        }

        #slider {
            position: relative;
            top: 20px;
            margin: auto;
            background-image: url("images/slide1.jpg");
            width: 800px;
            height: 400px;      
            transition: background-image 0.8s;
        }

        .relatedrecipes {
            position: relative;
            top: 20px;
        }
    </style>
</head>

<main onload="autoslide() , clock()">

    <div class="container">
        <header id="top">
            <a href="http://bijeshmanstha.com.np">
                <figure><img src="images/logo.png" alt="logo"></figure>
            </a>
            <nav>
                <ul>
                    <li><a href="index.html" title="Home">Home</a></li>
                    <li> <a href="recipes.html" title="Recipes">Recipes</a></li>
                    <li> <a href="about.html" title="About">About</a></li>
                    <li><a href="contact.html" title="Contact">Contact</a></li>
                    <li><a href="2048js/game.html" title="Game">Game</a></li>
                    
                </ul>
            </nav>
        </header>

        <div class="middle">
            <h1>Let's Cook Something</h1>
            <div onclick="slide()" class="slider" id="slider"></div>
            <div class="homepagecontent">
                <p>A place to come when you feel like you should just start cooking</p>
                <h2>Times Ticking</h2>
                <div id="clock"></div>
                <div class="relatedrecipes" id="relatedrecipes">
                    <div class="titlebox methodtitle">Recipes</div>
                    <a href="garlic-bread.html">
                        <div class="relatedrecipe">
                            <figure><img class="prepphoto" src="images/garlic-bread.jpg" alt="garlic bread">
                                <p class="relateditem">Garlic Bread</p>
                            </figure>
                        </div>
                    </a>
                    <a href="smores.html">
                        <div class="relatedrecipe">
                            <figure><img class="prepphoto" src="images/smores.jpg" alt="smores">
                                <p class="relateditem">Smores </p>
                            </figure>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <footer id="bottom">
            <div class="sitemap">
                <p>Site Map</p>
                <nav>
                    <ul>

                        <li><a href="index.html" title="Home">Home</a></li>


                        <li><a href="recipes.html" title="Recipes">Recipes</a></li>


                        <li><a href="about.html" title="About">About</a></li>

                        <li>
                            <a href="contact.html" title="Contact">Contact</a>
                        </li>

                    </ul>
                </nav>

            </div>
            <div class="socials">
                <p>Socials</p>

                <nav>
                    <ul>

                        <li><a href="https://instagram.com/bijeshman" title="instagram"><img
                                    src="images/instagram-logo.png" alt="Instagram logo" class="iconlogo"><span
                                    class="iconlink">@bijeshman</span> </a>
                        </li>


                        <li> <a href="mailto:bijeshmansth.bs@gmail.com" title="email"><img src="images/email-icon.jpg"
                                    alt="email icon" class="iconlogo"><span class="iconlink">Email</span></a></li>

                    </ul>
                </nav>

            </div>
            <div class="copyright">&copy;bijeshmanstha.com.np, all rights reserved</div>
        </footer>
    </div>
</main>

    </div>
  )
}
