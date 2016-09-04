=== Plugin Name ===
Contributors: ArshamMirshah
Tags: add posts to pages, add post to page, posts, pages, dynamic, shortcode, insert posts, 
Requires at least: 3.0.1
Tested up to: 3.9.2
Stable tag: trunk
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl.html

Easily add posts to pages. 
Add posts anywhere on the page (top, bottom, middle). 
Filter by category, tag, and choose number of posts to show.


== Description ==

Easily add posts to pages with this super lightweight plugin. You can add them anywhere on the page (top, middle, bottom), all just as easy as the next.

Just choose:

* Number of posts to show
* Post cateogry to pull from
* Any number of tags to pull from

More options:

* To show the full post or just the title
* To show the feature post thumbnail (or not)
* Heading size to use (<hX>)

An voila - you've ADDED a filter list of posts to whatever page you want!

**Future updates**

1. Ability to choose unordered (bullets) or ordered (numbered) list
1. Bunch of tweaks to give you more options
1. Whatever you want.. just leave feedback with feature requests :)


== Installation ==

This section describes how to install the plugin and get it working:

1. Download `add-posts-to-pages.zip` by clicking the "Download" on this page
1. From your WordPress admin menu, click Plugins -> Add New
1. Click "Upload" link at the top of the page
1. Upload `add-posts-to-pages.zip` to your WordPress
1. Activate the plugin by clicking "Activate plugin"
1. Use [add_posts category=category-slug tag=tag-slug show=5] anywhere in the content of your posts to add posts to your pages
1. Visit the following page for usage instructions

http://www.webmechanix.com/wordpress-plugins/add-posts-pages/

== Frequently Asked Questions ==

Here's the full documentation / usage instructions:
http://www.webmechanix.com/wordpress-plugins/add-posts-pages/

= Your question here... =
Send me your questions ... "plugins [at] webmechanix.com"

I'll set up a github soon :)

== Screenshots ==

1. 3 simple steps: 
<br /> 1. Add a shortcode to your page's content using these options: http://www.webmechanix.com/wordpress-plugins/add-posts-pages/ 
<br /> 2. Update that page.  
<br /> 3. View that page (adjust options as needed).

2. Showing step 1: adding the shortcode to your page content.

3. Another exmaple using post thumbnails.

== Changelog ==

= 1.4.1 =
* Added .readmore class to the read more link (so you can target & style it :)

= 1.4 =
* Fixed full=false issue where it would show full post if you specified full=false
* Added do_shortcode to allow for full posts to render shortcodes that are in the post
* Added ability to break content at "read more" point

= 1.3.1 =
* Fixed NextGen Gallery (and probably other plugin) conflict.

= 1.3 =

* Changed from query_posts to get_posts --- This should fix some interference with other plugins

= 1.2.6 =
[IMPORTANT FOR STYLING] If you or your webmaster has made CSS (style or look & feel) changes to how this plugin outputs, please note the below:

* [IMPORTANT FOR STYLING] CHANGED class for full post from "add_posts" to "add_posts_content"
* [STYLING] ADDED clearing styles to headers in hope to help normalize output across all stylesheets: <h# style="clear:both;>"
* [STYLING] ADDED final clearing div to clear floats (should help styling out of the box)

= 1.2.5 =

* [STYLING] ADDED class="add_posts" wrapper for CSS targeting

= 1.2 =
* ADDED ability to show full post
* ADDED ability to show feature post thumbnail
* ADDED ability to choose heading size for post title

= 1.0.1 =
* ADDED links to usage instructions

= 1.0 =
* Release of the plugin! :)

== Upgrade Notice ==

= 1.4.1 =
* Added .readmore class to the read more link (so you can target & style it :)

= 1.4 =
* Fixed full=false issue where it would show full post if you specified full=false
* Added do_shortcode to allow for full posts to render shortcodes that are in the post
* Added ability to break content at "read more" point

= 1.3 =
Changed from query_posts to get_posts --- This should fix some interference with other plugins! :)

= 1.2.6 =
[IMPORTANT FOR STYLING] If you or your webmaster has made CSS (style or look & feel) changes to how this plugin outputs, please note the changelog.

= 1.2 =
* ADDED ability to show full post
* ADDED ability to show feature post thumbnail
* ADDED ability to choose heading size for post title

= 1.0.1 =
* ADDED links to usage instructions

= 1.0 =
* Release of the plugin! :)