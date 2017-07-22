<?php
/*
* Add-on Name: Rquirement Form
*/

// var_dump($_POST); exit();
if(!class_exists('Best_Agent_Form_Module'))
{
	class Best_Agent_Form_Module {
		static $add_script = false;

		static function init() {
			add_action('wp_footer', array(__CLASS__, 'print_script'));
			add_shortcode('best_agent_form', array(__CLASS__, 'print_shortcode'));
			add_action('after_setup_theme', array(__CLASS__, 'add_vc_module'), 10);
		}

		static function print_script() {
			if ( ! self::$add_script )
				return;

			//wp_enqueue_script('form-validator');
		}

		// Shortcode handler function
		static function print_shortcode($atts, $content = null)	{
			self::$add_script = true;

			ob_start();
		?>
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.js"></script>
			<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
			<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular-animate.js"></script>
			<script src="/wp-content/themes/zerif-pro/includes/angular-base64.js"></script>
<!-- 			<script src="/wp-content/themes/zerif-pro/includes/angular.js"></script>
 -->			<!-- <script src="/wp-content/themes/zerif-pro/includes/angular.min.js"></script> -->
			<script src="/wp-content/themes/zerif-pro/includes/angular-route.js"></script>
			<script src="/wp-content/themes/zerif-pro/includes/config.js"></script>
			<script src="/wp-content/themes/zerif-pro/includes/appController.js"></script>
			<!-- <script src="/wp-content/themes/zerif-pro/includes/jquery.min.js"></script> -->

			<base href="/">
			<div ng-app="bestAgent" ng-controller="AppController">
				<div class="form-control-new" >
					<div ng-view></div>
				</div>
			</div>
	    
<!-- 	    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&libraries=places"></script>
	    <script src="http://jvandemo.github.io/angularjs-google-maps/dist/angularjs-google-maps.js"></script> -->
		

		<?php
			$output = ob_get_contents();
			ob_end_clean();
			return $output;
		}

		static function add_vc_module() {
			if (class_exists('WPBakeryVisualComposerAbstract')) {
				vc_map(array(
					'name' => esc_html__('Best Agent', ''),
					'base' => 'best_agent_form',
					'category' => esc_html__('Content', ''),
					'params' => array(
						
					)
				));
			}
		}
	}
}

if(class_exists('Best_Agent_Form_Module'))
{
	Best_Agent_Form_Module::init();
}
?>
