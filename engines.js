'use strict';

const services = [
    {
        name: 'pons',
        generateLookupUrl: function(srcLng, dstLng, word) {
            const translationUrls = {
                'Deutsch' : {
                    'English' : 'deen',
                    'Français' : 'defr',
                    'Italiano' : 'deit',
                    'Español (Si!)' : 'dees'
                }
            };
            return '//de.pons.com/%C3%BCbersetzung?l=' +
                translationUrls[srcLng][dstLng] +
                '&q=' + word;
        }
    },
    {
        name: 'leo',
        generateLookupUrl: function(srcLng, dstLng, word) {
            const translationUrls = {
                'Deutsch' : {
                    'English' : 'englisch-deutsch',
                    'Français' : 'französisch-deutsch',
                    'Italiano' : 'italienisch-deutsch',
                    'Español (Si!)' : 'spanisch-deutsch'
                }
            };
            return '//dict.leo.org/' +
                translationUrls[srcLng][dstLng] +
                '/' + word;
        }
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
        const word = encodeURIComponent($('#word').val());
        console.log("Loading " + targetUrl + " for service " + service.name);
        const targetUrl = service.generateLookupUrl(srcLng, dstLng, word);
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
