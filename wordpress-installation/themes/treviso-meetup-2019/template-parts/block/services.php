<?php
/**
 * Block Name: Services
 *
 * This is the template that displays the services block.
 */

$servizi = get_field('servizi');
$class_name = 'services';
if( !empty($block['className']) ) {
    $class_name .= ' ' . $block['className'];
}
$id = 'service-' . $block['id'];
$align_class = $block['align'] ? 'align' . $block['align'] : '';
?>
<div id="<?php echo $id; ?>" class="<?php echo $class_name; ?> <?php echo $align_class; ?>">
    <div class="services__inner">
        <?php foreach($servizi as $servizio) : ?>
            <div class="service">
                <div class="service__inner">
                    <div class="service__icon">
                        <i class="fa fa-<?php echo $servizio['value']; ?>"></i>
                    </div>
                    <h4 class="service__title">
                        <?php echo $servizio['label']; ?>
                    </h4>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>