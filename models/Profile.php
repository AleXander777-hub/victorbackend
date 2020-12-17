<?php

/*
 * This file is part of the Dektrium project.
 *
 * (c) Dektrium project <http://github.com/dektrium/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace app\models;

use Yii;
use dektrium\user\models\Profile as BaseProfile;
use dektrium\user\models\User;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "profile".
 *
 * @property integer $user_id
 * @property string  $name
 * @property string  $public_email
 * @property string  $gravatar_email
 * @property string  $gravatar_id
 * @property string  $location
 * @property string  $website
 * @property string  $bio
 * @property string  $timezone
 * @property string  $photo
 * @property float   $credit
 * @property integer $referrer_id
 * @property User    $user
 *
 * @author Dmitry Erofeev <dmeroff@gmail.com
 */
class Profile extends BaseProfile
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        $rules = parent::rules();
        $rules[] =  [['photo'], 'string', 'max' => 255];
        $rules[] =  [['photo','credit','referrer_id'], 'safe'];
        $rules[] =  [['referrer_id'], 'integer'];
        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        $labels = parent::attributeLabels();
        $labels['photo'] = 'Аватар';
        $labels['credit'] = 'Кредиты';
        $labels['referrer_id'] = 'Реферер';
        return $labels;
    }

    public function getAvatarUrl($size = 200)
    {
        if (!empty($this->photo)) {
            return $this->photo;
        } else {
            return parent::getAvatarUrl($size);
        }
    }

    public function getReferrer()
    {
        return $this->hasOne(User::className(), ['id' => 'referrer_id']);
    }

}
