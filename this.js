$('main').prepend(`<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,450,500,550,700,800&display=swap");

.puppy-nav .guide-items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #f5f6f8;
    padding: 0 20px;
    margin: -10px 0;
}

.gx-overlap {
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: flex-end;
    height: 300px;
    width: 100%;
}

.gx-breed>img {
    width: 100%;
}

.gx-breed {
    position: relative;
    width: 100%;
}

.puppy-nav .guide-items>h4 {
    font-size: 18px;
    font-weight: 100;
}

li#foodList>.gx-main-container {
    display: block;
}

.gx-anchor {
    display: flex;
    justify-content: center;
}

.gx-anchor>a {
    line-height: 0;
    margin-bottom: 15px;
}



.puppy-nav .checkbox-item label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    height: 22px;
    left: 10px;
    position: absolute;
    top: 0px;
    width: 22px;
}

.puppy-nav h3 {
    font-size: 20px;
    max-width: 245px;
    margin-bottom: 0;
}

.puppy-nav a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;

    line-height: 20px;
    color: #1CB1B8;
    text-align: left;
    width: 100%;
    max-width: 237px;
}

.gx-middle-container>div {
    margin-top: 7px;
}

.puppy-nav .guide-items h3,
.gx-inner-content>h3 {
    line-height: 24px;
    font-weight: normal;
    font-family: Roboto !important;
}


.container {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
}

.puppy-nudge-header {
    display: flex;
    justify-content: center;
    background: #f5ead5;
    width: 100%;
    margin-top: -20px;
}

.puppy-nudge-header>img {
    max-width: 1300px;
    width: 100%;
    height: auto;
}

.puppy-body {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

span.product-reviews-handler {
    text-align: left;
}

.puppy-content-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1300px;
    justify-content: flex-start;
}

.puppy-content {
    max-width: 960px;
    width: 100%;
    border: 1px solid #c6cfd0;
    font-family: Roboto !important;
    font-style: normal;
    border-radius: 5px;
}

.puppy-content>ul {
    list-style: none;
    width: 100%;
    border-radius: 5px;
}

.puppy-nav-list {
    flex-basis: 23%;
}

.puppy-nav {
    background: #f5f6f8;
    border: 1px solid #c6cfd0;
    border-radius: 5px;
    margin-bottom: 20px;
}

.guide-items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #f5f6f8;
}

#root .guide-items-top {
    padding: 20px 25px 0;
}

.guide-items-top {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.guide-items>h3 {

    line-height: 24px;
}



.gx-inner-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1;
}

.gx-inner-content ul {
    padding: 0 20px;
}

.grey {
    background: #F5F6F8;
    border-radius: 4px;
    padding: 20px;
}

div h3,
.gx-inner-content>h3 {
    font-family: Roboto !important;
    font-style: normal;
    font-weight: bold;

    line-height: 23px;
    width: 100%;
}

.checkbox-item {
    position: relative;
    width: 50px;
}

.checkbox-item label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 28px;
}

.checkbox-item label:after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 6px;
    opacity: 0;
    position: absolute;
    top: 8px;
    /*-webkit-transform-origin: 0;
    transform-origin: top;*/

    transform: rotate(-55deg);
    width: 12px;
}

.checkbox-item input[type="checkbox"] {
    visibility: hidden;
}

.checkbox-item input[type="checkbox"]:checked+label {
    background-color: #1cb1b8;
    border-color: #1cb1b8;
}

.checkbox-item input[type="checkbox"]:checked+label:after {
    opacity: 1;
}

.guide-row {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.guide-content-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 960px;
}

.guide-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
}


.guide-header-wrap-content>h4 {
    font-weight: bold;
    line-height: 42px;
}

.img-description>p {
    font-weight: normal;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
}

.add-me-to-cart.gx-added {
    visibility: visible !important;
    background: #2196F3;
    color: #FFF;
    border: 2px solid #2196F3;
}

.actual-guide>h4 {
    font-weight: bold;
    line-height: 28px;
}

.actions {
    width: 100%;
    max-width: 700px;
}

.actual-guide>p {
    font-weight: normal;

    line-height: 18px;
}

.breed-size-filter {
    position: absolute;
    right: 15px;
    display: flex;
    flex-direction: row;
}

.recommended-puppy-treats-wrap>h4 {
    font-weight: bold;

    line-height: 21px;
}

.recommended-puppy-treats {
    display: flex;
    justify-content: space-between;
}

.puppy-content>ul>li {
    border-top: 1px solid #c6cfd0;

}

.product-list {
    overflow-x: auto;
    margin-bottom: 15px;
}

.puppy-content>ul>li:first-child {
    border: none;
}

.puppy-content>ul>li>.guide-items:hover {
    cursor: pointer;
}

.recommended-puppy-treats>div {
    flex-basis: 20%;
    height: 300px;
    border-radius: 4px;
    border: 1px solid pink;
}

.content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
}


.guide-content-wrap>div {
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-basis: 50%;
}


.gx-inner-content img {
    border-radius: 4px;
    margin: 15px 0;
    width: 100%;
    max-width: 440px;
}

div>p,
.gx-inner-content>p {
    list-style: disc;
    font-family: Roboto !important;
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
}

.gx-inner-content li {
    list-style: disc;
}


.gx-row-flex-start {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.gx-col-flex {
    display: flex;
    flex-direction: column;
}


#root {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.add-me-to-cart {
    display: block;
    line-height: 37px;
    font-weight: bold;
    text-align: center;
    background: rgb(239, 235, 99);
    border: 2px solid rgb(239, 235, 99);
    box-sizing: border-box;
    border-radius: 4px;
    height: 40px;
}

.gx-h1 {
    color: #000;
    font-weight: bold;
    float: left;
    left: 10px;
    font-size: 20px;
    margin: 10px 0;
}

.product-item.product .wrap .details h3.product-name {
    height: auto;
    min-height: 57px;
    font-family: Helvetica, Arial, sans-serif;

    line-height: normal;
    color: #000000;
    float: left;
    max-width: 225px;
    width: 100%;
}

#content .product-item.product .wrap .details div.price p.product-latest-rrp {
    font-size: 12px !important;
    line-height: 15px !important;
}

.gx-row-one.gx-row {
    justify-content: space-between;
}

#root>li {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.gx-row-flex-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}


.gx-middle-container {
    background: #F5F6F8;
    border-radius: 4px;
}

.gx-middle-container ul {
    list-style: disc;
    list-style-position: inside;
}


.gx-middle-container strong {
    line-height: 28px;
}

.gx-middle-container li {
    line-height: 28px;
}

select,
option {
    color: #4a4a4a !important;
    border-radius: 4px !important;

    position: relative;
}

.select-wrapper {
    position: relative;
    background: transparent;
}

.select-wrapper::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    -webkit-transform-origin: 0;
    transform-origin: top;

    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    right: 10px;
    top: 5px;
    background: transparent;
}

.select-wrapper::before {
    content: "";
    position: absolute;
    border-radius: 4px;
    width: 26px;
    height: 28px;
    right: 1px;
    top: 0px;
    background: transparent;
    z-index: 1;
}


.gx-left-content>h1 {
    font-family: Roboto !important;
    font-style: normal;
    font-weight: bold;
}

.relevance-filter {
    justify-content: flex-start;

}

.puppy-nav .checkbox-item label:after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 4px;
    opacity: 0;
    position: absolute;
    top: 5px;
    transform: rotate(-55deg);
    width: 12px;
}

.hidden {
    display: none !important;
}

.product-item.product .wrap .details div.price .product-range-price>div.product-tags-wrapper {
    height: 68px !important;
}

.gx-fixed {
    position: fixed;
    width: 300px;
    float: right;
    right: 320px;
    top: 13px;
    z-index: 99999;
    opacity: 3;
}

.select-label {
    line-height: 39px;
    font-family: Roboto !important;
    font-style: normal;
    font-weight: bold;
    margin-right: 20px;
}

.content-middle-wrap {
    width: 100%;
}

.gx-sort {
    height: 40px;
    font-family: Helvetica;
    width: 100%;
    line-height: 18px;
    background: #FFFFFF;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    padding: 10px;
}

.gx-col-flex-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
}

@media screen and (max-width: 900px) {
    .gx-cart-icons {
        display: none;
    }
}

@media screen and (min-width: 901px) {
    .gx-cart-icons {
        display: none;
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 60px;
        margin-top: -99px;
    }
}

@media screen and (max-width: 960px) {
    .relevance-filter {
        flex-direction: column !important;
    }
}

@media screen and (max-width: 768px) {
    #root .product-item.product {
        margin-right: 35px;
        min-height: 380px;
        min-width: 225px;
    }
    .puppy-nudge-header>img:first-child{
        display:block;
    }
    .puppy-nudge-header>img:last-child{
        display:none;
    }
    #content .gx-inner-content p,
    li {
        font-size: 14px;
    }

    #content h1 {
        font-size: 24px !important;
    }

    #content h3 {
        font-size: 20px !important;
    }

    .gx-main-container {
        margin: 0 10px;
    }

    .gx-row-flex-center {
        margin: 10px 0;
    }

    .guide-content-wrap {
        flex-direction: column;
    }
}

@media screen and (max-width: 1024px) {
    .puppy-nav-list {
        display: none;
    }
}

@media screen and (min-width: 769px) {
    .product-item.product {
        margin: 0 5px;
        min-height: 380px;
        min-width: 174px;
    }
    .puppy-nudge-header>img:first-child{
        display:none;

    }
    .puppy-nudge-header>img:last-child{
        display:block;

    }
    .gx-inner-content li {
        line-height: 28px;
        font-size: 16px;
    }

    .gx-main-container {
        margin: 0 20px;
    }

    .gx-row-flex-center {
        margin: 20px 0;
    }

    .guide-content-wrap {
        flex-direction: row;
    }

    .guide-content-wrap>div:first-child {
        margin-right: 20px;
    }

    .gx-left-content>h1 {
        font-size: 50px;
        line-height: 52px;
    }

    .gx-sort {
        max-width: 250px;
    }

}

@media screen and (min-width: 601px) {


    img[alt="Doggy Bone"] {
        height: 524px;
    }

    img[alt="Doggy Pink"] {

        height: 528px;
    }
}

@media screen and (min-width: 1025px) {
    .puppy-content {
        margin-right: 20px;
    }
}
</style>`);