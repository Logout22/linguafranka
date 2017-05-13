'use strict';

const services = [{
    name: 'pons',
    generateLookupUrl: function(srcLng, dstLng, word) {
        const translationUrls = {
            'Deutsch': {
                'English': 'deen',
                'Français': 'defr',
                'Italiano': 'deit',
                'Español (Si!)': 'dees'
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
            'Deutsch': {
                'English': 'englisch-deutsch',
                'Français': 'französisch-deutsch',
                'Italiano': 'italienisch-deutsch',
                'Español (Si!)': 'spanisch-deutsch'
            }
        };
        return '//dict.leo.org/' +
            translationUrls[srcLng][dstLng] +
            '/' + word;
    }
},
{
    name: 'linguee',
    generateLookupUrl: function(srcLng,dstLng,word) {
        const translationUrls = {
            'Deutsch': {
                'English': 'deutsch-englisch',
                'Français': 'deutsch-franzoesisch',
                'Italiano': 'deutsch-italienisch',
                'Español (Si!)': 'deutsch-spanisch'
            }
        };
        return '//www.linguee.de/' +
            translationUrls[srcLng][dstLng] +
            '/search?source=auto&query=' + word;
    }
},
{
    name: 'dictcc',
    generateLookupUrl: function(srcLng,dstLng,word) {
        const translationUrls = {
            'Deutsch': {
                'English': 'deen',
                'Français': 'defr',
                'Italiano': 'deit',
                'Español (Si!)': 'dees'
            }
        };
        return '//' + translationUrls[srcLng][dstLng] + '.dict.cc/?s=' + word;
    }
},
{
    name: 'dictindustry',
    generateLookupUrl: function(srcLng,dstLng,word) {
        const translationUrls = {
            'Deutsch': {
                'English': 'deutsch-englisch',
                'Français': 'deutsch-französisch',
                'Italiano': 'deutsch-italienisch',
                'Español (Si!)': 'deutsch-spanisch'
            }
        };
        return '//de.dictindustry.com/' +
            translationUrls[srcLng][dstLng] +
            '/' + word;
    }
}
];

function appendIFrames() {
    services.forEach(function(service) {
        $('#iframes').append('<iframe id="' + service.name + 'Frame" src="about:blank" width="600" height="400"><p>Whoopsie! This prototype requires IFRAMEs to work. Sorry!</p></iframe>');
    });
}

function assembleUrls() {
    services.forEach(function(service) {
        const srcLng = $('#srcLng').val();
        const dstLng = $('#dstLng').val();
        const word = encodeURIComponent($('#word').val());
        const targetUrl = service.generateLookupUrl(srcLng, dstLng, word);
        $('#' + service.name + 'Frame').attr('src', targetUrl);
    });
}

function loadFrames() {
    if (!$('#ponsFrame').length) {
        appendIFrames();
    }
    assembleUrls();
}

$('#search').click(loadFrames);
