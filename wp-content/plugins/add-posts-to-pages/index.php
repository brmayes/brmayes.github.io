<?php
/*
Plugin Name: Add Posts to Pages
Plugin URI: http://www.webmechanix.com/wordpress-plugins/add-posts-pages/
Description: Easily add posts to pages with this super lightweight plugin. Just select the number of posts to show & the category to pull them from and voila, you've added a set of posts anywhere on any page.
Version: 1.4.1
Author: Arsham Mirshah
Author URI: http://www.webmechanix.com/
License: GPL2
*/

/*
** Function: add_posts_func
** Purpose: shortcode to allow easy addition of filtered posts to pages in WordPress
** Inputs: 
** show - number of posts to show
** category - the slug of the category to be shown
** tag - the slug of the tag to be shown
** Output: an unordered list of posts matching the input filter parameters using query_posts() WordPress function
*/
function add_posts_func( $atts ) {

	//extracting input parameters (attributes of shortcode)
	extract( shortcode_atts( array(
		'show' => 5,
		'category' => '',
		'tag' => '',
		'full' => false,
		'h' => '2',
		'img' => false,
		'size' => 64,
		'readmore' => false
	), $atts ) );


/***************************************************Config*********************************************************/

//setting full/img to false if it comes through as a string
if($full == 'false'){
	$full = false;
}
if($img == 'false'){
	$img = false;
}
if($readmore == 'false'){
	$readmore = false;
}

//setting header size
$h = 'h'.$h;

//querying posts on input filter parameters
$posts = get_posts('category_name='.$category.'&posts_per_page='.$show.'&tag='.$tag);
wp_reset_postdata();

/***************************************************Out***********************************************************/

//setting the output variable and setting it with a targetable class
global $out;
$out = '<div class="add_posts">';

//if NOT full & No images output, start a unordered list
if(!$full && !$img)
$out .= '<ul>';



//START foreach post returned LOOP
foreach($posts as $post){

	//Setting a bunch of variables we'll use later
	$postID = $post->ID;
	$permalink = get_permalink($postID);
	$title = $post->post_title;

	//If there's an image, add the image to the output
	if($img){
	
	 $out .= '<a class="post-thumb alignleft" style="float:left; margin-right:15px; clear:both;" href="' . $permalink . ' ">'
	 		 .get_the_post_thumbnail($postID, array($size,$size))
	 		 .'</a>';
	 		 
	}
	
	if($full || $readmore){

		//grab all the content of this post
		$content = $post->post_content;

		//if we're reading more
		if($readmore){
			//change the content to only the content before the more break point
			$more = strpos($content, "<!--more-->");
			if($more){
				$content = substr($content, 0, $more);
			}
		}

		//format content as needed
		$content = wpautop(do_shortcode($content));
		$content = str_replace(']]>', ']]&gt;', $content);
	
		//output full post
		$out .= '<div class="add_posts_content" style="clear:both;">';
		$out .= '<'.$h.' class="title" style="clear: none;"><a href="' . $permalink . '">' . $title . '</a></'.$h.'>';
		$out .= '<div class="post-content" style="clear:both";>'.$content;
		
		//formatting for read more
		if($readmore){
			$out .= ' <a href="' . $permalink . '" class="readmore">' . $readmore . '</a>';
		}
		
		//close the post with a nice <hr>
		$out .= '</div>';			
		$out .= '<hr style="margin:10px 0">';
		$out .= '</div>';

	//If NOT full, output either the <li> or <h#> tags & the title of the post
	} else {
		
		//If images: <h#>, else: <li>
		if($img){$out .= '<'.$h.' class="title" style="clear: none;">';} else {$out .= '<li>';}
	
		//output permalinked title no matter what :)
		$out .= '<a href="' . $permalink . '">' . $title . '</a>';	
	
		//cleaning up
		if($img){$out .= '</'.$h.'>';} else {$out .= '</li>';}
	}

	
} //END foreach post returned LOOP



//if NOT full output and no images, close the unordered list
if(!$full && !$img)
$out .= '</ul>';

//End class="add_posts" 
$out .= '</div>';
$out .= '<div style="clear: both;"></div>';

//returning the output to page
return $out;
}

//instantiate the shortcode
add_shortcode( 'add_posts', 'add_posts_func' );

?>