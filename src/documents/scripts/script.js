YUI({
        gallery: 'gallery-2013.03.27-22-06'
    }).use('gallery-tipsy','gallery-popover', function (Y) { 
        //Y.Popover is loaded and good to go.

     var tipsy = new Y.Tipsy({
        selector: "[rel='tipsy']"
    });

    tipsy.render(); 
});