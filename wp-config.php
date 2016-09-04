<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'brmayes_wpport_w');

/** MySQL database username */
define('DB_USER', 'brmayes_wpport_w');

/** MySQL database password */
define('DB_PASSWORD', 'eMeoIjnY');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'KETJqQa8HFMLPd6Eqq0nRzCMIDQXin37tWNtaAtYVGlr8egflpzjiF5doNpmH4LJ');
define('SECURE_AUTH_KEY', 'CgeZiIJSbPHiiQ4ptdn9dHeuA9RukLSNsdEtqHUVHp5LkfhbLztSIABKBc2ogAcJ');
define('LOGGED_IN_KEY', 'T23HV45WIwZw6OBaU1UUr48yFun9aOqzxJkAE49FRt78qF1MBElA0oCNHjGB9YoK');
define('NONCE_KEY', 'evQWH6x5Isn0DEQRRvPF5trHT2U1JrdXqLuljvIqZdP1RQ7LvhhNdiXacJpXwhC7');
define('AUTH_SALT', 'YiT9GyeUDVtwjIkGZ1AOAqJQ3EBe1RicjIAafvFpUgLPZTdFM1JKS2EqKGyuHUbv');
define('SECURE_AUTH_SALT', 'etmeczWGJGUJN1PlwE5zpIMzJg3fNsBd42MuzW0Vm5kM9RtMYQcerR5agXOmoZZh');
define('LOGGED_IN_SALT', 'WLD7fsz0kAEM4Fbg7mANrygZCKPyd6qJoQDHOXexf8YYTyKdoqupF5Ekpx5P48WZ');
define('NONCE_SALT', 'N8k59XA14glSEQFUqTkClL6VdujSzLKRgtCncCW2hX7cf5vfY65md8gNXj0RV7OI');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
