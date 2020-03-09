if (device.windows()) {
    console.log("windows 3")

    function resizeVideo() {
        console.log('resizing')
        var video = document.querySelector('.video-bg')
        if (window.innerWidth > window.innerHeight) {
            video.setAttribute('style', 'width: 100%; height:auto;')
        } else {
            video.setAttribute('style', 'width: auto; height:100%;')
        }
    }

    window.addEventListener('onload', function(){
        console.log('onload', window.innerWidth, window.innerHeight)
        resizeVideo()
    })

    window.addEventListener('load', function(){
        console.log('onload', window.innerWidth, window.innerHeight)
        resizeVideo()
    })
    window.addEventListener('resize', resizeVideo)

} else {
    console.log("not windows 3")
}