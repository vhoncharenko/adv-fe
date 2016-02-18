$( document ).ready( function () {

    var postsJsonTemplate = Handlebars.compile( $( '#posts-json-template' ).html() );

    Handlebars.registerPartial( 'post-json', $( '#post-json-template' ).html() );

    Handlebars.registerHelper( 'json', function(rows, options) {
        var buffer = [],
            i, len;

        for (i = 0, len = rows.length; i < len; ++i) {
            var row = rows[i];
            row.class = ( i + 1 ) % 2 === 0 ? 'even' : 'odd';

            buffer.push( options.fn(row) );
        }

        return buffer.join('');
    });

    renderJsonPosts();

    function renderJsonPosts() {
        var posts = Data.getPosts();

        $( '.posts-container__json' ).html( postsJsonTemplate({
            posts: posts
        }) );
    }

});

