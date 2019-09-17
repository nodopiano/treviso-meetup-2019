import classnames from 'classnames'
import './editor.scss'
import './style.scss'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

const services = [
  {
    ID: 30101,
    slug: 'wifi',
    title: 'WiFi',
    icon: 'wifi'
  },
  {
    ID: 30102,
    slug: 'aria-condizionata',
    title: 'Aria Condizionata',
    icon: 'snowflake',
  },
  {
    ID: 30103,
    slug: 'servizio-in-camera',
    title: 'Servizio in camera',
    icon: 'phone'
  },
  {
    ID: 30104,
    slug: 'cassaforte',
    title: 'Cassaforte',
    icon: 'key'
  },
  {
    ID: 30105,
    slug: 'tv',
    title: 'TV',
    icon: 'tv'
  },
  {
    ID: 30106,
    slug: 'frigo-bar',
    title: 'Frigo Bar',
    icon: 'cocktail'
  },
  {
    ID: 30107,
    slug: 'asciugacapelli',
    title: 'Asciugacapelli',
    icon: 'wind'
  },
  {
    ID: 30108,
    slug: 'giornali-online',
    title: 'Giornali Online',
    icon: 'newspaper'
  }
]

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
registerBlockType('nodopiano/servizi', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Selezione dei servizi'), // Block title.
  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [
    __('Selezione dei servizi'),
    __('Servizi disponibili'),
    __('create-guten-block')
  ],
  attributes: {
    selectedServices: {
      type: Array,
      default: [],
    }
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
  edit: props => {
    const { setAttributes, attributes, className } = props

    const handleSelect = service => {
      let currentSelected = [...attributes.selectedServices]

      if (currentSelected.find(({ ID }) => ID === service.ID))
        currentSelected = currentSelected.filter(({ ID }) => ID !== service.ID)
      else
        currentSelected.push(service)

      setAttributes({ selectedServices: currentSelected })
    }

    return (
      <div className={classnames('services-selector__wrapper services-wrapper ', className)}>
        <div className="services-selector">
          <div className="services-selector__help">
            Seleziona i servizi disponibili dalla lista
          </div>
          {services.map(service => (
            <button
              key={service.ID}
              className={
                classnames('service', { 'service--selected': attributes.selectedServices.find(({ ID }) => ID === service.ID) })
              }
              onClick={() => handleSelect(service)}
            >
              <i className={`fas fa-${service.icon}`}></i><span className="service__button">{service.title}</span>
            </button>
          ))}
        </div>
      </div>
    )
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
  save: props => {
    return (
      <div className={classnames('services__wrapper', props.className)}>
        <div className="services__inner">
          {props.attributes.selectedServices.map(service => (
            <div className="service">
              <div className="service__inner">
                <div className="service__icon">
                  <i className={`fa fa-${service.icon}`}></i>
                </div>
                <h4 className="service__title">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
})
