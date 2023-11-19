$('.control.video_control.play')[0].click();
setTimeout(() => {  $('.control.video_control.pause')[0].click(); }, 1000);

function sploit() {  
    HXVideoWatch.video_length = Number($('.ui-slider-handle.progress-handle.ui-state-default.ui-corner-all').attr('aria-valuemax'));
    HXVideoWatch.watch_times = Array.from(Array(HXVideoWatch.video_length).keys());
    
    
    $('.submit.btn-brand')[0].click();
    //$('.sequence-nav-button.button-next')[0].click();
}
setTimeout(() => {  sploit(); }, 1000);