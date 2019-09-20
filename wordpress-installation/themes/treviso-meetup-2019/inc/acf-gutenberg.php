<?php
/* La funzione che definisce il blocco */
function service_block_registration() {
	
	if( function_exists('acf_register_block_type') ) {
		
		acf_register_block_type(array(
			'name'				=> 'services',
			'title'				=> __('Services'),
			'description'		=> __('A custom block to display services'),
			'render_callback'	=> 'block_render_callback',
			'category'			=> 'common',
			'icon'				=> 'wordpress', //dashicons: https://developer.wordpress.org/resource/dashicons
			'keywords'			=> array( 'nodopiano' ),
			'styles'			=> array(
				array(
					'name' => 'default',
					'label' => __( 'Default' ),
					'isDefault' => true
				),
				array(
					'name' => 'rounded',
					'label' => __( 'Rounded' )
				),
				array(
					'name' => 'circle',
					'label' => __( 'Circle' )
				)
			),
			'enqueue_style' => get_template_directory_uri() . '/template-parts/block/services.css'
		));
	}
}
add_action('acf/init', 'service_block_registration');

/* La funzione che definisce il template blocco - Render function */
function block_render_callback( $block ) {

	$slug = str_replace('acf/', '', $block['name']);
	
	if( file_exists( get_theme_file_path("/template-parts/block/{$slug}.php") ) ) {
		include( get_theme_file_path("/template-parts/block/{$slug}.php") );
	}

}

/* La funzione per definire nuove categorie */
function treviso_meetup_block_category( $categories, $post ) {

	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'treviso-meetup',
				'title' => __( 'Treviso Meetup', 'treviso-meetup' ),
			)
		)
	);

}
add_filter('block_categories', 'treviso_meetup_block_category', 10, 2);
