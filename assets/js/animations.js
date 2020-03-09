(function () {
    mobileDevicesTimeline = new TimelineMax()
    desktopDevicesTimeline = new TimelineMax()

    var windowHeight

    var elements
    var elementsWithFirstDelay
    var elementsWithSecondDelay
    var devicesImages

    var devicesAnimated = false
    var previousDevicesAnimatedOnLayout = ''

    var hasKeyFeaturesBeenAnimated = false
    var keyFeaturesElements

    var hasWhyWeNeedCardsBeenAnimated = false
    var whyWeNeedElements

    var hasDevelopersPageDeveloperFeatureBeenAnimated = false
    var developersPageDeveloperFeatureElements

    function init() {
        windowHeight = window.innerHeight;
        elements = document.querySelectorAll('.slide-up-animation');
        elementsWithFirstDelay = document.querySelectorAll('.slide-up-animation-first-delay');
        elementsWithSecondDelay = document.querySelectorAll('.slide-up-animation-second-delay');
        devicesImages = document.querySelectorAll('.mac, .macbook, .bitrender, .theebly, .humdrum');
        keyFeaturesElements = document.querySelectorAll('.key-feature-animation')
        whyWeNeedElements = document.querySelectorAll('#why-we-need li')
        developersPageDeveloperFeatureElements = document.querySelectorAll('.developers-feature-section .col-3')
        animate()
    }


    function animate() {
        checkPosition()
    }

    function checkPosition() {
        if (elements != null) checkForSlidingDownAnimation()
        animateDevicesImages()
        animateKeyFeatures()
        animateWhyWeNeed()
        animateDeveloperFeatures()
    }

    function mobileTimeLine1() {
        var tl = new TimelineMax()
        tl.fromTo(document.getElementById("device_mac"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        })
        tl.fromTo(document.getElementById("device_macbook"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.5')
        tl.fromTo(document.getElementById("device_bitrender"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.75')
        tl.fromTo(document.getElementById("device_theebly"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.6')
        tl.fromTo(document.getElementById("device_humdrum"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.6')
        return tl;
    }

    function mobileTimeLine2() {
        var tl = new TimelineMax()
        tl.fromTo(document.getElementById("device_mac_2"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        })
        tl.fromTo(document.getElementById("device_macbook_2"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.5')
        tl.fromTo(document.getElementById("device_bitrender_2"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.75')
        tl.fromTo(document.getElementById("device_theebly_2"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.6')
        tl.fromTo(document.getElementById("device_humdrum_2"), 3, {x: 1500}, {
            opacity: 1,
            x: -2000,
            ease: Power0.easeNone
        }, '-=2.6')
        return tl;
    }

    function animateDevicesForMobile() {
        devicesAnimated = true
        mobileDevicesTimeline.pause(0)
        mobileDevicesTimeline = new TimelineMax({repeat: -1, repeatDelay: -2, paused: true})
        mobileDevicesTimeline.add(mobileTimeLine1())
        mobileDevicesTimeline.add(mobileTimeLine2(), '-=2.5')
        mobileDevicesTimeline.add(mobileTimeLine1(), '-=2.5')
        mobileDevicesTimeline.add(mobileTimeLine2(), '-=2.5')
        mobileDevicesTimeline.add(mobileTimeLine1(), '-=2.5')
        mobileDevicesTimeline.add(mobileTimeLine2(), '-=2.5')
        mobileDevicesTimeline.timeScale(0.4)
        mobileDevicesTimeline.play()
    }

    function animateDevicesForDesktop() {
        desktopDevicesTimeline = new TimelineMax({repeat: 0, paused: true})
            devicesAnimated = true
            desktopDevicesTimeline.fromTo(document.getElementById("device_mac"), 1, {opacity: 0, x: 1000}, {
                opacity: 1,
                x: 0,
                ease: Power1.easeInOut
            })
            desktopDevicesTimeline.fromTo(document.getElementById("device_macbook"), 1, {opacity: 0, x: -1000}, {
                opacity: 1,
                x: 0,
                ease: Power1.easeInOut
            }, '-=0.5')
            desktopDevicesTimeline.fromTo(document.getElementById("device_bitrender"), 1, {opacity: 0, x: 1000}, {
                opacity: 1,
                x: 0,
                ease: Power1.easeInOut
            }, '-=1')
            desktopDevicesTimeline.fromTo(document.getElementById("device_theebly"), 1, {opacity: 0, x: -1000}, {
                opacity: 1,
                x: 0,
                ease: Power1.easeInOut
            }, '-=0.5')
            desktopDevicesTimeline.fromTo(document.getElementById("device_humdrum"), 1, {opacity: 0, x: 1000}, {
                opacity: 1,
                x: 0,
                ease: Power1.easeInOut
            }, '-=1')
            desktopDevicesTimeline.timeScale(0.8)
            desktopDevicesTimeline.play()
    }

    function isDeviceLayout() {
        return window.innerWidth <= 660
    }

    function animateDevicesImages() {
        var element = document.querySelectorAll('#join-hundreds-of-developers .images')[0]
        if (element == null || element === 'undefined') return

        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            if (isDeviceLayout()) {
                desktopDevicesTimeline.pause(0)
                if (previousDevicesAnimatedOnLayout != "mobile") {
                    previousDevicesAnimatedOnLayout = "mobile"
                    animateDevicesForMobile()
                }
            } else {
                if (previousDevicesAnimatedOnLayout != "desktop/tablet") {
                    previousDevicesAnimatedOnLayout = "desktop/tablet"
                    mobileDevicesTimeline.pause(0)
                    animateDevicesForDesktop()
                }
            }
        }
    }

    function checkForSlidingDownAnimation() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }

        for (var i = 0; i < elementsWithFirstDelay.length; i++) {
            var elementWithFirstDelay = elementsWithFirstDelay[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elementWithFirstDelay.classList.add('fade-in-element-first-delay');
                elementWithFirstDelay.classList.remove('hidden');
            }
        }

        for (var i = 0; i < elementsWithSecondDelay.length; i++) {
            var elementWithSecondDelay = elementsWithSecondDelay[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elementWithSecondDelay.classList.add('fade-in-element-second-delay');
                elementWithSecondDelay.classList.remove('hidden');
            }
        }
    }

    function animateKeyFeatures() {
        if (checkIfCanAnimate(keyFeaturesElements, hasKeyFeaturesBeenAnimated)) {
            animateStaggered(keyFeaturesElements, '.key-feature-animation', function () {
                hasKeyFeaturesBeenAnimated = true
            })
        }
    }

    function animateWhyWeNeed() {
        if (checkIfCanAnimate(whyWeNeedElements, hasWhyWeNeedCardsBeenAnimated)) {
            animateStaggered(whyWeNeedElements, '#why-we-need li', function () {
                hasWhyWeNeedCardsBeenAnimated = true
            })
        }
    }

    function animateDeveloperFeatures() {
        if (checkIfCanAnimate(developersPageDeveloperFeatureElements, hasDevelopersPageDeveloperFeatureBeenAnimated)) {
            animateStaggered(developersPageDeveloperFeatureElements, '.developers-feature-section .col-3', function () {
                hasDevelopersPageDeveloperFeatureBeenAnimated = true
            })
        }
    }

    function animateStaggered(elements, elementsToStagger, onStartCallback) {
        var positionFromTop = elements[0].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            onStartCallback()
            TweenMax.staggerFromTo(elementsToStagger, 1.4,
                {y: 200, opacity: 0},
                {y: 0, opacity: 1, delay: 0.5},
                0.25)
        }
    }

    function checkIfCanAnimate(elements, hasbeenAnimated) {
        return !(elements == null || elements == 'undefined' || hasbeenAnimated || elements.length == 0);
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    window.addEventListener('onload', function () {
        desktopDevicesTimeline = new TimelineMax()
        mobileDevicesTimeline= new TimelineMax()
    })

    init();
    checkPosition();
})();