/*=========================================*/
/*          Experience  slide              */
/*=========================================*/
$('.timeline-xp li').on('click', showTimelineXpBlock);
$('.btn-prev').on('click', prevXpTimeline);
$('.btn-next').on('click', nextXpTimeline);

function showTimelineXpBlock() {
    var listNumber = $('.timeline-xp li').index(this);
    $(".timeline-xp li").removeClass("current-xp");
    $(this).addClass("current-xp");
    showAndHideXpContent(listNumber);
};

function nextXpTimeline () {
    $('.current-xp').removeClass('current-xp').next().addClass('current-xp');
    var item = $(".timeline-xp li.current-xp").index();
    showAndHideXpContent(item);
};

function prevXpTimeline () {
    $('.current-xp').removeClass('current-xp').prev().addClass('current-xp');
    var item = $(".timeline-xp li.current-xp").index();
    showAndHideXpContent(item);
};

function showAndHideXpContent (index) {
    $('.xp-list-block li').removeClass("current-block");
    var currentBlock = document.querySelectorAll(".xp-list-block li")[index];
    $(currentBlock).addClass("current-block");

    // hide all elements that don't share the currentClass
    $('.xp-list-block').children('li:not(.current-block)').hide();
    // show all elements that do share the currentClass
    $('.xp-list-block').children('li.current-block').show();

    var last = $('.timeline-xp li:last').attr("class");
    var first = $('.timeline-xp li:first').attr("class");

    if( 'current-xp' == last ){
        $('.btn-prev').prop('disabled', false);
        $('.btn-next').prop('disabled', true);
    }else{
        $('.btn-next').prop('disabled', false);
        if( 'current-xp' == first ){
            $('.btn-prev').prop('disabled', true);
        }else{
            $('.btn-prev').prop('disabled', false);
            $('.btn-next').prop('disabled', false);
        }
    }
};

