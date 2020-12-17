<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;
use dektrium\user\models\User as BaseUser;
use yii\web\ForbiddenHttpException;

class User extends BaseUser
{
    public static function findIdentityByAccessToken($token, $type = null)
    {
//        return self::findOne(['vk_auth_key' => $token]);
        return static::findOne(['access_token' => $token]);

    }

    public static function getFullList() {
        $models =  self::find()->all();
        return ArrayHelper::map($models,'id','username');
    }
}
