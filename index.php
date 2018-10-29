<?php get_header(); ?>


<?php

// check if the flexible content field has rows of data
if( have_rows('blocks') ):

    // loop through the rows of data
    while ( have_rows('blocks') ) :
        the_row();

        if( get_row_layout() == 'main_view' ):
            $greeting = get_sub_field('greeting');
            $type_of_job = get_sub_field('type_of_job');
            $under_content = get_sub_field('under_content');            
            include 'blocks/main_view.php';

        elseif( get_row_layout() == 'work_first' ): 
            $category = get_sub_field('category');
            $title = get_sub_field('title');
            $image = get_sub_field('image');
            $description = get_sub_field('description');
            include 'blocks/work_first.php';

        elseif( get_row_layout() == 'work_second' ): 
            $category = get_sub_field('category');
            $title = get_sub_field('title');
            $image = get_sub_field('image');
            $description = get_sub_field('description');
            include 'blocks/work_second.php';

        elseif( get_row_layout() == 'work_third' ): 
            $category = get_sub_field('category');
            $title = get_sub_field('title');
            $image = get_sub_field('image');
            $description = get_sub_field('description');
            include 'blocks/work_third.php';   
            
        endif;
    
    endwhile;

else :

    // no layouts found

endif;

?>


<?php get_footer(); ?>