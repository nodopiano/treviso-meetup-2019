/**
 * BLOCK: Servizi
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import classnames from 'classnames';

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

// Lista dei servizi disponibili
const services = [
	{
		ID: 30101,
		slug: 'wifi',
		title: 'Wi - Fi',
		icon: 'wifi',
	},
	{
		ID: 30102,
		slug: 'aria-condizionata',
		title: 'Aria Condizionata',
		icon: 'snowflake',
	},
];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'nodopiano/servizi', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Selezione dei servizi' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Selezione dei servizi' ),
		__( 'Servizi disponibili' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		selectedServices: {
			type: Array,
			default: [],
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const { setAttributes, attributes } = props;

		const handleSelect = service => {
			if ( attributes.selectedServices.find( mapService => mapService.ID === service.ID ) ) {
				setAttributes( { selectedServices: attributes.selectedServices.push( service ) } );
			} else {
				setAttributes( { selectedServices: attributes.selectedServices.slice( attributes.selectedServices.indexOf( service ), 1 ) } );
			}
		};

		return (
			<div className={ classnames( 'services-selector__wrapper services-wrapper ', props.className ) }>
				<div className="services-selector">
					<div className="services-selector__title"><b>Seleziona i servizi dalla lista</b></div>
					{ services.map( ( service ) => (
						<button key={ service.ID } className={
							classnames( 'service', { 'service--selected': props.attributes.selectedServices.find( mapService => mapService.ID === service.ID ) } )
						} onClick={ handleSelect }>
							<i className={ `fas fa-${ service.icon }` }></i><span className="service__button">{ service.title }</span>
						</button>
					) ) }
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
			<div className={ props.className }>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>np-servizi</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );
