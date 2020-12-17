<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'modules' => [
        'user' => [
            'class' => 'dektrium\user\Module',
            'adminPermission' => 'administrator',
            'modelMap' => [
                'User' => 'app\models\User',
            ],
         //'admins' => ['admin']
        ],
        'rbac' => 'dektrium\rbac\RbacWebModule',
        'api' => [
            'class' => 'app\modules\api\Module',
        ],
    ],
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'xK59rkkEv6NOWWJRIJS5Hg96hZb_dcSU',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'redis' => [
            'class' => 'yii\redis\Connection',
            'hostname' => 'localhost',
            'port' => 6379,
            'database' => getenv('REDIS_DB'),
        ],
        'authManager'=>[
            'class' => 'dektrium\rbac\components\DbManager',
            'defaultRoles' => ['user'],
        ],
        'user' => [
            'identityClass' => 'dektrium\user\models\User',
//            'defaultRoles' => ['admin', 'viewer'],
            'enableAutoLogin' => true,
            'identityCookie' => [
                'name' => '_identity',
                'httpOnly' => false,
                'domain' => '.' . $params['domain'],
            ],
            'loginUrl' => ['/user/security/login'],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'transport' => [
                    'class' => 'Swift_SmtpTransport',
                    'host' => 'smtp.yandex.ru',
                    'username' => getenv('APP_MAILER_USERNAME'),
                    'password' => getenv('APP_MAILER_PASSWORD'),
                    'port' => 465,
                    'encryption' => 'ssl',
             ],
            'enableSwiftMailerLogging' =>false,
            'useFileTransport' => false,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                ['class' => 'yii\rest\UrlRule', 'controller' => 'default'],
            ],
        ],

    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
