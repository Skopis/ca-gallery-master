console.log('Starting up');



function initPage() {
    renderPage();
}

function renderPage() {
    var projs = getProjs();
    var srtHTMLModals = '';
    var srtHTMLPortfolio = '';
    for (var i = 0; i < projs.length; i++) {
        var currproj = projs[i];
        srtHTMLModals +=
            `<div class="portfolio-modal modal fade"
    id="portfolioModal${i + 1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <h2>${currproj.name}</h2>
                            <p class="item-intro text-muted">${currproj.title}</p>
                            <img class="img-fluid d-block mx-auto" src="img/portfolio/0${i + 1}-full.jpg" alt="">
                            <p>${currproj.desc}</p>
                            <ul class="list-inline">
                                <li>Date: ${currproj.publishedAt}</li>
                                <li><a href="${currproj.url}" target="_blank">App Link</a></li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                Close Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> `


        srtHTMLPortfolio +=
            `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i + 1}">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${i + 1}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${currproj.name}</h4>
        </div>
    </div>`
    };

    document.querySelector('.modals-container').innerHTML = srtHTMLModals;
    document.querySelector('#portfolio-container').innerHTML = srtHTMLPortfolio;
}


function sendEmail() {
    var name = $('#fname').val();
    var subject = $('#subject').val();
    var linkStr = 'https://mail.google.com/mail/?view=cm&fs=1&to=lian.skopis@hmail.com&su=' + name + '&body=' + subject;

    window.open(linkStr, '_blank');
}