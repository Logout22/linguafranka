'use strict';

const services = [
    {
        name: 'pons',
        baseUrl: '//de.pons.com/%C3%BCbersetzung?l=',
        translationUrls: {
            'Deutsch' : {
                'English' : 'deen',
                'Français' : 'defr',
                'Italiano' : 'deit',
                'Español (Si!)' : 'dees'
            }
        },
        lookupUrl : '&q='
    },
    {
        name: 'leo',
        baseUrl: '//dict.leo.org/',
        translationUrls: {
            'Deutsch' : {
                'English' : 'englisch-deutsch',
                'Français' : 'französisch-deutsch',
                'Italiano' : 'italienisch-deutsch',
                'Español (Si!)' : 'spanisch-deutsch'
            }
        },
        lookupUrl : '/'
    }
];

function appendIFrames() {
    services.forEach(function(service) {
        $('#iframes').append('<iframe id="'+service.name+'Frame" src="about:blank" width="600" height="400"><p>Whoopsie! This prototype requires IFRAMEs to work. Sorry!</p></iframe>');
    });
}

function assembleUrls() {
    services.forEach(function(service) {
        const srcLng = $('#srcLng').val();
        const dstLng = $('#dstLng').val();
        const translationUrl = service.translationUrls[srcLng][dstLng];
        const word = encodeURIComponent($('#word').val());
        const targetUrl = service.baseUrl + translationUrl + service.lookupUrl + word;
        console.log("Loading " + targetUrl + " for service " + service.name);
        $('#'+service.name+'Frame').attr('src', targetUrl);
    });
}

function loadFrames() {
    if (!$('#ponsFrame').length) {
        appendIFrames();
    }
    assembleUrls();
}

$('#search').click(loadFrames);
