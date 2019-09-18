<?php
/**
 * Template Name: Treviso
 */

get_header();
?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content/content', 'treviso' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
function admin_style() {
	wp_enqueue_style('admin-normalize', get_template_directory_uri() . '/admin-normalize.css', 'admin-bar', '1.0.0');
}
add_action('admin_enqueue_scripts', 'admin_style');
get_footer();
