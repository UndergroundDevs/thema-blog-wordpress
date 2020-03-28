<?php
/**
 * Template part for displaying single post
 *
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header">

		<?php the_title( '<h1 class="title-post entry-title">', '</h1>' ); ?>

		
	</header><!-- .entry-header -->

	<?php if ( has_post_thumbnail() ) : ?>
		<div class="entry-thumb">
			<?php the_post_thumbnail('gohost-large-thumb'); ?>
		</div>
	<?php endif; ?>
	
	<div class="single-meta mb-3">
			<?php gohost_posted_on(); 
				gohost_edit_link(); 
			?>
	</div><!-- .entry-meta -->
		
	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'gohost' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

</article><!-- #post-## -->
