<?php get_header(); ?>


<?php

// check if the flexible content field has rows of data
if( have_rows('blocks') ):

    // loop through the rows of data
    while ( have_rows('blocks') ) :
        the_row();

        if( get_row_layout() == 'main_view' ):
            $mainTitle1 = get_sub_field('main_copy1');
            $mainTitle2 = get_sub_field('main_copy2');
            $mainImages = get_sub_field('main_images');
            include 'blocks/main_view.php';

        elseif( get_row_layout() == 'work_first' ): 
            $titleWorks = get_sub_field('title_works');
            $descriptionWorks = get_sub_field('description_works');
            $linkWorks = get_sub_field('link_works');
            include 'blocks/work_first.php';

        elseif( get_row_layout() == 'work_second' ): 
            $titleWorks = get_sub_field('title_works');
            $descriptionWorks = get_sub_field('description_works');
            $linkWorks = get_sub_field('link_works');
            include 'blocks/work_second.php'; 

        elseif( get_row_layout() == 'work_third' ): 
            $titleWorks = get_sub_field('title_works');
            $descriptionWorks = get_sub_field('description_works');
            $linkWorks = get_sub_field('link_works');
            include 'blocks/work_third.php';
            
            
        endif;
    
    endwhile;

else :

    // no layouts found

endif;

?>


<?php get_footer(); ?>