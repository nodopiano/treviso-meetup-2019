<?php
function service_block_registration() {
	
	if( function_exists('acf_register_block') ) {
		
		acf_register_block(array(
			'name'				=> 'services',
			'title'				=> __('Services'),
			'description'		=> __('A custom block to display services'),
			'render_callback'	=> 'services_render_callback',
			'category'			=> 'common',
			'icon'				=> 'wordpress', //dashicons: https://developer.wordpress.org/resource/dashicons
			'keywords'			=> array( 'nodopiano' ),
		));
	}
}
add_action('acf/init', 'service_block_registration');

function treviso_meetup_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'treviso-meetup',
				'title' => __( 'Treviso Meetup', 'treviso-meetup' ),
			),
			array(
				'slug' => 'nodopiano',
				'title' => __( 'Nodopiano', 'nodopiano' ),
			)
		)
	);
}
add_filter('block_categories', 'treviso_meetup_block_category', 10, 2);

function services_render_callback( $block ) {

	$slug = str_replace('acf/', '', $block['name']);
	
	if( file_exists( get_theme_file_path("/template-parts/block/{$slug}.php") ) ) {
		include( get_theme_file_path("/template-parts/block/{$slug}.php") );
	}
}

wp_enqueue_style('services', get_template_directory_uri() . '/template-parts/block/services.css', 'fontawesome-5', '1.0.0');