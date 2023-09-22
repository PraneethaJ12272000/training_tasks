import React from "react";

function Header() {
    return (


        <nav class="navbar navbar-expand-lg bg-body-white">

            <div class="container-fluid ">
                <nav class="navbar bg-white">
                    <a class="navbar-brand  mx-4" href="#">
                        <img src="logo.png" alt="Logo" width="200" height="60"></img>
                    </a>
                </nav>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <div class="col-md-2" />
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/Home#About" aria-current="page" >ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/Home#Solutions">SOLUTIONS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/Home#Imapct">IMPACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">COMMUNITY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">APP</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                NEWS
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">INC42</a></li>
                                <li><a class="dropdown-item" href="#">YOUR STORY</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
        </nav>
            

        

    );
}

export default Header;