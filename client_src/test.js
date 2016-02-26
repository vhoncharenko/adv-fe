$( document ).ready( function () {

    var postsJsonTemplate = Handlebars.compile( $( '#posts-json-template' ).html() );
    var postsStripeTemplate = Handlebars.compile( $( '#posts-stripe-template' ).html() );

    Handlebars.registerHelper( 'json', function( obj ) {
        return new Handlebars.SafeString(
            '<pre>'
            + Handlebars.escapeExpression( JSON.stringify( obj, false, 4 ) )
            + '<pre>'
        );
    });

    Handlebars.registerHelper('stripes', function(posts, options) {
        return posts.map(function( post, index ) {
            var postClass = (index % 2 == 0)
                ? 'posts-container__stripes__post_even'
                : 'posts-container__stripes__post_odd';

            return '<div class="'
                + postClass
                + '">'
                + post.description
                + '</div>';
        }).join( '' );
    });

    function render() {
        renderJsonPosts();
        renderStripePosts();
    }

    render();

    function renderJsonPosts() {
        var posts = Data.getPosts();

        $( '.posts-container__json' ).html( postsJsonTemplate({
            posts: posts
        }) );
    }

    function renderStripePosts() {
        var posts = Data.getPosts();

        $( '.posts-container__stripes' ).html( postsStripeTemplate({
            posts: posts
        }) );
    }

});

